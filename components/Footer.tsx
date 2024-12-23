"use client";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa"; // Import icons from react-icons
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const icons = document.querySelectorAll(".rotating-icon");
    let currentIndex = 0;

    const rotateIcons = () => {
      icons.forEach((icon) => {
        const element = icon as HTMLElement; // Type cast the icon as HTMLElement
        element.style.transform = "rotate(0deg)"; // Reset all icons
        element.style.transition = "transform 1s ease"; // Add transition effect
      });

      // Rotate the current icon
      const icon = icons[currentIndex] as HTMLElement; // Type cast the current icon
      icon.style.transform = "rotate(45deg)";
      currentIndex = (currentIndex + 1) % icons.length; // Move to the next icon
    };

    // Start the rotation process
    const intervalId = setInterval(rotateIcons, 1000); // 1 second rotation + 5 seconds rest
    rotateIcons(); // Initial rotation on load

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Gaba Hope For Kids</h3>
            <p className="mb-4">Empowering children and youth since 2023</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61562089842502"
                aria-label="Facebook"
                className="hover:text-yellow-300 transition-colors"
              >
                <Facebook className="rotating-icon w-8 h-8" />
              </a>
              <a
                href="https://wa.me/qr/WMKEQ24EU3DSA1" target="_blank"
                aria-label="Contact us on WhatsApp"
                className="hover:text-yellow-300 transition-colors"
              >
                <FaWhatsapp className="rotating-icon w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/gabahopeforkids?igsh=YzljYTk1ODg3Zg=="
                aria-label="Instagram"
                className="hover:text-yellow-300 transition-colors"
              >
                <Instagram className="rotating-icon w-8 h-8" />
              </a>
              <a
                href="https://vm.tiktok.com/ZMk6xM8eF/"
                aria-label="Visit TikTok profile @username"
                className="hover:text-yellow-300 transition-colors"
              >
                <FaTiktok className="rotating-icon w-8 h-8" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-yellow-300 transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-yellow-300 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-yellow-300 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="hover:text-yellow-300 transition-colors">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" />
                <a
                  href="mailto:info@gabahopeforkids.org"
                  className="hover:text-yellow-300 transition-colors"
                >
                  gabahopeforkidsuganda@gmail.com
                </a>
              </li>

              <li className="flex items-center">
                <Phone className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +256 708 856553/ +256 787 343415
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" />
                <span>P.O Box 115207, Wakiso. Mutundwe Uganda</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Blog</h4>
            <p className="mb-4">Stay updated with our latest news and events.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Gaba Hope For Kids. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-yellow-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm hover:text-yellow-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
