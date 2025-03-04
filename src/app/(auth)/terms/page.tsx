import Terms from "@/modules/auth/components/termsBase";

export default function TermsPage() {
  
  return (
<div className="bg-white text-black py-10 flex flex-col items-center text-center">
  <h1 className="text-2xl font-extrabold py-2">
    WHIPLANO LLC - TERMS AND CONDITIONS
  </h1>

  <hr className="w-1/2 border-t-2 border-gray-300 my-4" />
  <p className="text-2xl py-2">
    <strong className="mr-2">Effective Date:</strong> 2/25/2025
  </p>


  <div className="w-full flex justify-center">
    <Terms />
  </div>
</div>

  );
}