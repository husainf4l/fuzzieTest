"use client";
import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<HTMLElement | null>(null); // Use HTMLElement for event listeners

  useEffect(() => {
    const handleUpload = async (e: Event) => {
      const customEvent = e as CustomEvent<{ cdnUrl: string }>;
      if (customEvent.detail?.cdnUrl) {
        const file = await onUpload(customEvent.detail.cdnUrl);
        if (file) {
          router.refresh();
        }
      }
    };

    const ctxElement = ctxProviderRef.current;
    if (ctxElement) {
      ctxElement.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (ctxElement) {
        ctxElement.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="90c0920ca80d2fd86bf2" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
      />

      {/* Assign ref properly using HTMLElement */}
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={(el) => {
          ctxProviderRef.current = el as HTMLElement | null;
        }}
      />
    </div>
  );
};

export default UploadCareButton;
