import { useEffect, useState } from "react";
import PreviewTrs from "./previewTrs"; // Assuming you have PreviewTrs component
import { XCircle } from "lucide-react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useRightSidebar } from "@/context/RightSidebarContext";

export default function CreateTrs() {
  const [trsImage, setTrsImage] = useState<string | null>(null);
  const [trsTitle, setTrsTitle] = useState("");
  const [trsDescription, setTrsDescription] = useState("");
  const [modelName, setModelName] = useState("");
  const [trsAmount, setTrsAmount] = useState<number>(0);
  const [trsContent, setTrsContent] = useState<File | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const { closeSidebar } = useRightSidebar();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component renders on the client
  }, []);

  const handlePreviewClick = () => {
    setIsPreviewVisible(true);
  };

  const handleBackClick = () => {
    setIsPreviewVisible(false);
  };

  const trsData = {
    trsImage,
    trsTitle,
    trsDescription,
    modelName,
    trsAmount,
    trsContent,
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      {!isPreviewVisible && (
        <form className="text-sm">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-semibold mb-6">Create TRS</h2>
            <XCircle size={20} color="#595959" strokeWidth={2} onClick={closeSidebar} />
          </div>

          {/* TRS Image */}
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <div
                className={`w-14 h-14 bg-gray-200 border border-gray-300 rounded-md flex items-center justify-center ${
                  trsImage ? "bg-cover bg-center" : ""
                }`}
                style={trsImage && isClient ? { backgroundImage: `url(${trsImage})` } : undefined}
              ></div>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    setTrsImage(isClient ? URL.createObjectURL(file) : null);
                  }
                }}
                id="trsImageInput"
              />
              {!trsImage && (
                <div>
                  <span className="text-black-500 font-semibold">TRS Image</span>
                  <p className="text-xs text-gray-500 mt-2">Min 400x400px, PNG or JPEG</p>
                </div>
              )}
              <label
                htmlFor="trsImageInput"
                className="px-4 py-2 bg-white-100 border border-gray-300 text-black-300 rounded-xl cursor-pointer"
              >
                Upload
              </label>
            </div>
          </div>

          {/* TRS Title */}
          <div className="mb-4">
            <label className="block text-gray-700">TRS Title</label>
            <input
              type="text"
              value={trsTitle}
              onChange={(e) => setTrsTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., Elepon Blue"
            />
          </div>

          {/* TRS Description */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">TRS Description</label>
            <textarea
              value={trsDescription}
              onChange={(e) => setTrsDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
              placeholder="Info about the TRS"
              maxLength={500}
              rows={3}
            />
            <p className="absolute bottom-2 right-3 text-xs text-gray-500">{trsDescription.length}/500</p>
          </div>

          {/* TRS Price and Unit Amount */}
          <div className="mb-4 flex justify-between space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Model Name</label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., XYZ Model"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700">TRS Unit Amount</label>
              <input
                type="number"
                value={trsAmount}
                onChange={(e) => setTrsAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., 400 units"
              />
            </div>
          </div>

          {/* TRS Content Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Upload TRS Content</label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <input
                type="file"
                onChange={(e) => setTrsContent(e.target.files ? e.target.files[0] : null)}
                className="hidden"
                id="trsContentInput"
              />
              <label htmlFor="trsContentInput" className="cursor-pointer text-gray-600">
                <div className="flex justify-center items-center">
                  <CloudUploadIcon />
                </div>
                <p className="text-sm font-medium">Choose a file or drag & drop it here.</p>
                <p className="text-xs text-gray-500">JPEG, PNG, PDF, and MP4 formats, up to 50 MB.</p>
              </label>
            </div>
          </div>

          {/* Preview TRS Button */}
          <button
            type="button"
            className="w-full px-4 py-2 bg-pink-500 text-white rounded-md"
            onClick={handlePreviewClick}
          >
            Preview TRS
          </button>
        </form>
      )}

      {/* Show PreviewTrs if isPreviewVisible is true */}
      {isPreviewVisible && <PreviewTrs trsData={trsData} onBack={handleBackClick} />}
    </div>
  );
}
