import { useState } from "react";
import { Edit } from "lucide-react";
import { Avatar } from "@/components/common/avatar";
import { Button } from "@/components/ui/button";
import Image from 'next/image';


export default function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("James Sonny");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [bio, setBio] = useState(
    "Just know what you know broski.. The best yet!"
  );
  const [socialLinks, setSocialLinks] = useState({
    twitter: "https://x.com/kl23",
    telegram: "https://x.com/kl23"
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white w-full max-w-[500px] md:max-w-[600px]">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold">Personal information</h2>
        <Edit
          className="w-5 h-5 cursor-pointer text-gray-600"
          onClick={handleEditClick}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Avatar src="/avatar.svg"   width={40} height={40}  alt="User Avatar" />
          <div>
            <p className="text-lg font-semibold">Adisko</p>
            <p className="text-gray-500 text-sm">Creator</p>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white flex items-center gap-2">
          <Image src="/crown.svg"   width={20} height={20} alt="crown" className="w-5 h-5" />
          <span>Become a creator</span>
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500 text-sm">Full name</p>
          {isEditing
            ? <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="text-gray-900 font-sm border border-gray-300 rounded-md p-2 w-full"
              />
            : <p className="text-gray-900 font-sm">
                {fullName}
              </p>}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          {isEditing
            ? <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="text-gray-900 font-sm border border-gray-300 rounded-md p-2 w-full"
              />
            : <p className="text-gray-900 font-sm">
                {email}
              </p>}
        </div>
        <div>
          <p className="text-gray-500 text-sm">Bio</p>
          {isEditing
            ? <textarea
                value={bio}
                onChange={e => setBio(e.target.value)}
                className="text-gray-900 font-sm border border-gray-300 rounded-md p-2 w-full"
              />
            : <p className="text-gray-900 font-sm">
                {bio}
              </p>}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-500 text-sm">Social links</p>
        <div className="mt-2 space-y-3">
          <div className="flex items-center gap-3 bg-gray-100 rounded-md p-3">
            <Image src="/twitter.svg" width={20} height={20} alt="Twitter" className="w-5 h-5" />
            {isEditing
              ? <input
                  type="text"
                  value={socialLinks.twitter}
                  onChange={e =>
                    setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                  className="text-gray-900 font-sm w-full"
                />
              : <a href={socialLinks.twitter} className="text-gray-900 font-sm">
                  {socialLinks.twitter}
                </a>}
          </div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md p-3">
            <Image src="/telegram.svg" width={20} height={20} alt="Telegram" className="w-5 h-5" />
            {isEditing
              ? <input
                  type="text"
                  value={socialLinks.telegram}
                  onChange={e =>
                    setSocialLinks({
                      ...socialLinks,
                      telegram: e.target.value
                    })}
                  className="text-gray-900 font-sm w-full"
                />
              : <a
                  href={socialLinks.telegram}
                  className="text-gray-900 font-sm"
                >
                  {socialLinks.telegram}
                </a>}
          </div>
        </div>
      </div>

      {!isEditing &&
        <div className="mt-6">
          <p className="text-gray-500 text-sm">Payment method</p>
          <div className="bg-gray-100 rounded-md p-4 mt-2">
            <Image
              src="/paypal.png"
              width={95}
              height={95}
              alt="PayPal"
              className="w-[95px] h-auto mb-3"
            />

            <div className="flex items-center gap-3">
              <p className="text-gray-900 font-medium text-sm">
                Your PayPal account has been authorized for payouts and
                purchases.
              </p>
            </div>
            <Button className="mt-3 bg-gray-200 text-gray-800 w-full">
              Disconnect
            </Button>
          </div>
        </div>}

      {isEditing &&
        <div className="mt-4 flex flex-col justify-center">
          <Button onClick={handleSave} className="bg-[#FE4773] text-white">
            Update Information
          </Button>
        </div>}
    </div>
  );
}
