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
  const ctxProviderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ctxProviderRef.current) return;

    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    ctxProviderRef.current.addEventListener(
      "file-upload-success",
      handleUpload
    );

    return () => {
      ctxProviderRef.current?.removeEventListener(
        "file-upload-success",
        handleUpload
      );
    };
  }, []);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="90c0920ca80d2fd86bf2" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      {/* <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} /> */}
    </div>
  );
};

export default UploadCareButton;
