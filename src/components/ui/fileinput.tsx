import * as React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const FileInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(
  (
    { className, type, multiple = true, accept = ".docx,.doc,.jpeg,.jpg", ...props },
    ref
  ) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files: File[] = Array.from(event.target.files || []);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    const handleFileRemove = (index: number) => {
      setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
      <div
        className={cn(
          "relative flex flex-col items-start justify-start mt-2 -mr-1 -mb-1 flex-wrap",
          selectedFiles.length > 0 && "border-t border-gray-300 pt-2",
          className
        )}
      >
        <input
          type={type}
          className={cn("absolute inset-0 opacity-0 cursor-pointer")}
          ref={ref}
          multiple={multiple}
          accept={accept}
          data-testid="FileInput"
          onChange={handleFileAdd}
          onClick={props.onClick}
          {...props}
        />

        <div className="flex flex-row items-center justify-center text-muted-foreground hover:text-primary mb-2">
          <svg
            width="14"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.176 2.075a3.78 3.78 0 00-5.339 0L1.759 6.15a.14.14 0 00-.04.1.14.14 0 00.04.1l.576.576a.14.14 0 00.199 0l4.078-4.075a2.663 2.663 0 011.895-.784c.716 0 1.39.278 1.894.784.506.506.784 1.18.784 1.894a2.66 2.66 0 01-.784 1.894l-4.156 4.154-.674.674a1.615 1.615 0 01-2.754-1.14c0-.432.167-.837.472-1.141l4.123-4.122a.551.551 0 01.39-.161.545.545 0 01.386.936l-3.37 3.367a.14.14 0 00-.04.1.14.14 0 00.04.1l.577.576a.14.14 0 00.198 0l3.369-3.368c.311-.311.481-.724.481-1.163 0-.439-.172-.853-.481-1.162a1.649 1.649 0 00-2.328 0l-.4.401-3.722 3.72a2.69 2.69 0 00-.794 1.918 2.707 2.707 0 002.71 2.706 2.7 2.7 0 001.917-.792l4.831-4.828a3.757 3.757 0 001.105-2.67 3.745 3.745 0 00-1.105-2.67z"
              fill="#A9B0C2"
            />
          </svg>
          <span>файл</span>
        </div>

        <div className="flex flex-wrap items-start justify-start -mx-[4px] -mb-[4px]">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center leading-none p-[9px_12px] w-[48px] h-[48px] bg-white border border-[rgba(198,199,201,0.3)] rounded-lg text-[28px] text-[#8b92a4] cursor-pointer mx-[4px] mb-[4px]"
            >
              <svg
                width="22"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0a3 3 0 00-3 3v22a3 3 0 003 3h16a3 3 0 003-3V8.828a3 3 0 00-.879-2.12L15.293.878A3 3 0 0013.172 0H3zM2 3a1 1 0 011-1h9v5a3 3 0 003 3h5v15a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm17.586 5H15a1 1 0 01-1-1V2.414L19.586 8z"
                  fill="#8B92A4"
                />
              </svg>
              <span
                className={`inline-flex items-center justify-center text-center leading-none h-[10px] p-[1px] font-bold text-[6px] text-white uppercase absolute bottom-[14px] right-[8px] ${
                  file.type.includes("jpeg") || file.type.includes("jpg")
                    ? "bg-[#6175df]"
                    : file.type.includes("doc") || file.type.includes("docx")
                    ? "bg-[#a29cff]"
                    : "bg-[#8b92a4]"
                }`}
              >
                {file.name.toUpperCase().split(".").pop()}
              </span>
              <button
                onClick={() => handleFileRemove(index)}
                className="absolute top-[2px] right-[2px] text-[12px] text-[#a9b0c2]"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };

