"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "Create Blog", href: "/create-blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg md:text-2xl">
          <Link href="/">Blogs App</Link>
        </div>
        <ul className="flex space-x-4 md:space-x-8 text-white">
          {headerLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-gray-300 transition-colors"
                style={{
                  fontWeight: pathname === href ? "700" : "400",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
