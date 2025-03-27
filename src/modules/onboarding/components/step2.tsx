import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { OnboardingStepProps } from "./step1";

const OnboardingStep2 = ({ payload, setPayload }: OnboardingStepProps) => {

  return (
    <div className="max-w-md w-full space-y-6 text-left mt-3">
      {/* Short Bio */}
      <div>
        <Label htmlFor="bio" className="text-sm font-medium text-gray-900">
          Short Bio
        </Label>
        <div className="relative mt-2">
          <Textarea
            id="bio"
            placeholder="What should people know about you"
            value={payload.bio || ""}
            onChange={(e) => setPayload({ ...payload, bio: e.target.value })}
            maxLength={200}
            className="resize-none w-full h-24 p-3 border rounded-md focus:ring-2 focus:ring-gray-300"
          />
          <span className="absolute bottom-2 right-3 text-xs text-gray-400">
          {(payload.bio?.length || 0)}/200
          </span>
        </div>
      </div>

      <hr />

      {/* Social Links */}
      <div>
        <h3 className="text-2xl font-normal text-gray-900 font-serif">Social links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {/* Twitter */}
          <div>
            <Label htmlFor="twitter" className="text-sm text-gray-700">
              Twitter
            </Label>
            <div className="flex items-center mt-1 border rounded-md px-3 py-2 bg-gray-50">
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
              <Input
                id="twitter"
                type="text"
                placeholder="e.g @johndoe"
                className="border-none bg-transparent focus:ring-0 flex-1 ml-2"
                value={payload.twitter || ""}
                onChange={(e) => setPayload({ ...payload, twitter: e.target.value })}
              />
            </div>
          </div>

          {/* Telegram */}
          <div>
            <Label htmlFor="telegram" className="text-sm text-gray-700">
              Telegram
            </Label>
            <div className="flex items-center mt-1 border rounded-md px-3 py-2 bg-gray-50">
              <Image src="/telegram.svg" alt="Telegram" width={16} height={16} />
              <Input
                id="telegram"
                type="text"
                placeholder="e.g @john.doe"
                className="border-none bg-transparent focus:ring-0 flex-1 ml-2"
                value={payload.telegram || ""}
                onChange={(e) => setPayload({ ...payload, telegram: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
