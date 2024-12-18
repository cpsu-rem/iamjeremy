import { ArrowBack } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const TermsAndPolicy = () => {
  return (
    <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Terms and Policy</h1>
      <p className="text-gray-600 mb-4">
        Welcome to Astral Store! By using our website and services, you agree to comply with the following terms and conditions. Please read them carefully before making a purchase or using our platform.
      </p>

      <hr className="my-6" />

      {/** General Terms Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
        <p className="mb-2">1.1 This website is operated by Astral Store. Throughout the site, the terms "we," "us," and "our" refer to Astral Store.</p>
        <p className="mb-2">1.2 By accessing or using any part of the website, you agree to be bound by these terms and conditions.</p>
        <p className="mb-2">1.3 We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review the terms regularly.</p>
      </section>

      {/** Products and Pricing Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Products and Pricing</h2>
        <p className="mb-2">2.1 We strive to display accurate product information, including descriptions, images, and pricing. However, errors may occur, and we reserve the right to correct any inaccuracies.</p>
        <p className="mb-2">2.2 Prices for products are subject to change without notice.</p>
        <p className="mb-2">2.3 Certain products may be available in limited quantities and are subject to return or exchange only according to our Return Policy.</p>
      </section>

      {/** Privacy Policy Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
        <p className="mb-2">3.1 We value your privacy and are committed to protecting your personal information. Any data collected will be handled in accordance with our Privacy Policy.</p>
        <p className="mb-2">3.2 By using our website, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.</p>
      </section>

      {/** Shipping and Delivery Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
        <p className="mb-2">4.1 We aim to process and ship orders as quickly as possible. Delivery times may vary depending on your location and shipping method.</p>
        <p className="mb-2">4.2 Customers are responsible for providing accurate shipping information. We are not liable for delays or non-delivery caused by incorrect addresses.</p>
      </section>

      {/** Returns and Refunds Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
        <p className="mb-2">5.1 Products can be returned within 7 days of receipt, provided they are unused, in their original packaging, and accompanied by proof of purchase.</p>
        <p className="mb-2">5.2 Refunds will be processed once the returned item has been inspected and approved. Shipping costs are non-refundable.</p>
        <p className="mb-2">5.3 For defective or damaged products, please contact our support team within 7 days for assistance.</p>
      </section>

      {/** User Conduct Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
        <p className="mb-2">6.1 You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others.</p>
        <p className="mb-2">6.2 Prohibited activities include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Attempting to interfere with the website’s functionality.</li>
          <li>Using the website to distribute malicious software or spam.</li>
          <li>Engaging in fraudulent activities.</li>
        </ul>
      </section>

      {/** Limitation of Liability Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p className="mb-2">7.1 We shall not be held liable for any damages arising from your use of our website, including but not limited to direct, indirect, incidental, or consequential damages.</p>
        <p className="mb-2">7.2 Our liability is limited to the maximum extent permitted by law.</p>
      </section>

      {/** Governing Law Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-2">8.1 These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State].</p>
        <p className="mb-2">8.2 Any disputes will be resolved exclusively in the courts of [Your Jurisdiction].</p>
      </section>

      {/** Contact Information Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
        <p className="mb-2">If you have any questions or concerns regarding these terms, please contact us:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Email: jeremycpsu@gmail.com</li>
          <li>Phone: 09701061156</li>
          <li>Address: Purok Manihan, Barangay Bunga, Salvador Benedicto, Negros</li>
        </ul>
      </section>

      <div className="text-center mt-8">
        <NavLink to="/" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
          <ArrowBack className="mr-2" />
        
        </NavLink>
      </div>
    </div>
  );
};

export default TermsAndPolicy;
