import { Link, useLocation } from "react-router";
import { IoHome, IoCloudUpload, IoDocumentText, IoInformationCircle } from "react-icons/io5";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: IoHome, label: "Home" },
    { path: "/start", icon: IoCloudUpload, label: "Upload" },
    { path: "/results", icon: IoDocumentText, label: "Results" },
    { path: "/about", icon: IoInformationCircle, label: "About" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t
    lg:hidden border-gray-800 z-50 safe-area-inset-bottom">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center h-16 sm:h-20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className={`text-2xl sm:text-3xl mb-1 ${isActive ? "animate-bounce" : ""}`} />
                <span className="text-xs sm:text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
