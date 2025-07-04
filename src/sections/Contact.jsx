const Contact = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen flex flex-col items-center justify-center p-10">
      <div className="flex flex-col lg:flex-row items-center max-w-5xl w-full gap-10">
        
        {/* Left: Avatar & Socials */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/avatar.jpg"
            alt="Avatar"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500"
          />
          <h2 className="text-3xl font-bold mt-4">Contact Me</h2>
          <p className="text-gray-400 mt-2">
            Do you speak Na'vi? It’s okay if you don’t, I speak English too.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" className="text-blue-400 hover:text-white">Facebook</a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-white">Twitter</a>
            <a href="https://dribbble.com" className="text-pink-400 hover:text-white">Dribbble</a>
            <a href="https://linkedin.com" className="text-blue-300 hover:text-white">LinkedIn</a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Send me an email</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="p-3 bg-transparent border border-gray-600 rounded-md"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-3 bg-transparent border border-gray-600 rounded-md"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="p-3 bg-transparent border border-gray-600 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
