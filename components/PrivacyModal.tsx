"use client";

import { useEffect } from "react";
import PrivacyContent from "@/app/privacy/PrivacyContent";

type PrivacyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-[10px] min-[800px]:px-[40px]">
      <div className="relative bg-white w-full max-w-[1000px] max-h-[90vh] overflow-y-auto px-[20px] py-[40px] min-[800px]:px-[60px] min-[800px]:py-[60px]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[16px] right-[16px] min-[800px]:top-[24px] min-[800px]:right-[24px] w-[36px] h-[36px] flex items-center justify-center bg-black text-white hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <PrivacyContent />
      </div>
    </div>
  );
}
