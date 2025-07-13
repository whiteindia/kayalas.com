import { Navigation } from "@/components/ui/navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with Excellence University for admissions,
            partnerships, or any inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-college-gold mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  Excellence University Campus
                  <br />
                  Academic City, New Delhi - 110001
                  <br />
                  India
                </p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Phone</h3>
                <p className="text-gray-300">+91 (11) 2345-6789</p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Email</h3>
                <p className="text-gray-300">info@excellenceuniversity.edu</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-college-gold mb-6">
              Send Message
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-college-gold"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-college-gold"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-college-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-college-gold text-black font-medium py-3 px-6 rounded-lg hover:bg-college-gold-dark transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}