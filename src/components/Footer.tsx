const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-4/5 md:container mx-auto">
        <div className="w-full mx-auto p-4 flex flex-col md:flex-row md:items-center justify-center items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              VideoAlchemist™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#tools" className="hover:underline me-4 md:me-6">
                Tools
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
