"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <Image
          src={value}
          alt="Uploaded Image"
          className="rounded-md size-40 object-cover"
          width={160} // ✅ Explicit width
          height={160} // ✅ Explicit height
          priority // ✅ Ensures it loads faster
        />
        <Button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
          aria-label="Remove uploaded image" // ✅ Accessibility improvement
        >
          <XIcon className="h-4 w-4 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res && res.length > 0) {
          onChange(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        console.error("Upload failed:", error.message); // ✅ Clearer error logging
      }}
    />
  );
}

export default ImageUpload;
