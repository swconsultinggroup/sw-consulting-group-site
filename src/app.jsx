import { useState } from 'react'
import { Factory } from 'lucide-react'

export default function App() {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="p-4 border-b border-slate-200 flex items-center justify-between">
        <h1 className="flex items-center gap-2 font-bold text-xl">
          <Factory className="w-6 h-6" />
          SW Consulting Group
        </h1>
        <a href="#contact" className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Get a Consultation
        </a>
      </header>

      {/* Main */}
      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Turn lines into profit centers.</h2>
        <p className="mt-4 text-slate-600">
          We help food manufacturers unlock capacity, improve quality, and lower unit cost—
          from rotary-molded cookies to high-speed pillow-pack lines.
        </p>

        {/* Simple contact form */}
        <form
          id="contact"
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="mt-8 space-y-4 max-w-md"
        >
          <input className="w-full border p-2 rounded" placeholder="Your name" required />
          <input className="w-full border p-2 rounded" placeholder="Your email" type="email" required />
          <textarea className="w-full border p-2 rounded" placeholder="Message" rows="4" required />
          <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded w-full">
            {sent ? 'Thanks! We’ll be in touch.' : 'Send Message'}
          </button>
        </form>
      </main>
    </div>
  )
}
