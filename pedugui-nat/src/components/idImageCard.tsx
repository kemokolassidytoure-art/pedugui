import { useState } from "react";

const IDImageCard = () => {
  const image = "/test1.JPG";
  // const [image, setImage] = useState<string | undefined>(undefined);

  return (
    <div className="w-full max-w-xl">
      <div
        id="placeholder"
        className="relative bg-white border-2 border-dashed border-portal-green/40 rounded-lg p-4 flex flex-col items-center justify-center gap-4 hover:border-portal-green transition-colors"
        aria-label="ID photo upload area"
        role="region"
      >
        {/* Preview area with fixed aspect ratio */}
        <div
          id="previewFrame"
          className="relative w-full max-w-xs aspect-3/4 bg-gray-100 rounded overflow-hidden flex items-center justify-center"
        >
          {/* Guidelines overlay */}
          <div className="absolute inset-0 pointer-events-none guidelines"></div>

          {!image && (
            <div
              id="placeholderInner"
              className="flex flex-col items-center gap-2 text-center p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
                />
              </svg>
              <div className="text-sm text-gray-500">Pas d'image</div>
            </div>
          )}
          {/* Image preview (hidden initially) */}
          {image && (
            <img
              id="previewImg"
              src={image}
              alt="ID preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IDImageCard;
