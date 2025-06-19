import React, { useState } from "react";

const Serviceoffers = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center p-8 bg-gradient-to-b from-gray to-white saroj">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col space-y-4">
        <span className="text-gray flex items-center space-x-2">
          <span className="w-2 h-2 bg-yellow rounded-full"></span>
          <span>Our Capabilities</span>
        </span>
        <h2 className="text-4xl font-bold mt-2">Services we offer</h2>
        <button
          className="mt-4  text-white bg font-semibold px-4 py-2 rounded max-w-40 bg-pink"
          onClick={() => setOpen(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Right Section - Service Box */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <div className="shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray hover:shadow-xl transition-all cursor-pointer
">
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/images/serviceImage/webimg.png"
              alt="Web Development"
              className="w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-600 text-sm">
              Involves utilizing a tech stack consisting of front-end
              technologies like React.js, Angular.js, Vue.js, MERN, MEAN, and
              Vanilla.js, back-end technologies like Node.js, PHP, Python, Ruby
              on Rails, ASP.NET, and Java, and deployment on AWS.
            </p>
          </div>
        </div>
      </div>

      {/* Modal - Contact Form */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-cyan">Contact Us</h2>
            <form className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                required
              />
              <textarea
                placeholder="Your Query"
                rows={4}
                className="border p-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button className="mt-4 text-gold text-center font-semibold px-4 py-2 rounded" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Serviceoffers;
