import React from 'react'

export default function App() {
  return (
    <div className=\"min-h-screen bg-[#f3f2ef] text-[#1a1a1a] antialiased\">
      {/* Header with Logo */}
      <header className=\"flex justify-between items-center px-12 py-6 bg-[#f0ebe4] shadow-sm border-b border-[#d6cfc3]\">
        <img src=\"/sw-piping-logo.png\" alt=\"SW Consulting Group Logo\" className=\"h-16 w-auto\" />
        <nav className=\"space-x-6 text-lg font-medium text-[#4a4a4a]\">
          <a href=\"#about\" className=\"hover:text-[#a2611a] transition\">About</a>
          <a href=\"#team\" className=\"hover:text-[#a2611a] transition\">Team</a>
          <a href=\"#contact\" className=\"hover:text-[#a2611a] transition\">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className=\"relative text-center py-36 bg-[#f9f7f3] overflow-hidden\">
        <img src=\"/factory-line-bright.jpg\" alt=\"Food Manufacturing Line\"
             className=\"absolute inset-0 w-full h-full object-cover opacity-25\" />
        <div className=\"absolute inset-0 bg-gradient-to-b from-[#f9f7f3]/60 to-[#eae4db]/80\"></div>
        <div className=\"relative z-10\">
          <h1 className=\"text-5xl md:text-6xl font-extrabold mb-4 text-[#a2611a] drop-shadow-sm\">
            Turning Process Into Performance.
          </h1>
          <p className=\"text-xl max-w-4xl mx-auto text-gray-800\">
            Experts in cookies, crackers, tortillas, snacks, and high-speed packaging. We increase throughput,
            stabilize quality, and lower unit cost — without risky capex.
          </p>
          <div className=\"mt-10 flex justify-center gap-6\">
            <a href=\"#contact\" className=\"bg-[#a2611a] text-white hover:bg-[#c27d24] text-lg px-8 py-4 rounded-2xl font-semibold shadow-md\">
              Let’s Talk
            </a>
            <a href=\"#contact\" className=\"text-[#a2611a] border border-[#a2611a] hover:bg-[#a2611a] hover:text-white text-lg px-8 py-4 rounded-2xl font-semibold\">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id=\"about\" className=\"max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16\">
        <div>
          <h2 className=\"text-4xl font-bold mb-6 text-[#a2611a]\">Welcome to SW Consulting Group</h2>
          <p className=\"text-lg text-gray-700 leading-relaxed\">
            We partner with food and beverage manufacturers to unlock capacity and margin — from the mixing room to the
            boardroom. Our hands-on, sleeves-rolled approach fixes bottlenecks, shortens changeovers, improves yield,
            and builds sustainable systems your teams can run every day.
          </p>
        </div>
        <div>
          <img src=\"/industrial-oven-light.jpg\" alt=\"Industrial Oven\" className=\"rounded-2xl shadow-lg mb-8\" />
          <div className=\"rounded-2xl bg-white border border-gray-300 shadow-lg p-6\">
            <h3 className=\"text-2xl font-semibold text-[#a2611a] mb-4\">Our Expertise</h3>
            <ul className=\"list-disc ml-5 text-gray-700 space-y-2\">
              <li>High-speed bakery, cookie, and tortilla production</li>
              <li>Process engineering and plant layout optimization</li>
              <li>Due diligence and capacity assessments</li>
              <li>Operational turnaround and cost reduction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id=\"team\" className=\"bg-[#f1efea] py-24 relative overflow-hidden\">
        <img src=\"/mixing-line-bright.jpg\" alt=\"Mixing Line Background\"
             className=\"absolute inset-0 w-full h-full object-cover opacity-10\" />
        <div className=\"relative z-10 max-w-6xl mx-auto text-center mb-16\">
          <h2 className=\"text-4xl font-bold text-[#a2611a] mb-4\">Meet the Team</h2>
          <p className=\"text-lg text-gray-700 max-w-3xl mx-auto\">
            Decades of operational and engineering leadership in the food industry — driving measurable results for brands nationwide.
          </p>
        </div>

        <div className=\"relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6\">
          <div className=\"rounded-2xl bg-white border border-gray-300 shadow-lg p-8 text-center\">
            <div className=\"w-40 h-40 mx-auto rounded-full mb-6 bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 border-4 border-[#a2611a]\">
              SC
            </div>
            <h3 className=\"text-2xl font-semibold mb-2 text-[#1a1a1a]\">Sean Clark</h3>
            <p className=\"text-[#a2611a] mb-4\">Co-Founder & Operations Consultant</p>
            <p className=\"text-gray-700\">
              Expert in high-speed bakery formulation, packaging systems, and process scaling. Delivers consistent quality
              and production efficiency for top national brands.
            </p>
          </div>

          <div className=\"rounded-2xl bg-white border border-gray-300 shadow-lg p-8 text-center\">
            <div className=\"w-40 h-40 mx-auto rounded-full mb-6 bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 border-4 border-[#a2611a]\">
              WK
            </div>
            <h3 className=\"text-2xl font-semibold mb-2 text-[#1a1a1a]\">Sherwood “Woody” Kahl</h3>
            <p className=\"text-[#a2611a] mb-4\">Co-Founder & Senior Consultant</p>
            <p className=\"text-gray-700\">
              Four decades of leadership in industrial engineering and food manufacturing operations. Specializes in due diligence,
              plant optimization, and EBITDA improvement for bakery and CPG sectors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section id=\"contact\" className=\"py-28 bg-gradient-to-r from-[#f9f7f3] to-[#ede8e0] text-center relative overflow-hidden\">
        <img src=\"/packaging-line-bright.jpg\" alt=\"Packaging Line\"
             className=\"absolute inset-0 w-full h-full object-cover opacity-15\" />
        <div className=\"relative z-10 max-w-4xl mx-auto px-6\">
          <h2 className=\"text-4xl font-bold mb-6 text-[#a2611a]\">Ready to Optimize Your Plant?</h2>
          <p className=\"text-lg max-w-2xl mx-auto mb-8 text-gray-700\">
            Let’s discuss how SW Consulting Group can help streamline your production, reduce costs, and scale your business.
          </p>

          <form name=\"contact\" method=\"POST\" data-netlify=\"true\" netlify-honeypot=\"bot-field\" action=\"/thanks.html\"
                className=\"bg-white/90 backdrop-blur rounded-2xl shadow-md text-left p-6 md:p-8 border border-gray-200\">
            <input type=\"hidden\" name=\"form-name\" value=\"contact\" />
            <p className=\"hidden\">
              <label>Don’t fill this out if you’re human: <input name=\"bot-field\" /></label>
            </p>
            <div className=\"grid md:grid-cols-2 gap-5\">
              <div>
                <label className=\"block text-sm font-medium text-gray-700 mb-1\">Full Name</label>
                <input name=\"name\" required className=\"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a2611a]\" placeholder=\"Jane Doe\" />
              </div>
              <div>
                <label className=\"block text-sm font-medium text-gray-700 mb-1\">Email</label>
                <input type=\"email\" name=\"email\" required className=\"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a2611a]\" placeholder=\"jane@company.com\" />
              </div>
              <div>
                <label className=\"block text-sm font-medium text-gray-700 mb-1\">Company</label>
                <input name=\"company\" className=\"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a2611a]\" placeholder=\"Acme Foods\" />
              </div>
              <div>
                <label className=\"block text-sm font-medium text-gray-700 mb-1\">Phone</label>
                <input name=\"phone\" className=\"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a2611a]\" placeholder=\"(555) 555‑5555\" />
              </div>
              <div className=\"md:col-span-2\">
                <label className=\"block text-sm font-medium text-gray-700 mb-1\">How can we help?</label>
                <textarea name=\"message\" rows={5} required className=\"w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a2611a]\" placeholder=\"Briefly describe your manufacturing goals or challenges.\" />
              </div>
            </div>
            <div className=\"mt-6 flex items-center justify-between\">
              <p className=\"text-sm text-gray-600\">We typically reply within one business day.</p>
              <button type=\"submit\" className=\"bg-[#a2611a] text-white hover:bg-[#c27d24] text-lg px-8 py-3 rounded-xl font-semibold shadow-md\">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className=\"py-8 bg-[#ece7df] text-center text-gray-600 text-sm border-t border-[#d6cfc3]\">
        <p>© {new Date().getFullYear()} SW Consulting Group. All rights reserved.</p>
      </footer>
    </div>
  )
}
