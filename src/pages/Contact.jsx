import React, { useState } from "react"

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-20">
      
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-gray-100/40 p-5 sm:p-6 md:p-8 border border-gray-300/70 rounded-lg">

        {/* Left side */}
        <div className="text-sm sm:text-base">
          <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-2">📍 Address: GreenCart, India</p>
          <p className="text-gray-600 mb-2">✉️ Email: support@greencart.com</p>
          <p className="text-gray-600 mt-3 sm:mt-4">
            We deliver fresh groceries and snacks straight to your door.
          </p>
        </div>

        {/* Right side */}
        <div>
          {sent && (
            <p className="text-green-600 font-medium mb-3 text-center text-sm sm:text-base">
              ✅ Your message has been sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-3 sm:px-4 py-2 outline-none text-sm sm:text-base rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-3 sm:px-4 py-2 outline-none text-sm sm:text-base rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 px-3 sm:px-4 py-2 outline-none text-sm sm:text-base rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-white px-6 py-2 hover:bg-primary-dull transition rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
