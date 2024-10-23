import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Privacy Policy", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-6 mt-10 p-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Blogs App</h2>
          <p className="text-sm mt-2">© 2024 Blogs App. All rights reserved.</p>
        </div>
        <ul className="flex space-x-4 md:space-x-8 text-sm">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-sm">Follow us:</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <span
                key={platform}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
