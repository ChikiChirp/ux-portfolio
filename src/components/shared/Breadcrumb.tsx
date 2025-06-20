'use client';

import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useIsMobile } from "@/hooks/useIsMobile";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isAnchor?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    let targetId = href.replace(/^#/, '');
    
    // Desktop routing to static pages for Projects and Codex
    if (!isMobile) {
      if (targetId === 'projects-section') {
        e.preventDefault();
        router.push('/projects');
        return;
      }
      
      if (targetId === 'codex-section') {
        e.preventDefault();
        router.push('/codex');
        return;
      }
    }
    // On mobile, use section-specific IDs
    else if (isMobile && targetId === 'projects-section') {
      targetId = 'projects-section-mobile';
    } else if (isMobile && targetId === 'codex-section') {
      targetId = 'codex-section-mobile';
    }
    
    if (isHomePage) {
      // If we're already on the home page, scroll to the section
      e.preventDefault();
      
      // Store the target in sessionStorage for consistent behavior with Navigation
      sessionStorage.setItem('scrollTarget', targetId);
      sessionStorage.setItem('wasMobileView', isMobile.toString());
      
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Apply offset if needed (matching Navigation component behavior)
        if (targetId.includes('projects')) {
          setTimeout(() => {
            window.scrollBy({ top: isMobile ? -100 : -100, behavior: 'smooth' });
          }, 100);
        }
      }
    } else {
      // If not on home page, navigate to home page with hash
      e.preventDefault();
      
      // Store the target in sessionStorage for after navigation
      sessionStorage.setItem('scrollTarget', targetId);
      sessionStorage.setItem('wasMobileView', isMobile.toString());
      
      router.push(`/#${targetId}`);
    }
  };

  return (
    <nav aria-label="Breadcrumb">
      <p className="text-base font-normal font-ubuntu-sans text-black">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">&gt;</span>}
            {item.href ? (
              item.isAnchor ? (
                <Link 
                  href={`/#${item.href.replace(/^#/, '')}`}
                  onClick={(e) => handleAnchorClick(e, item.href!)}
                  className="hover:underline cursor-pointer"
                  scroll={false}
                >
                  {item.label}
                </Link>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              )
            ) : (
              <span className="underline decoration-1 underline-offset-4">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </p>
    </nav>
  );
};

export default Breadcrumb;
