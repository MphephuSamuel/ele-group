"use client";

import { ArrowLeft } from "lucide-react";

export function BackToCatalog() {
  function goBack() {
    const savedReturn = window.sessionStorage.getItem("catalog-return");
    if (savedReturn) {
      try {
        const { href } = JSON.parse(savedReturn) as { href: string };
        const returnUrl = new URL(href);
        if (returnUrl.origin === window.location.origin) {
          window.location.href = returnUrl.href;
          return;
        }
      } catch {
        window.sessionStorage.removeItem("catalog-return");
      }
    }

    if (document.referrer.startsWith(window.location.origin)) {
      window.history.back();
      return;
    }

    window.location.href = "/#shop";
  }

  return (
    <button type="button" className="product-back" onClick={goBack}>
      <ArrowLeft size={16} /> Back to supplies
    </button>
  );
}
