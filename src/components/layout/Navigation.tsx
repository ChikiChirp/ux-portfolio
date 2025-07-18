"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  // Use Record type for proper TypeScript typing of hash matches
  const [isHashMatch, setIsHashMatch] = useState<Record<string, boolean>>({});

  // Adjust section IDs based on mobile/desktop view
  interface NavItem {
    name: string;
    href: string;
    offset?: number;
    mobileHref?: string;
    mobileOffset?: number;
  }

  // Calculate responsive offsets based on viewport height
  const getResponsiveOffset = (basePercentage: number) => {
    // Client-side only
    if (typeof window !== 'undefined') {
      // Calculate offset as a percentage of viewport height
      const viewportHeight = window.innerHeight;
      return Math.round(viewportHeight * (basePercentage / 100)) * -1;
    }
    // Default fallback for SSR
    return -100;
  };

  // Calculate responsive offsets on component mount and window resize
  const [desktopOffset, setDesktopOffset] = useState(-100);
  const [mobileOffset, setMobileOffset] = useState(-80);

  // Update offsets on mount and resize
  useEffect(() => {
    const updateOffsets = () => {
      // For desktop: 10% of viewport height
      setDesktopOffset(getResponsiveOffset(10));
      // For mobile: 8% of viewport height
      setMobileOffset(getResponsiveOffset(8));
    };

    // Initial calculation
    updateOffsets();

    // Add resize listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateOffsets);
      return () => window.removeEventListener('resize', updateOffsets);
    }
  }, []);

  // Define base nav items that don't depend on client-side state
  const baseNavItems: NavItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "CODEX",
      href: "/codex", // Always use static page for SSR consistency
      offset: desktopOffset,
      mobileHref: "/codex-mobile", // Use the new static mobile page
      mobileOffset: mobileOffset,
    },
    {
      name: "PROJECTS",
      href: "/projects", // Always use static page for SSR consistency
      offset: desktopOffset,
      mobileHref: "projects-section-mobile",
      mobileOffset: mobileOffset,
    },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];
  
  // Use the items directly for SSR and initial render
  const [navItems, setNavItems] = useState<NavItem[]>(baseNavItems);
  
  // Update nav items on client side after hydration
  useEffect(() => {
    if (isMobile) {
      // For mobile, update PROJECTS to use anchor links and CODEX to use static page
      setNavItems(prev => prev.map(item => {
        if (item.name === "CODEX") {
          return { ...item, href: "/codex-mobile" }; // Use static mobile Codex page
        }
        if (item.name === "PROJECTS") {
          return { ...item, href: "projects-section" };
        }
        return item;
      }));
    }
  }, [isMobile]);

  // Effect to handle scrolling to target when navigating from another page
  useEffect(() => {
    // Only run on home page
    if (pathname === "/") {
      // Check if we're in the browser and there's a stored scroll target
      const storedTarget =
        typeof window !== "undefined"
          ? sessionStorage.getItem("scrollTarget")
          : null;

      if (storedTarget) {
        // Clear stored values to prevent scrolling on subsequent renders
        if (typeof window !== "undefined") {
          sessionStorage.removeItem("scrollTarget");
          sessionStorage.removeItem("wasMobileView");
        }

        // Determine the correct target element based on current mobile state
        let correctTarget = storedTarget;

        // If on mobile, ensure we have the mobile-specific ID for known sections
        if (isMobile) {
          if (storedTarget === "projects-section") {
            correctTarget = "projects-section-mobile";
          } else if (storedTarget === "codex-section") {
            correctTarget = "codex-section-mobile";
          } else if (
            !storedTarget.includes("-mobile") &&
            (storedTarget.includes("projects") ||
              storedTarget.includes("codex"))
          ) {
            // For any other projects or codex related IDs not explicitly handled
            correctTarget = `${storedTarget}-mobile`;
          }
        } else {
          // If on desktop, remove -mobile suffix if present
          if (storedTarget.includes("-mobile")) {
            correctTarget = storedTarget.replace("-mobile", "");
          }
        }

        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const targetElement =
            typeof document !== "undefined"
              ? document.getElementById(correctTarget)
              : null;

          if (targetElement) {
            // Smooth scroll to element
            targetElement.scrollIntoView({ behavior: "smooth" });

            // Apply appropriate offset based on the target and device
            setTimeout(() => {
              // Apply different offsets for Projects and Codex sections
              if (correctTarget.includes("projects")) {
                // For Projects section - reveal the Portfolio heading
                if (typeof window !== "undefined") {
                  window.scrollBy({
                    top: isMobile ? -100 : -100,
                    behavior: "smooth",
                  });
                }
              } else if (correctTarget.includes("codex")) {
                // For Codex section - scroll less to show both heading and icons
                if (typeof window !== "undefined") {
                  window.scrollBy({
                    top: isMobile ? -40 : -40,
                    behavior: "smooth",
                  });
                }
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

  // Handle navigation for regular links (like /about)
  // Navigation functions have been inlined directly in onClick handlers

  // Update hash match state on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create a map of href to boolean match status
      const hashMatches: Record<string, boolean> = {};
      navItems.forEach((item: NavItem) => {
        if (!item.href.startsWith("/")) {
          hashMatches[item.href] = window.location.hash.includes(item.href);
        }
      });
      setIsHashMatch(hashMatches);
    }
  }, [pathname, navItems]); // Re-check when pathname or navItems change

  // Handle anchor link clicks for navigation
  const handleAnchorNavigation = (to: string) => {
    // Check if we need special handling for mobile section IDs
    let targetId = to;
    if (isMobile) {
      // If on mobile and targeting a section that has a mobile version, use it
      if (to === "projects-section") {
        targetId = "projects-section-mobile";
      } else if (to === "codex-section") {
        targetId = "codex-section-mobile";
      }
    }

    if (pathname !== "/") {
      // If not on home page, store target and navigate to home with hash
      if (typeof window !== "undefined") {
        // Clear any existing stored targets first
        sessionStorage.removeItem("scrollTarget");
        sessionStorage.removeItem("wasMobileView");
        
        // Set the new target
        sessionStorage.setItem("scrollTarget", targetId);
        sessionStorage.setItem("wasMobileView", isMobile.toString());
        
        // Add a timestamp to force router to recognize this as a new navigation
        const timestamp = new Date().getTime();
        sessionStorage.setItem("navTimestamp", timestamp.toString());
      }

      // Use router.push with hash and timestamp to ensure navigation triggers
      const timestamp = new Date().getTime();
      router.push(`/#${targetId}?t=${timestamp}`);
    } else if (typeof window !== "undefined") {
      // Even on home page, ensure we're clearing any stale navigation state
      sessionStorage.removeItem("scrollTarget");
      sessionStorage.removeItem("wasMobileView");
    }
    // If on home page, ScrollLink will handle the scrolling
  };

  // NavItem interface and navItems array are now defined at the top of the component

  return (
    <nav
      className={`w-full fixed top-0 z-50 mobile-nav mobile-fixed ${!isMobile ? 'backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm' : ''}`}
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
              {/* Use the same component type consistently for both server and client render */}
              {navItems.map((item: NavItem) => {
                // For all items, use Next.js Link component for consistent SSR
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={item.href.startsWith("/") ? 
                      (e) => {
                        e.preventDefault();
                        if (isMobileMenuOpen) {
                          setIsMobileMenuOpen(false);
                        }
                        
                        // Clear any stored navigation state
                        if (typeof window !== "undefined") {
                          sessionStorage.removeItem("scrollTarget");
                          sessionStorage.removeItem("wasMobileView");
                        }
                        
                        // Force navigation using router.push
                        router.push(item.href);
                      } 
                      : 
                      (e) => {
                        e.preventDefault();
                        // Only handle anchor navigation client-side
                        if (typeof window !== "undefined" && !item.href.startsWith("/")) {
                          handleAnchorNavigation(
                            isMobile ? item.mobileHref || item.href : item.href
                          );
                        }
                      }
                    }
                    className={`p-[10px] font-kanit font-normal transition-all duration-200 relative ${
                      item.name === "PROJECTS"
                        ? "text-[24px] leading-[1.495]"
                        : "text-[18px] leading-[1.495]"
                    } ${
                      (pathname === item.href || (pathname === "/" && isHashMatch[item.href]))
                        ? "text-[#0E0E43] font-medium after:content-[\"\"] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:scale-x-100 after:origin-center after:bg-[#3B5F8A]/70 after:backdrop-blur-sm after:rounded-full after:shadow-sm after:border-t after:border-white/50 after:transition-transform after:duration-500 after:ease-out"
                        : "text-[#000000] hover:text-[#0E0E43] hover:after:content-[\"\"] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:scale-x-100 hover:after:origin-left hover:after:h-0.5 hover:after:bg-[#3B5F8A]/40 hover:after:backdrop-blur-sm hover:after:rounded-full hover:after:transition-all hover:after:duration-300 after:content-[\"\"] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:origin-left after:bg-[#3B5F8A]/40 after:transition-transform after:duration-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
                {navItems.map((item: NavItem) =>
                  item.href.startsWith("/") ? (
                    // Regular Next.js Link for non-anchor links
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (isMobileMenuOpen) {
                          setIsMobileMenuOpen(false);
                        }
                        
                        // Clear any stored navigation state
                        if (typeof window !== "undefined") {
                          sessionStorage.removeItem("scrollTarget");
                          sessionStorage.removeItem("wasMobileView");
                        }
                        
                        // Force navigation using router.push
                        router.push(item.href);
                      }}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-[#0E0E43] bg-gray-50"
                          : "text-[#000000] hover:text-[#0E0E43] hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    // react-scroll Link for anchor links
                    <ScrollLink
                      key={item.name}
                      to={isMobile ? item.mobileHref || item.href : item.href}
                      spy={true}
                      smooth={true}
                      offset={
                        isMobile ? item.mobileOffset || 0 : item.offset || 0
                      }
                      duration={500}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                        pathname === "/" && isHashMatch[item.href]
                          ? "text-[#0E0E43] bg-gray-50"
                          : "text-[#000000] hover:text-[#0E0E43] hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        const targetId =
                          isMobile && item.mobileHref
                            ? item.mobileHref
                            : item.href;
                        handleAnchorNavigation(targetId);
                        if (isMobileMenuOpen) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </ScrollLink>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
