import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <p className="text-base font-normal font-ubuntu-sans text-black">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">&gt;</span>}
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
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
