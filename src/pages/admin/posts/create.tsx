/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ReactElement } from "react";
import { useState } from "react";
import { Formik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Main from "~/components/layouts/Main.layout";

import "react-quill/dist/quill.snow.css";
import { QUILL_FORMAT, QUILL_MODULE } from "~/utils/quill";
import dynamic from "next/dynamic";
import uploadFile, { type ICloudinaryImage } from "~/utils/upload";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IPOSTS_CREATE {
  title: string;
  published: boolean;
  authorId: string;
  thumbnail: string | File;
  images: string[];
  tags: string[];
}

const Posts_Create = () => {
  const sessionData = useSession();

  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleSubmit = async (values: IPOSTS_CREATE) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", content);
    formData.append("published", values.published.toString());
    formData.append("authorId", sessionData?.data?.user?.id || "carefreeav");
    values.images.forEach((image) => {
      formData.append("images", image);
    });
    values.tags.forEach((tag) => {
      formData.append("tags", tag);
    });

    if (values.thumbnail as File) {
      const fileURL: ICloudinaryImage | undefined = await uploadFile(
        values.thumbnail as File
      );

      if (fileURL && fileURL.secure_url) {
        formData.set("thumbnail", fileURL.secure_url);
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          published: false,
          authorId: sessionData.data?.user?.id || "",
          thumbnail: "",
          images: [],
          tags: [],
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="mx-auto mt-10 max-w-lg" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-2xl font-bold">Create Post</h1>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />

              {errors.title && touched.title && errors.title}
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="content"
              >
                Content
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={QUILL_MODULE}
                formats={QUILL_FORMAT}
              />
            </div>

            <div className="mb-4">
              <label
                className="block font-bold text-gray-700"
                htmlFor="content"
              >
                Thumbnail
              </label>

              <div className="flex justify-center">
                <div className="rounded-lg shadow-xl lg:w-full">
                  <div className="m-4">
                    <div className="relative flex w-full items-center justify-center">
                      <label className="flex h-full w-full flex-col border-4 border-dashed hover:border-gray-300 hover:bg-gray-100">
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute left-0 right-0 top-0 h-40 w-80 bg-red-500 opacity-0"
                          onChange={(e) => {
                            if (e?.target?.files?.[0]) {
                              const file = e.target.files[0];
                              handleChange({
                                target: {
                                  name: "thumbnail",
                                  value: file,
                                },
                              });

                              // convert the file to base64 string

                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                //@ts-ignore
                                setThumbnail(reader.result);
                              };
                            }
                          }}
                        />

                        {values.thumbnail && thumbnail ? (
                          <Image
                            //@ts-ignore
                            src={thumbnail}
                            width={50}
                            height={50}
                            alt="uploaded-thumbnail"
                            className="h-96 w-full"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center py-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Select a photo
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="rounded bg-[#2C3543] py-2 px-4 font-bold text-white hover:bg-[#212c3d]"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

Posts_Create.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Posts_Create;
