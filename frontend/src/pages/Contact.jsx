import React from 'react';

const Header = () => (
    <>
 <div className="relative bg-black">
        {/* Image */}
        <div
          className="w-full h-[400px]   bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHwwfDB8fHww')",
          }}
        ></div>

        {/* SVG Wave */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[150px] bg-no-repeat bg-bottom"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDE1MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgNDAuMjE1bDY0IDE5LjYwMmM2NCAxOS45NjkgMTkyIDU4LjYyIDMyMCAzOS4yOTRDNTEyIDc5Ljc4NiA2NDAgLjY0NSA3NjggLjkyYzEyOC0uMjc1IDI1NiA3OC44NjYgMzg0IDg4LjM0NSAxMjggOS44NDYgMjU2LTQ5LjA1IDM4NC01My45MjcgMTI4LTUuMjQ1IDI1NiA0NC40NDggMzIwIDY4LjY1bDY0IDI0LjU3MVYxNTBIMFY0MC4yMTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+")',
            backgroundSize: '100% 150px',
            zIndex: 10,
          }}
        ></div>
      </div>
      <div className="bg-[#ffffff] pt-8 pb-20 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          We bring you hand-crafted meals made with love and fresh ingredients. From farm to table, we care about what you eat.
        </p>
      </div>
    </>
);

const ContactInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
    {[
      {
        title: 'OUR ADDRESS',
        content: ['4517 Washington Ave. Manchester, Kentucky 39495'],
      },
      {
        title: 'EMAIL',
        content: ['info@example.com', 'We reply within 24 hours'],
      },
      {
        title: 'HOTLINE',
        content: ['+01-208-846-0112', '24/7 Customer Support'],
      },
      {
        title: 'OPENING HOURS',
        content: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 4 PM', 'Sunday: Closed'],
      },
    ].map((item, idx) => (
      <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        {item.content.map((text, i) => (
          <p key={i} className="text-gray-600">{text}</p>
        ))}
      </div>
    ))}
  </div>
);

const ContactForm = () => (
  <div className="flex flex-col md:flex-row items-center gap-8 my-8">
    <div className="w-full md:w-1/2">
      <div className="w-full h-[500px] bg-gray-200 rounded-r-full mx-auto flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHwwfDB8fHww" className='w-full rounded-r-full' alt="" />
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-white shadow-md p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          placeholder="Write your message here..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
        />
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-600">
            Collaboratively formulate resource-leveling solutions. Progressively enable user-centric resources.
          </label>
        </div>
        <button className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600">
          SUBMIT
        </button>
      </div>
    </div>
  </div>
);

const MapSection = () => (
  <div className="my-8">
    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500">Map Placeholder</span>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <div className="container mx-auto px-4">
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  </div>
);

export default ContactPage;
