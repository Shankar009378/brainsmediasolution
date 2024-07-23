import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-semibold mb-4">Contact Us</h3>
            <p className="text-neutral-300">contact@brainsmediasolutions.com</p>
            <p className="text-neutral-300">www.brainsmediasolutions.com</p>
            <p className="text-neutral-300">+(91) 953 553 3588</p>
            <p className="text-neutral-300">+(91) 994 536 3588</p>
            <p className="text-neutral-300 mt-4">
              Plot No 28, 2nd Floor, Ganeshpur Road,
              <br />
              Belagavi - Karnataka 591108
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-neutral-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-neutral-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-neutral-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-neutral-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-neutral-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-neutral-300 mt-8">
          © {new Date().getFullYear()} Brains Media Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
