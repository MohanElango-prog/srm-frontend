import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    propertyType: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex bg-black/90">
      <div className="flex justify-center items-center p-[70px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-black/50 p-6  rounded-lg shadow-lg "
        >
          <h2 className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-6 text-left mt-[50px]">
            Get In Touch With Us!
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-white">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full bg-[#f1c85e]/10 text-[#F0A500] placeholder-[#F0A500] border border-[#926803]/50 rounded-md py-2 px-3 backdrop-blur-lg shadow-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="w-full bg-[#f1c85e]/10 text-[#F0A500] placeholder-[#F0A500] border border-[#926803] rounded-md py-2 px-3 backdrop-blur-lg shadow-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full bg-[#f1c85e]/10 text-[#F0A500] placeholder-[#F0A500] border border-[#926803] rounded-md py-2 backdrop-blur-lg shadow-lg px-3 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where You Are Looking For?"
                className="w-full bg-[#f1c85e]/10 text-[#F0A500] border placeholder-[#F0A500] border-[#926803] rounded-md py-2 px-3 backdrop-blur-lg shadow-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white">Property Type</label>
            <input
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              placeholder="Type Your Property"
              className="w-full bg-[#f1c85e]/10 text-[#F0A500] placeholder-[#F0A500] border border-[#926803] rounded-md py-2 px-3 backdrop-blur-lg shadow-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-[#f1c85e]/10 text-[#F0A500] placeholder-[#F0A500] backdrop-blur-lg shadow-lg border border-[#926803] rounded-md py-2 px-3 h-24 resize-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white border border-[#FFDB7F] placeholder-[#F0A500] py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300 font-bold"
          >
            Enquiry Now
          </button>
        </form>
      </div>

      <div className="w-1/2 relative ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.425692141431!2d55.26711687595994!3d25.18886283203716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d353d52701%3A0xea5908e654d1ea82!2sClover%20Bay%20Tower%20-%206a%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1741160850606!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full p-10"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
