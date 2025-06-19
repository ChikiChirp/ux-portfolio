"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Effect to handle scrolling to target when navigating from another page
  useEffect(() => {
    // Only run on home page
    if (pathname === "/") {
      // Check if there's a stored scroll target
      const storedTarget = sessionStorage.getItem('scrollTarget');
      
      if (storedTarget) {
        // Get whether user was in mobile view when they clicked
        const wasMobile = sessionStorage.getItem('wasMobileView') === 'true';
        
        // Clear stored values to prevent scrolling on subsequent renders
        sessionStorage.removeItem('scrollTarget');
        sessionStorage.removeItem('wasMobileView');
        
        // Determine the correct target element based on current mobile state
        const correctTarget = wasMobile && isMobile ? 
          // If they were on mobile and still are, use mobile target
          storedTarget : 
          // If they were on desktop or switched views, determine appropriate target
          storedTarget.includes('-mobile') ? 
            // Convert mobile ID to desktop if needed
            storedTarget.replace('-mobile', '') : 
            // Convert desktop ID to mobile if needed
            wasMobile ? `${storedTarget}-mobile` : storedTarget;
        
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const targetElement = document.getElementById(correctTarget);
          
          if (targetElement) {
            // Smooth scroll to element
            targetElement.scrollIntoView({ behavior: "smooth" });
            
            // Apply appropriate offset based on the target and device
            setTimeout(() => {
              // Apply different offsets for Projects and Codex sections
              if (correctTarget.includes('projects')) {
                // For Projects section - reveal the Portfolio heading
                window.scrollBy({ top: isMobile ? -100 : -100, behavior: "smooth" });
              } else if (correctTarget.includes('codex')) {
                // For Codex section - scroll less to show both heading and icons
                window.scrollBy({ top: isMobile ? -40 : -40, behavior: "smooth" });
              }
            }, 500);
          }
        }, 300);
      }
    }
  }, [pathname, isMobile]); // Re-run when pathname or mobile state changes

  // Animation variants for hamburger menu lines
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 5.25, transformOrigin: "50% 50%" },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -5.25, transformOrigin: "50% 50%" },
  };

  // Animation variants for mobile menu content
  const menuContentVariants = {
    closed: { y: "-100%", transition: { duration: 0.3 } },
    open: { y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } },
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    
    // Check if we're already on the home page or need to navigate there first
    const isOnHomePage = pathname === "/";
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Add a small delay for the mobile menu to close
    const scrollDelay = isMobileMenuOpen ? 300 : 0;
    
    if (isOnHomePage) {
      // If already on home page, scroll immediately with delay
      setTimeout(() => {
        // Directly get the element and scroll to it
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          
          // Apply appropriate offset after scrolling
          setTimeout(() => {
            // Simplified: just use consistent offset values based on section type
            if (targetId.includes("projects")) {
              window.scrollBy({ top: -100, behavior: "smooth" });
            } else if (targetId.includes("codex")) {
              window.scrollBy({ top: -40, behavior: "smooth" });
            }
          }, 500);
        }
      }, scrollDelay);
    } else {
      // When navigating from another page, use a direct URL with hash
      // This approach uses the browser's native scroll-to-anchor behavior
      // with our custom section identifier
      
      // Encode the proper section and view type in the URL hash
      const sectionType = targetId.includes("projects") ? "projects" : "codex";
      const viewType = isMobile ? "mobile" : "desktop";
      
      // Redirect with specific hash parameters that will be handled on page load
      window.location.href = `/?section=${sectionType}&view=${viewType}`;
    }
  };

  // Adjust section IDs based on mobile/desktop view
  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "CODEX",
      href: "/#codex-section",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleAnchorClick(
          e,
          isMobile ? "codex-section-mobile" : "codex-section"
        ),
    },
    {
      name: "PROJECTS",
      href: "/#projects-section",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleAnchorClick(
          e,
          isMobile ? "projects-section-mobile" : "projects-section"
        ),
    },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className="w-full fixed top-0 z-50 mobile-nav mobile-fixed"
      style={{ backgroundColor: isMobile ? "#BCD8FF" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 ml-[20px]"
            aria-label="Home"
            tabIndex={0}
          >
            <Image
              src="/figma-assets/NQ2.svg"
              width={35}
              height={16}
              alt="NQ. Logo"
              className="select-none"
              priority
            />
          </Link>

          {/* Gap between logo and navigation */}
          <div className="w-[260px] md:w-[189px]"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-[68px]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className={`p-[10px] font-kanit font-normal transition-colors duration-200 ${
                    item.name === "PROJECTS"
                      ? "text-[24px] leading-[1.495]"
                      : "text-[18px] leading-[1.495]"
                  } ${
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
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0E0E43] hover:text-[#FF0364] hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <motion.path
                  variants={line1Variants}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5"
                />
                <motion.path
                  variants={line2Variants}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5"
                />
                <motion.path
                  variants={line3Variants}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 17.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 shadow-lg bg-[#BCD8FF] overflow-hidden ${
          !isMobileMenuOpen ? "h-0" : "h-auto"
        }`}
        id="mobile-menu"
      >
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuContentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      // First close the menu
                      setIsMobileMenuOpen(false);

                      // Then handle the click action
                      if (item.onClick) {
                        item.onClick(e);
                      }
                    }}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      pathname === item.href ||
                      (pathname === "/" &&
                        item.href.startsWith("/#") &&
                        window.location.hash === item.href.substring(1))
                        ? "text-[#0E0E43] bg-gray-50"
                        : "text-[#000000] hover:text-[#0E0E43] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
