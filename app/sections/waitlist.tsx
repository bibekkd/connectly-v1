import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 lg:gap-8">
        <div className="px-6 lg:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Join our exclusive waitlist
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Be the first to know when we launch. Get early access to our platform
            and exclusive benefits.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0000ff] text-white">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Early Access</h3>
              <p className="mt-2 text-gray-500">Be among the first to experience our platform</p>
            </div>
          </div>
        </div>

        <div className="px-6 mt-12 lg:mt-0 lg:col-span-3">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-[#0000ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-500">
                  We'll notify you when we're ready to launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[#0000ff] focus:ring-[#0000ff]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-[#0000ff] px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:ring-offset-2 transition-colors duration-200"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
            <div className="mt-6 text-center text-sm text-gray-500">
              Already joined? <a href="#" className="font-medium text-[#0000ff] hover:text-blue-700">Check your status</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}