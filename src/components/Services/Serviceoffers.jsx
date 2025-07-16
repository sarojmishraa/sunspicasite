import React, { useState } from "react";

const Serviceoffers = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/isarojmishraa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          FirstName: formData.firstName,
          LastName: formData.lastName,
          Mobile: formData.phone,
          Email: formData.email,
          Message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setOpen(false);
          setStatus("");
        }, 2000);
      } else {
        setStatus("❌ " + (result.message || "Failed to send."));
      }
    } catch (error) {
      setStatus("❌ Network error, please try again.");
    }
  };

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
          className="mt-4 text-white bg font-semibold px-4 py-2 rounded max-w-40 bg-pink"
          onClick={() => setOpen(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Right Section - Service Box */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <div className="shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray hover:shadow-xl transition-all cursor-pointer">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4 text-cyan">Contact Us</h2>

            {status && <p className="mb-2 text-sm text-green-600">{status}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border p-2 rounded text-black"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border p-2 rounded text-black"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                className="border p-2 rounded text-black"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded text-black"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Query"
                rows={4}
                className="border p-2 rounded text-black"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>

            <button
              className="mt-4 text-gold text-center font-semibold px-4 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Serviceoffers;
