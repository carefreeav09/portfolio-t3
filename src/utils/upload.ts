/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// upload file/files to cloudinary using api

import { env } from "~/env.mjs";

// https://api.cloudinary.com/v1_1/carefreeav/image/upload

interface ICloudinaryImage {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  existing: boolean;
  original_filename: string;
}

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "portfolio-thumbnail");

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    console.log("Image uploaded successfully");
    const data: ICloudinaryImage = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export type { ICloudinaryImage };
export default uploadFile;