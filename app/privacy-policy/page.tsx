import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy - ACT Decks",
  description: "How ACT Decks collects, uses, discloses and safeguards your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Legal" />
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <p>
            Welcome to actdecks.com.au (“we,” “us,” or “our”). We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website
            actdecks.com.au (the “Site”) or use any related services (collectively, the
            “Services”).
          </p>
          <p>
            By accessing or using our Site, you consent to the collection, use, and disclosure of
            your personal information in accordance with this Privacy Policy. If you do not agree
            with the terms of this Privacy Policy, please do not access the Site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information and non-personal information in various ways, including when you:</p>
          <ul>
            <li><strong>Visit our Site</strong> – We automatically collect information such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</li>
            <li><strong>Contact us</strong> – If you send us inquiries or requests via email, a contact form, phone, or other means, we may collect the information you provide (e.g., name, email address, phone number, message content).</li>
            <li><strong>Make a purchase or request a quote</strong> – We may collect billing and financial information when you make purchases or request estimates, if such services are provided through the Site.</li>
            <li><strong>Subscribe to communications</strong> – If you sign up for newsletters, we collect your name, email address, and any other information provided through the subscription form.</li>
            <li><strong>Cookies and similar technologies</strong> – We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize and improve your user experience.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <ul>
            <li><strong>To provide our Services</strong> – Including order processing, delivering requested products, and responding to your inquiries.</li>
            <li><strong>To personalize user experience</strong> – To understand how our users as a group use the services and resources on our Site.</li>
            <li><strong>To improve our Site</strong> – Based on the information and feedback we receive from you.</li>
            <li><strong>To send administrative information</strong> – Such as confirmations, technical notices, updates, and security alerts.</li>
            <li><strong>To send marketing and promotional communications</strong> – Where you have opted in or where otherwise permissible by law.</li>
            <li><strong>To enforce our terms, conditions, and policies</strong> – And to comply with legal and regulatory obligations.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We do not sell, rent, or lease your personal information to third parties. However, we may share information with third parties for the following purposes:</p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted third-party providers who assist us in operating our Site, such as payment processors, hosting providers, or customer service platforms.</li>
            <li><strong>Legal Compliance:</strong> If required by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transactions:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets.</li>
            <li><strong>Protective Measures:</strong> When necessary to investigate, prevent, or take action regarding potential violations of our policies or to protect the rights, property, or safety of us, our customers, or others.</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our
            Site. You may choose to set your web browser to refuse cookies or to alert you when
            cookies are being sent. If you do so, note that some parts of the Site may not function
            properly. Examples include authentication (to recognize when you return) and analytics
            (e.g. Google Analytics) to help us improve the user experience.
          </p>

          <h2>5. Third-Party Websites</h2>
          <p>
            Our Site may contain links to third-party websites and services that are not operated
            or controlled by us. Any information you provide to these third parties is governed by
            their privacy policies, not ours.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We take reasonable measures to safeguard the personal information we hold from misuse,
            interference, loss, and from unauthorized access, modification, or disclosure. However,
            no method of electronic transmission or storage is entirely secure, and we cannot
            guarantee absolute security of your data.
          </p>

          <h2>7. Retention of Your Information</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes for
            which it was collected or to comply with legal or regulatory requirements.
          </p>

          <h2>8. International Transfers of Information</h2>
          <p>
            If we transfer personal information outside of Australia, we will take steps to ensure
            the recipient provides an adequate level of protection, in accordance with the Privacy
            Act 1988 (Cth) and Australian Privacy Principles.
          </p>

          <h2>9. Your Rights and Choices</h2>
          <ul>
            <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of any inaccurate, incomplete, or out-of-date personal information.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where we rely on it to process personal information.</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications via the unsubscribe link or by contacting us directly.</li>
          </ul>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our Site and Services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children under 18.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We reserve the right to update or change this Privacy Policy at any time. Any changes
            will be effective immediately upon posting the updated policy on the Site.
          </p>

          <h2>12. Complaints and Contact Information</h2>
          <p>If you have any questions, concerns, or complaints, please contact us:</p>
          <ul>
            <li>Address: Unit 10/157 Gladstone St, Fyshwick, ACT, 2609</li>
            <li>Email: info@actdecks.com.au</li>
            <li>Phone: 02 6280 6858</li>
          </ul>
        </div>
      </section>
    </>
  );
}
