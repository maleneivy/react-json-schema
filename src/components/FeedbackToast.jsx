'use client'
import { useEffect } from "react";

export default function FeedbackToast({ message, type = "info", onClose, duration = 10000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-sm w-full p-8 border rounded shadow-lg animate-fade-in ${
        typeStyles[type] || typeStyles.info
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm">{message}</p>
        <button onClick={onClose} aria-label="Lukk" className="ml-4 font-bold">×</button>
      </div>
    </div>
  );
}
