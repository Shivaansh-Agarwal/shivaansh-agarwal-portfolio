import { useEffect, useState } from "react";

export const BlogCard = ({ heading, imgURL, blogUrl, website }) => {
  const [btnText, setBtnText] = useState("Copy URL");
  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnText("Copy URL");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [btnText, setBtnText]);
  return (
    <div className="max-w-xs h-96 border-2 border-gray-300 flex flex-col items-center justify-between p-4 shadow-md rounded">
      <header
        className="text-xl font-semibold cursor-pointer"
        onClick={() => {
          window.open(blogUrl);
        }}
      >
        {heading}
      </header>
      <main className="flex flex-col items-center">
        <section>
          <img
            src={imgURL}
            alt="Blog"
            className="w-full max-h-36 cursor-pointer"
            onClick={() => {
              window.open(blogUrl);
            }}
          />
        </section>
      </main>
      <footer className="w-full">
        <button
          className="border-2 cursor-pointer border-gray-100 py-1 w-full text-white bg-gray-800 rounded-lg hover:bg-purple-700"
          onClick={() => {
            navigator.clipboard.writeText(blogUrl);
            setBtnText("Copied");
          }}
        >
          {btnText}
        </button>
      </footer>
    </div>
  );
};
