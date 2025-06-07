"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CODEX", href: "/codex" },
    { name: "PROJECTS", href: "/projects" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-transparent absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl font-medium text-[#0E0E43]">
              Nikita Quazi
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-lg font-normal transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#0E0E43] font-medium"
                      : "text-[#000000] hover:text-[#0E0E43]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0E0E43] hover:text-[#FF0364] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF0364]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-sm border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "text-[#0E0E43] bg-gray-50"
                  : "text-[#000000] hover:text-[#0E0E43] hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
