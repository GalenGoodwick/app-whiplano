import { Edit, X, Twitter } from "lucide-react";
import { Avatar } from "@/components/common/avatar";
import { Button } from "@/components/ui/button";

export default function PersonalInformation() {
  return (
    <div className=" bg-white w-full max-w-[500px] md:max-w-[600px]">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold">Personal information</h2>
        <Edit className="w-5 h-5 cursor-pointer text-gray-600" />

      </div>

      {/* Profile Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Avatar src="/avatar.svg" alt="User Avatar"  />
          <div>
            <p className="text-lg font-semibold">Adisko</p>
            <p className="text-gray-500 text-sm">Creator</p>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white flex items-center gap-2">
        <img src="/crown.svg" alt="crown" className="w-5 h-5" />

          <span>Become a creator</span>
        </Button>
      </div>

      {/* User Details */}
      <div className="space-y-4">
        <div>
          <p className="text-gray-500 text-sm">Full name</p>
          <p className="text-gray-900 font-sm">James Sonny</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-gray-900 font-sm">johndoe@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Bio</p>
          <p className="text-gray-900 font-sm">Just know what you know broski.. The best yet!</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6">
        <p className="text-gray-500 text-sm">Social links</p>
        <div className="mt-2 space-y-3">
          <div className="flex items-center gap-3 bg-gray-100 rounded-md p-3">
            <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
            <a href="https://x.com/kl23" className="text-gray-900 font-sm">https://x.com/kl23</a>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-md p-3">
          <img src="/telegram.svg" alt="Twitter" className="w-5 h-5" />
          <a href="https://x.com/kl23" className="text-gray-900 font-sm">https://x.com/kl23</a>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <p className="text-gray-500 text-sm">Payment method</p>
        <div className="bg-gray-100 rounded-md p-4 mt-2">
        <img src="./paypal.png" alt="PayPal" className="w-[95px] h-auto mb-3" />

          <div className="flex items-center gap-3">
            <p className="text-gray-900 font-medium text-sm">Your PayPal account has been authorized for payouts and purchases.</p>
          </div>
          <Button className="mt-3 bg-gray-200 text-gray-800 w-full">Disconnect</Button>
        </div>
      </div>
    </div>
  );
}
