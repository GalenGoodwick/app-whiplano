import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';


const notifications = [
  {
    id: 1,
    title: "Your order to buy is successfully executed",
    message:
      'Congratulations! Your buy order for "Light on Bone" has been executed. See your portfolio.',
    time: "12:21 PM",
    icon: <Image src="/not1.svg" width={20} height={20} alt="not1" />,
    actionText: "Go to my asset",
    unread: true
  },
  {
    id: 2,
    title: "Yay! You're now a creator",
    message:
      "Congratulations! You're now a creator and can now create, buy, and activate a TRS right.",
    time: "08:13 AM",
    icon: <Image src="/not2.svg" width={20} height={20} alt="not1" />,
    actionText: "Buy create my first TRS",
    unread: true
  },
  {
    id: 3,
    title: "Stay informed",
    message:
      "Get the latest insights on market trends. Dive into detailed analyses and stay ahead.",
    time: "Yesterday",
    icon: <Image src="/not3.svg" width={20} height={20} alt="not1" />,
    unread: false
  },
  {
    id: 4,
    title: "Your order to buy is successfully executed",
    message:
      'Congratulations! Your buy order for "Light on Bone" has been executed. See your portfolio.',
    time: "Yesterday",
    icon: <Image src="/not4.svg" width={20} height={20} alt="not1" />,
    unread: false
  }
];

export default function NotificationPanel() {
  const [notificationsList] = useState(notifications);

  return (
    <div className="w-109 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <Button variant="ghost" className="text-sm text-gray-500">
          Mark all as read
        </Button>
      </div>
      <hr className="border-t border-gray-300 w-full" />

      <div className="divide-y">
        {notificationsList.map(notification =>
          <div
            key={notification.id}
            className={`flex gap-3 py-3 items-start ${notification.unread
              ? "font-semibold"
              : "font-normal"}`}
          >
            <div className="mt-1">
              {notification.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm">
                {notification.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.message}
              </p>
              {notification.actionText &&
                <Button className="mt-2 text-xs text-pink-500 bg-pink-100">
                  {notification.actionText}
                </Button>}
            </div>
            <span className="text-xs text-gray-400">
              {notification.time}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
