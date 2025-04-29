import React from 'react';
import Image from 'next/image'; // Use next/image to handle images in Next.js

const DownArrow: React.FC = () => {
  return (
    <div className="w-5 h-5">
      <Image src="./arrow-down.svg" alt="Up Arrow" width={20} height={20} />
    </div>
  );
};

export default DownArrow;
