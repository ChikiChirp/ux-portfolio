import Image from "next/image";
import Link from "next/link";

const footerIconMailStyled = "/figma-assets/footer-mobile-mail-icon.svg";
const footerIconLinkedinStyled = "/figma-assets/footer-linkedln-icon.svg";
const footerIconBehanceStyled = "/figma-assets/footer-behance-icon.svg";

const socialLinksData = [
  {
    name: "Email",
    href: "mailto:nikita.quazi@gmail.com",
    iconSrc: footerIconMailStyled,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikita-quazi/",
    iconSrc: footerIconLinkedinStyled,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/nikitaquazi1",
    iconSrc: footerIconBehanceStyled,
  },
];

export default function MobileFooterSocialLinks() {
  return (
    <div className="flex flex-row gap-x-[45px]">
      {socialLinksData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={item.iconSrc} alt={item.name} width={45} height={45} />
          <span className="sr-only">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
