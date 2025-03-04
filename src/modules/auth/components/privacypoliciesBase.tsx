"use client";

export default function PrivacyPolicies() {
  return (
    <section className="pt-12 bg-white text-black">
      <div className="pb-[6rem]">
        <div className="container mx-auto flex flex-col gap-10 px-6">
          {/* 1. Introduction */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>1. Introduction</strong> Whiplano LLC (&quot;Whiplano,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This
              Privacy Policy explains how we collect, use, and protect your personal data when you use our web application (&quot;App&quot;).
              By using the App, you consent to the data practices described in this Privacy Policy.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed md:text-justify">
              <strong>2. Information We Collect</strong> We collect the following types of information:
            </p>
            <ul className="text-left text-lg space-y-2 list-disc list-inside pl-[3rem]">
              <li><strong>Personal Information</strong>: Name, email address, payment information, and other details you provide when creating an account.</li>
              <li><strong>Usage Data</strong>: Interactions with the App, including page visits, features accessed, and preferences.</li>
              <li><strong>Device Information</strong>: IP address, browser type, and operating system.</li>
              <li><strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to enhance your experience.</li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed md:text-justify">
              <strong>3. How We Use Your Information</strong> We use collected information to:
            </p>
            <ul className="text-left space-y-2 list-disc list-inside pl-[3rem]">
              <li>Provide and improve our services.</li>
              <li>Process transactions and manage accounts.</li>
              <li>Communicate updates, promotions, and security alerts.</li>
              <li>Analyze App performance and user behavior.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          {/* 4. Data Sharing and Disclosure */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed md:text-justify">
              <strong>4. Data Sharing and Disclosure</strong> We do not sell your personal information. We may share data with:
            </p>
            <ul className="text-left space-y-2 list-disc list-inside pl-[3rem]">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in App functionality, hosting, and payment processing.</li>
              <li><strong>Legal Compliance:</strong> Government authorities if required by law.</li>
              <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales.</li>
            </ul>
          </div>

          {/* 5. Data Security */}
          <div className="flex flex-col">
            <p className="text-lg text-justify leading-relaxed md:text-justify">
              <strong>5. Data Security</strong> We implement industry-standard security measures to protect user data.
              However, no method of transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 6. Your Rights and Choices */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>6. Your Rights and Choices</strong> You may:
            </p>
            <ul className="text-left space-y-2 list-disc list-inside pl-[3rem]">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Adjust cookie settings in your browser.</li>
            </ul>
          </div>

          {/* 7. Data Retention */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>7. Data Retention</strong> We retain your data as long as necessary for legitimate business purposes or
              as required by law.
            </p>
          </div>

          {/* 8. Third-Party Links */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>8. Third-Party Links</strong> Our App may contain links to external websites. We are not responsible
              for their privacy practices.
            </p>
          </div>

          {/* 9. Changes to This Policy */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>9. Changes to This Policy</strong> We may update this Privacy Policy periodically. We will notify users
              of significant changes via email or App notifications.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="flex flex-col">
            <p className="text-lg leading-relaxed text-justify">
              <strong>10. Contact Us</strong> For questions about this Privacy Policy, contact us at: info@whiplano.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
