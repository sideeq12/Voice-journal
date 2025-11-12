import { useState, useEffect, useRef } from "react";
import type { Route } from "./+types/start";
import { AudioToText, type AudioToTextRef } from "~/components/AudioToText";
import { useAudioRecorder } from "~/hooks/useAudioRecorder";
import { BottomNav } from "~/components/BottomNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Start Journaling - Voixera" },
    { name: "description", content: "Upload your audio journal entry" },
  ];
}

export default function Start() {
  const [transcription, setTranscription] = useState<string>("");
  const [recordedFile, setRecordedFile] = useState<File | null>(null);
  const [showRecordedAudio, setShowRecordedAudio] = useState(false);
  const audioToTextRef = useRef<AudioToTextRef>(null);

  const {
    isRecording,
    recordingTime,
    audioBlob,
    startRecording,
    stopRecording,
    clearRecording,
  } = useAudioRecorder();

  const handleTranscriptionComplete = (text: string) => {
    setTranscription(text);
    console.log("Transcription received:", text);
  };

  const handleTranscriptionError = (error: string) => {
    console.error("Transcription error:", error);
  };

  const handleRecordToggle = async () => {
    if (!isRecording) {
      try {
        await startRecording();
        setShowRecordedAudio(false);
        setRecordedFile(null);
      } catch (error) {
        console.error("Failed to start recording:", error);
      }
    } else {
      stopRecording();
    }
  };

  // Convert audio blob to file when recording stops
  useEffect(() => {
    if (audioBlob && !isRecording) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const file = new File([audioBlob], `recording-${timestamp}.webm`, {
        type: audioBlob.type,
      });
      setRecordedFile(file);
      setShowRecordedAudio(true);
    }
  }, [audioBlob, isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDiscardRecording = () => {
    clearRecording();
    setRecordedFile(null);
    setShowRecordedAudio(false);
  };

  return (
    <main className="min-h-screen bg-black pb-20">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">V</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Voixera</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Start Your Journal Entry
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Upload an audio file or record your thoughts directly
          </p>
        </div>

        {/* Upload Section with AI Transcription */}
        <div className="mb-8">
          <AudioToText
            ref={audioToTextRef}
            onTranscriptionComplete={handleTranscriptionComplete}
            onError={handleTranscriptionError}
          />
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-black text-gray-400 font-medium">
              OR
            </span>
          </div>
        </div>

        {/* Record Section */}
        <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Record Live
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-4">
              Click the button below to start recording your journal entry
            </p>

            <button
              onClick={handleRecordToggle}
              className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all transform hover:scale-105 ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600 animate-pulse"
                  : "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              } shadow-2xl shadow-green-900/50`}
            >
              {isRecording ? (
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              ) : (
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              )}
            </button>

            <p className="text-base sm:text-lg font-semibold text-white">
              {isRecording ? `Recording: ${formatTime(recordingTime)}` : "Ready to record"}
            </p>
            {isRecording && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Click again to stop recording
              </p>
            )}

            {/* Recorded Audio Preview */}
            {showRecordedAudio && recordedFile && audioBlob && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-950 rounded-xl border border-gray-800">
                <h4 className="text-sm sm:text-base font-semibold text-white mb-4 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Recording Complete ({formatTime(recordingTime)})
                </h4>
                <audio
                  controls
                  className="w-full mb-4"
                  src={URL.createObjectURL(audioBlob)}
                >
                  Your browser does not support the audio element.
                </audio>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (recordedFile && audioToTextRef.current) {
                        audioToTextRef.current.setFileFromRecording(recordedFile);
                        setShowRecordedAudio(false);
                      }
                    }}
                    className="flex-1 px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors font-medium"
                  >
                    Use This Recording
                  </button>
                  <button
                    onClick={handleDiscardRecording}
                    className="flex-1 px-4 py-2 text-sm sm:text-base bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors font-medium border border-gray-600"
                  >
                    Discard & Record Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Info */}
        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-md border border-gray-800">
            <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 border border-green-700/50">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Fast Processing
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              AI transcription in seconds with high accuracy
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-md border border-gray-800">
            <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 border border-green-700/50">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Secure & Private
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Your journals are encrypted and completely private
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-md border border-gray-800 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 border border-green-700/50">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Smart Analysis
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Automatic tone detection and emotional insights
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
