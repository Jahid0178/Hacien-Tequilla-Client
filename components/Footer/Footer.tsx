import Link from "next/link";
import Logo from "../Header/Logo/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#1c1c1c] text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div>
            <Logo src="https://assets.website-files.com/632b356cbea6db8b490879b2/6384e5daa73b0c65ff0d254b_hacien-logo.svg" />
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-primary font-bold mb-3 uppercase">
                Contact Us
              </h3>
              <ul>
                <li className="mb-1">
                  <Link href="#">01789293803</Link>
                </li>
                <li>
                  <Link href="mailto:zahidul.haque767@gmail.com">
                    zahidul.haque767@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-bold mb-3 uppercase">
                Information
              </h3>
              <ul>
                <li className="mb-1">
                  <Link href="#" className="hover:link__hover">
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:link__hover">
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-primary font-bold mb-3 uppercase">
                Site Link
              </h3>
              <ul>
                <li className="mb-1">
                  <Link href="/" className="hover:link__hover">
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/our-tequila" className="hover:link__hover">
                    Our Tequila
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/our-story" className="hover:link__hover">
                    Our Story
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/recipe-builder" className="hover:link__hover">
                    Recipe Builder
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/news" className="hover:link__hover">
                    News
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/events" className="hover:link__hover">
                    Events
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/contact-us" className="hover:link__hover">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-primary font-bold mb-3 uppercase">
                Join The Hacien Community
              </h3>
              <div className="flex gap-4 mb-4">
                <FaFacebookF />
                <FaInstagram />
              </div>
              <p>
                Subscribe to our newsletter for priority notice of the latest
                HACIEN events, tastings and offers — plus everything you need to
                know about premium tequila. You’ll only hear from us once a
                month— and we’ll never pass on your details to a third party.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
