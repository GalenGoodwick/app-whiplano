import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState, useRef } from "react";

const OnboardingStep1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Reference for file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle Image Upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      setProfileImage(file);
    }
  };

  // Handle Image Removal
  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  // Trigger File Input Click
  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      {/* Profile Picture Upload Section */}
      <div className="flex items-center justify-center mt-6">
        {/* Profile Image Clickable */}
        <div className="relative w-16 h-16 cursor-pointer" onClick={handleFileInputClick}>
          <Image
            src={profileImage || "/avator.png"}
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        {/* Image Upload/Remove/Change Buttons */}
        <div className="flex space-x-2 ml-4">
          {profileImage ? (
            <>
              <Button
                variant="outline"
                className="text-xs sm:text-sm border-red-500 text-red-500 hover:bg-red-100"
                onClick={handleRemoveImage}
              >
                Remove
              </Button>
              <Button
                variant="outline"
                className="text-xs sm:text-sm"
                onClick={handleFileInputClick}
              >
                Change
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="text-xs sm:text-sm"
              onClick={handleFileInputClick}
            >
              Upload
            </Button>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Form Fields */}
      <div className="mt-6 space-y-4 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first-name" className="text-sm block">
              First name
            </Label>
            <Input
              id="first-name"
              type="text"
              placeholder="e.g John"
              className="mt-1 w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="last-name" className="text-sm block">
              Last name
            </Label>
            <Input
              id="last-name"
              type="text"
              placeholder="e.g Doe"
              className="mt-1 w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="username" className="text-sm block">
            Choose username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="e.g adsk123"
            className="mt-1 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default OnboardingStep1;
