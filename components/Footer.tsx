"use client";

import { useState } from "react";
import Link from "next/link";
import PrivacyModal from "@/components/PrivacyModal";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="px-[10px] min-[1911px]:px-[65px] pt-[40px] pb-[40px] xl:pt-[50px] xl:pb-[50px] text-[13px] min-[800px]:text-[14px] xl:text-[16px]">
      {/* Top section */}
      {/* Mobile (<800px): single column stack */}
      {/* Desktop (≥800px): description left 50% | Milan + Tokyo right 50% */}
      <div className="flex flex-col min-[800px]:flex-row">
        {/* Description */}
        <div className="min-[800px]:w-1/2 min-[800px]:pr-[20px]">
          <p>We are a design consulting firm based in Milan and Tokyo.</p>
        </div>

        {/* Milan + Tokyo */}
        <div className="min-[800px]:w-1/2 min-[800px]:grid min-[800px]:grid-cols-2 min-[800px]:gap-x-[20px]">
          {/* Milan */}
          <div className="mt-[20px] min-[800px]:mt-0">
            <p className="font-medium">Milan</p>
            <p className="mt-[8px]">Via Ebro 4, Milan 20141, Italy</p>
            <p>Tel +39 02 36560702</p>
          </div>
          {/* Tokyo */}
          <div className="mt-[20px] min-[800px]:mt-0">
            <p className="font-medium">Tokyo</p>
            <p className="mt-[8px]">NL Building 2F, 2-13-16, Minamiaoyama,</p>
            <p>Minato-ku, Tokyo, Japan</p>
            <p>Tel +81 3 64349498</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-[20px] xl:mt-[20px] border-t border-black" />

      {/* Bottom section */}
      {/* Mobile: single column stack */}
      {/* Desktop: copyright left 50% | business + privacy right 50% */}
      <div className="mt-[20px] xl:mt-[25px] flex flex-col min-[800px]:flex-row">
        <div className="min-[800px]:w-1/2">
          <p>© 2025 DANS Inc. All Rights Reserved</p>
        </div>
        <div className="min-[800px]:w-1/2 min-[800px]:grid min-[800px]:grid-cols-2 min-[800px]:gap-x-[20px]">
          <p className="mt-[20px] min-[800px]:mt-0">
            Business Enquiries:{" "}
            <Link href="mailto:info@dans.jp" className="hover:opacity-50 transition-opacity underline!">
              info@dans.jp
            </Link>
          </p>
          <p className="mt-[20px] min-[800px]:mt-0">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:opacity-50 transition-opacity"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
}
