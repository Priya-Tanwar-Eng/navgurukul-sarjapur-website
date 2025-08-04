import React from "react";
import ContactInfo from "../component/contact/ContactInfo";
import InquiryForm from "../component/contact/InquiryForm";

export default function ContactUs() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-3">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Reach out or drop a message below.
        </p>
      </header>

      <ContactInfo />
      <InquiryForm />
    </main>
  );
}
