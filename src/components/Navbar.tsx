import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  LuUser,
  LuBriefcase,
  LuFileText,
  LuSend,
  LuMail,
  LuCopy,
  LuCheck,
} from "react-icons/lu";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const navItems = [
  { id: "#about", label: "ABOUT", icon: LuUser },
  { id: "#work", label: "WORK", icon: LuBriefcase },
  { id: "#resume", label: "RESUME", icon: LuFileText },
  { id: "#contact", label: "CONTACT", icon: LuSend },
];

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (targetId === "#") {
      if (smoother && typeof smoother.scrollTop === "function") {
        try {
          smoother.scrollTop(0);
          return;
        } catch {
          // fallback
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (smoother && typeof smoother.scrollTo === "function") {
        try {
          smoother.scrollTo(targetId, true, "top top");
          return;
        } catch {
          // fallback
        }
      }
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("priyanshumohanty2611@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <nav className="header" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a
          href="/#"
          onClick={(e) => handleNavClick(e, "#")}
          className="navbar-title brand-pill"
          data-cursor="disable"
          title="Scroll to Top"
        >
          <span className="brand-dot"></span>
          <span className="brand-text">PM</span>
        </a>

        {/* Center Email Workable Pill */}
        <div className="navbar-connect">
          <a
            href="mailto:priyanshumohanty2611@gmail.com"
            className="email-pill"
            data-cursor="disable"
            title="Send Email"
          >
            <LuMail className="email-icon" />
            <span className="email-text">priyanshumohanty2611@gmail.com</span>
          </a>
          <button
            type="button"
            className="email-copy-btn"
            onClick={handleCopyEmail}
            title={copied ? "Copied!" : "Copy Email"}
            aria-label="Copy Email"
            data-cursor="disable"
          >
            {copied ? (
              <LuCheck className="copy-icon copied" />
            ) : (
              <LuCopy className="copy-icon" />
            )}
            <span className="copy-tooltip">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        {/* Navigation Items with Icons */}
        <ul className="navbar-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={item.id}
                  data-href={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="nav-link-btn"
                  data-cursor="disable"
                >
                  <span className="nav-icon-wrapper">
                    <Icon className="nav-item-icon" />
                  </span>
                  <span className="nav-text-wrapper">
                    <HoverLinks text={item.label} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
