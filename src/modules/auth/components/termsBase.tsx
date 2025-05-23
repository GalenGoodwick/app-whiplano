"use client";

export default function Terms() {
  return (
    <section className="pt-12">
      <div className="bg-white  text-black">
        <div className="container mx-auto flex flex-col gap-[2rem] px-6">
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              Welcome to Whiplano LLC (&quot;Whiplano,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and
              Conditions (&quot;Terms&quot;) govern your access to and use of our website, services, platform, and
              products, including Tradable Rights Seeds (&quot;TRS&quot;) and other digital content provided by
              Whiplano. By accessing or using our platform, you agree to be bound by these Terms.
              <br />
            </p>
          </div>
          <hr className="border-t-2 border-gray-300 py-5" />
        </div>
      </div>

      <div className="bg-white text-black pb-[6rem] px-6">
        <div className="container mx-auto flex flex-col gap-[6rem]">
          <div className="flex flex-col">
            <ul className="list-decimal list-outside  text-lg leading-relaxed">
              <li className="font-bold flex items-start gap-2 text-left text-justify">1. Acceptance of Terms
              </li>
              <p className="text-gray-700 text-justify pl-5 ">
                By accessing, registering for, or using Whiplano, you acknowledge that you have read,
                understood, and agreed to be bound by these Terms. If you do not agree with these Terms, you
                must not use our services.
                <br /> <br />
              </p>

              <li className="font-bold flex items-start gap-2 text-left">2. Definitions</li>
              <ul className="list-disc list-inside pl-[2rem] text-gray-700 text-justify">
                <li><b>User:</b> Any individual or entity accessing or using Whiplano&apos;s services.</li>
                <li><b>TRS:</b> Tradable Rights Seeds, digital assets issued by Whiplano that grant specified rights to creative works.</li>
                <li><b>Platform:</b> Whiplano&apos;s website, applications, and services.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">3. Eligibility</li>
              <p className="text-gray-700 text-justify pl-5">
                To use Whiplano, you must be at least 18 years old or have the legal capacity to enter into these
                Terms under your jurisdiction&apos;s laws. You represent that the information you provide is accurate
                and complete.
                <br /><br />
              </p>

              <li className="font-bold flex items-start gap-2 text-left">4. User Accounts</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                <li>(a) Users must create an account to access certain features of the platform.</li>
                <li>(b) You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities conducted under your account.</li>
                <li>(c) Whiplano reserves the right to suspend or terminate accounts that violate these Terms.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">5. Tradable Rights Seeds (TRS)</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                <li>(a) TRS grant specific rights related to creative works but do not constitute legal ownership of
                  underlying intellectual property unless explicitly stated.</li>
                <li>(b) TRS transactions are recorded on the blockchain and subject to associated transaction fees.</li>
                <li>(c) Whiplano does not guarantee the value, appreciation, or resale of TRS.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">6. Prohibited Activities</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                Users must not :
                <li>(a) Use Whiplano for illegal or fraudulent purposes.</li>
                <li>Violate any intellectual property rights of Whiplano or third parties.</li>
                <li>(b) Attempt to manipulate, hack, or disrupt the platform.</li>
                <li>(c) Engage in abusive, defamatory, or harmful conduct toward other users.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">7. Fees and Payments</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                <li>(a) Whiplano may charge transaction fees for TRS purchases, sales, or other platform services.</li>
                <li>(b) Payments are processed through third-party providers, and users are responsible for any applicable taxes.</li>
                <li>(c) All sales of TRS and services are final, with no refunds unless required by law.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">8. Intellectual Property</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                <li>(a) All content on Whiplano, including trademarks, copyrights, and platform design, is owned by Whiplano LLC or its licensors.</li>
                <li>(b) Users may not copy, modify, distribute, or exploit any content without prior written consent.</li>
                <br />
              </ul>

              <li className="font-bold flex items-start gap-2 text-left">9. Termination</li>
              <ul className=" list-outside space-y-2 text-gray-700 text-justify pl-5 pl-3">
                <li>(a) Whiplano may suspend or terminate your account at any time for violations of these Terms.</li>
                <li>(b) Users may close their accounts, but Whiplano reserves the right to retain transaction records for legal compliance.</li>
                <br />
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
