import { useState, useRef, useImperativeHandle, forwardRef } from "react";

interface AudioToTextProps {
  onTranscriptionComplete?: (transcription: string) => void;
  onError?: (error: string) => void;
}

export interface AudioToTextRef {
  setFileFromRecording: (file: File) => void;
}

export const AudioToText = forwardRef<AudioToTextRef, AudioToTextProps>(({
  onTranscriptionComplete,
  onError,
}, ref) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [article, setArticle] = useState<string>("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isGeneratingArticle, setIsGeneratingArticle] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Expose method to set file from recording
  useImperativeHandle(ref, () => ({
    setFileFromRecording: (recordedFile: File) => {
      processFile(recordedFile);
    }
  }));

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    processFile(selectedFile);
  };

  const processFile = (selectedFile: File | undefined) => {
    if (selectedFile && selectedFile.type.startsWith("audio/")) {
      setFile(selectedFile);
      setAudioUrl(URL.createObjectURL(selectedFile));
      setTranscription("");
    } else {
      const errorMsg = "Please select a valid audio file";
      setTranscription("");
      onError?.(errorMsg);
      alert(errorMsg);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    processFile(droppedFile);
  };

  const handleTranscribe = async () => {
    if (!file) return;

    setIsProcessing(true);

    try {
      // Create FormData to send file to backend
      const formData = new FormData();
      formData.append('audio', file);

      // Call backend API
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      console.log('Sending audio to backend:', backendUrl);
      console.log('File details:', { name: file.name, size: file.size, type: file.type });

      const response = await fetch(`${backendUrl}/api/transcribe`, {
        method: 'POST',
        body: formData,
      });

      console.log('Backend response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.message || 'Transcription failed');
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error('Transcription failed');
      }

      const transcriptionText = data.transcription || "No transcription available";
      setTranscription(transcriptionText);
      onTranscriptionComplete?.(transcriptionText);
    } catch (error) {
      console.error("Transcription error:", error);
      const errorMsg = error instanceof Error ? error.message : "Failed to transcribe audio. Please try again.";
      onError?.(errorMsg);
      alert(errorMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSummarize = async () => {
    if (!transcription) return;

    setIsSummarizing(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      console.log('Requesting summary from backend:', backendUrl);

      const response = await fetch(`${backendUrl}/api/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcription }),
      });

      console.log('Summary response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.message || 'Summarization failed');
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error('Summarization failed');
      }

      const summaryText = data.summary || "No summary available";
      setSummary(summaryText);
    } catch (error) {
      console.error("Summarization error:", error);
      const errorMsg = error instanceof Error ? error.message : "Failed to generate summary. Please try again.";
      onError?.(errorMsg);
      alert(errorMsg);
    } finally {
      setIsSummarizing(false);
    }
  };

  const handleGenerateArticle = async () => {
    if (!transcription) return;

    setIsGeneratingArticle(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      console.log('Requesting SEO article from backend:', backendUrl);

      const response = await fetch(`${backendUrl}/api/generate-article`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcription }),
      });

      console.log('Article response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.message || 'Article generation failed');
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error('Article generation failed');
      }

      const articleText = data.article || "No article available";
      setArticle(articleText);
    } catch (error) {
      console.error("Article generation error:", error);
      const errorMsg = error instanceof Error ? error.message : "Failed to generate article. Please try again.";
      onError?.(errorMsg);
      alert(errorMsg);
    } finally {
      setIsGeneratingArticle(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setTranscription("");
    setSummary("");
    setArticle("");
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Upload Section */}
      {!file && (
        <div
          className={`border-3 border-dashed rounded-xl p-8 sm:p-12 transition-all ${
            isDragging
              ? "border-green-500 bg-green-900/10"
              : "border-gray-700 bg-gray-900"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 px-4">
              Drop your audio file here
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4">
              or click to browse from your device
            </p>
            <label className="inline-block">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:from-orange-700 hover:to-red-700 transition-colors cursor-pointer inline-block shadow-lg shadow-orange-900/50">
                Choose Audio File
              </span>
            </label>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-4">
              Supported formats: MP3, WAV, M4A, OGG (Max 50MB)
            </p>
          </div>
        </div>
      )}

      {/* File Preview & Controls */}
      {file && (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/50">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base text-white truncate">{file.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="text-red-400 hover:text-red-300 text-xs sm:text-sm font-medium self-start sm:self-auto"
              >
                Remove
              </button>
            </div>

            {/* Audio Player */}
            {audioUrl && (
              <div className="mb-4">
                <audio controls className="w-full" src={audioUrl}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {/* Transcribe Button */}
            {!transcription && (
              <button
                onClick={handleTranscribe}
                disabled={isProcessing}
                className={`w-full py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  isProcessing
                    ? "bg-gray-700 cursor-not-allowed text-gray-400"
                    : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-900/50"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Transcribing with AI...
                  </span>
                ) : (
                  "Convert to Text with AI"
                )}
              </button>
            )}
          </div>

          {/* Transcription Result */}
          {transcription && (
            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Transcription Complete
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(transcription);
                    alert("Copied to clipboard!");
                  }}
                  className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium flex items-center self-start sm:self-auto"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="bg-gray-950 rounded-lg p-3 sm:p-4 border border-gray-800">
                <p className="text-sm sm:text-base text-gray-200 whitespace-pre-wrap">
                  {transcription}
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  {!summary && (
                    <button
                      onClick={handleSummarize}
                      disabled={isSummarizing}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                        isSummarizing
                          ? "bg-gray-700 cursor-not-allowed text-gray-400"
                          : "bg-green-600 text-white hover:bg-green-700 border border-green-700"
                      }`}
                    >
                      {isSummarizing ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-3 w-3 sm:h-4 sm:w-4 mr-2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Generating Summary...
                        </span>
                      ) : (
                        "Get Summary"
                      )}
                    </button>
                  )}
                  {!article && (
                    <button
                      onClick={handleGenerateArticle}
                      disabled={isGeneratingArticle}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                        isGeneratingArticle
                          ? "bg-gray-700 cursor-not-allowed text-gray-400"
                          : "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700"
                      }`}
                    >
                      {isGeneratingArticle ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-3 w-3 sm:h-4 sm:w-4 mr-2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Generating Article...
                        </span>
                      ) : (
                        "Generate SEO Article"
                      )}
                    </button>
                  )}
                </div>
                <button
                  onClick={handleReset}
                  className="w-full px-4 py-2 text-sm sm:text-base bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium border border-gray-600"
                >
                  Upload Another File
                </button>
              </div>
            </div>
          )}

          {/* Summary Result */}
          {summary && (
            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AI Summary
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(summary);
                    alert("Summary copied to clipboard!");
                  }}
                  className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium flex items-center self-start sm:self-auto"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="bg-green-900/20 rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                <p className="text-sm sm:text-base text-gray-200 whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>
          )}

          {/* SEO Article Result */}
          {article && (
            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SEO-Optimized Article
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(article);
                    alert("Article copied to clipboard!");
                  }}
                  className="text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-medium flex items-center self-start sm:self-auto"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="bg-orange-900/20 rounded-lg p-4 sm:p-6 border-l-4 border-orange-500 prose prose-sm sm:prose max-w-none prose-invert">
                <div className="text-sm sm:text-base text-gray-200 whitespace-pre-wrap">
                  {article}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

AudioToText.displayName = 'AudioToText';
