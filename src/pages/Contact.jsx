import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 rounded-full bg-green-500/10 p-6 text-green-500">
          <CheckCircle className="h-16 w-16" />
        </div>
        <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
        <p className="mt-2 text-gray-400">We'll get back to you as soon as possible.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-bold text-blue-500 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
        <p className="mt-4 text-gray-400">Have feedback or want to bring SyncRank to your college?</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Message</label>
          <textarea
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-700"
        >
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
