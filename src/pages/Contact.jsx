import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-4">Want to work together? Drop a message.</p>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input className="w-full p-3 border rounded" placeholder="Your name" />
        <input className="w-full p-3 border rounded" placeholder="Your email" />
        <textarea
          className="w-full p-3 border rounded"
          placeholder="Message"
          rows={5}
        />
        <button className="px-5 py-2 bg-accent text-white rounded">Send</button>
      </form>
    </section>
  );
}