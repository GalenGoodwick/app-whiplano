import React from 'react';
import Image from 'next/image'; // Use next/image to handle images in Next.js

const Processing: React.FC = () => {
  return (
    <div className="w-5 h-5">
      <Image src="./processing.svg" alt="Up Arrow" width={20} height={20} />
    </div>
  );
};

export default Processing;
