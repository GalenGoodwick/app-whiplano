"use client";




export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="relative justify-between bg-white">
      <div className="relative flex flex-row justify-between space-x-8 bg-white">
  
      </div>

      <main>{children}</main>
    </div>
  );
}