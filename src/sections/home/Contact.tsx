import React, { useState, FormEvent } from "react";

interface ContactFormData {
  name: string;
  phone: string;
  propertyType: string;
  purpose: string;
  location: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    propertyType: "",
    purpose: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="bg-gold-gradient bg-clip-text text-transparent text-5xl md:text-6xl font-bold mb-10">
              CONTACT
            </h1>

            <p className="mb-12 max-w-md">
              SRM International Real Estate LLC is the No. 01 Real estate
              Company established in Dubai. SRM International will fulfill all
              your property investment needs. We help you to do your financial
              planning and to choose the right property fitting into your
              requirements.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="font-bold mb-2">ADDRESS</h2>
                <p className="text-gray-300">
                  Office Number - 911, 9th Floor,
                  <br />
                  Clover Bay Tower, Business Bay -<br />
                  Dubai.
                </p>
              </div>

              <div>
                <h2 className="font-bold mb-2">EMAIL</h2>
                <a
                  href="mailto:info@srmintlrealestate.ae"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  info@srmintlrealestate.ae
                </a>
              </div>

              <div>
                <h2 className="font-bold mb-2">PHONE</h2>
                <a
                  href="tel:+97156 170 5428"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +971 56 170 5428
                </a>
                <a
                  href="tel:+971 56 290 3903"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +971 56 290 3903
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2 className="bg-gold-gradient bg-clip-text text-transparent text-3xl font-bold mb-8">
              Let's talk about
              <br />
              your dream!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b text-[#F0A500] border-gray-600 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b text-[#F0A500] border-gray-600 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b text-[#F0A500] border-gray-600 py-2 focus:outline-none focus:border-yellow-400 text-gray-500 appearance-none"
                    required
                  >
                    <option value="" disabled selected>
                      Property Type
                    </option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                  <div className="absolute right-2 top-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[#F0A500] border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b text-[#F0A500] border-gray-600 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b text-[#F0A500] border-gray-600 py-2 focus:outline-none focus:border-yellow-400 placeholder-gray-500 resize-none"
                  rows={2}
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="group flex items-center text-white hover:text-yellow-400 transition-colors font-bold"
                >
                  <span className="uppercase underline mr-4">Call me back</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <svg
                      className="w-5 h-5 text-black transform translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: "rotate(-45deg) translateX(2px)",
                      }} /* Rotate by 15 degrees */
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
