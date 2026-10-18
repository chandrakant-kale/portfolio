
import { useEffect, useRef, useState } from "react";

// Keep your portrait inside src/assets/.
import PHOTO from "./assets/ProfessionalPhoto.png";

// Replace these with your real details.
const EMAIL = "chandrakantkale517.com";
const GITHUB = "https://github.com/chandrakant-kale";
const LINKEDIN = "https://www.linkedin.com/in/chandraknt kale/";

const skills = [
  ["HTML5", "FRONTEND"],
  ["CSS3", "FRONTEND"],
  ["JavaScript", "LANGUAGE"],
  ["React", "FRONTEND"],
  ["Tailwind CSS", "STYLING"],
  ["Node.js", "BACKEND"],
  ["Express.js", "BACKEND"],
  ["REST APIs", "BACKEND"],
  ["MongoDB", "DATABASE"],
  ["PostgreSQL", "DATABASE"],
  ["Java", "LANGUAGE"],
  ["Git & GitHub", "TOOLS"],
];

const projects = [
  {
    number: "01",
    name: "Clean India",
    category: "CIVIC TECHNOLOGY",
    year: "2025–26",
    description:
      `An independent waste-management project designed to connect citizens with waste collection services,
       verification and reward-based participation.`,
    stack: ["React", "Tailwind CSS", "Express", "MongoDB"],
    github: "",
  },
  {
    number: "02",
    name: "PorChatal",
    category: "PRIVATE MESSAGING",
    year: "2026",
    description:
      `An ephemeral messaging application built around account authentication and temporary connection codes, 
      with end-to-end encryption as an ongoing development focus.`,
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "",
  },
];

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["work", "Projects"],
  ["contact", "Contact"],
];

const technologies = [
  "REACT",
  "JAVASCRIPT",
  "NODE.JS",
  "POSTGRESQL",
  "MONGODB",
  "TAILWIND CSS",
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em]
         ${light ? "text-neutral-600" : "text-neutral-400"
        }`}
    >
      <span className={light ? "text-[#2c3480]" : "text-[#858df1]"}>
        {number}
      </span>
      <span className="h-px w-8 bg-current opacity-30" />
      <span>{children}</span>
    </div>
  );
}

export default function App() {
  const sectionRefs = useRef({});
  const marqueeRef = useRef(null);

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);

    sectionRefs.current[id]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  // All animations are created directly by JavaScript.
  // No custom CSS keyframes or Tailwind animation definitions are needed.
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animations = [];
    const observers = [];

    // 1. Continuous technology marquee.
    const track = marqueeRef.current;

    if (track && !reducedMotion) {
      const animation = track.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-50%)" },
        ],
        {
          duration: 28000,
          iterations: Infinity,
          easing: "linear",
        }
      );

      animations.push(animation);
    }

    // 2. Staggered hero heading entrance.
    const heroLines = document.querySelectorAll("[data-hero-line]");

    document.querySelectorAll("[data-hero-line]").forEach((element, index) => {
      if (reducedMotion) {
        element.style.opacity = "1";
        element.style.transform = "none";
        return;
      }

      const animation = element.animate(
        [
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 700,
          delay: index * 120,
          easing: "cubic-bezier(.2,.7,.2,1)",
          fill: "both",
        }
      );

      animations.push(animation);
    });

    // 3. Scroll-triggered section reveals.
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (reducedMotion) {
      revealElements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
    } else {
      revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(24px)";
      });

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target;

            const animation = element.animate(
              [
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 700,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "forwards",
              }
            );

            animations.push(animation);
            observer.unobserve(element);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -25px 0px",
        }
      );

      revealElements.forEach((element) => revealObserver.observe(element));
      observers.push(revealObserver);
    }

    // 4. Active navigation section.
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) sectionObserver.observe(section);
    });

    observers.push(sectionObserver);

    // 5. Header appearance when scrolling.
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener("scroll", handleScroll);

      revealElements.forEach((element) => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      });
    };
  }, []);

  const copyEmail = async () => {
    if (EMAIL.includes("YOUR_EMAIL")) {
      window.alert("Replace YOUR_EMAIL@example.com with your real email.");
      return;
    }

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const openExternal = (url) => {
    if (!url || url.includes("YOUR_USERNAME")) {
      window.alert("Add your real profile or repository URL in App.jsx.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-x-clip bg-[#08090c] font-sans text-[#f5f5f2] selection:bg-[#2c3480] selection:text-white">
      {/* NAVIGATION */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled
          ? "border-white/10 bg-[#08090c]/95 backdrop-blur-xl"
          : "border-transparent bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-18 max-w-290 items-center justify-between gap-5 px-5 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            aria-label="Go to homepage"
            className="group flex shrink-0 items-center gap-3 text-left"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2c3480] font-bold transition-transform
             duration-300 group-hover:-rotate-6">
              C
            </span>

            <span>
              <span className="block text-sm font-bold tracking-tight">
                Chandrakant Kale
              </span>
              <span className="mt-0.5 block font-mono text-[9px] tracking-widest text-neutral-500">
                DEVELOPER PORTFOLIO
              </span>
            </span>
          </button>

          <button
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center border border-white/15 text-lg md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav
            className={`absolute left-0 right-0 top-17.75 flex flex-col border-b border-white/10 bg-[#08090c] 
              px-5 pb-5 transition-all duration-200 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0
               md:bg-transparent md:p-0 ${menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100"
              }`}
          >
            {navigation.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`border-b border-white/5 py-4 text-left text-xs transition-colors md:border-0 md:py-2
                   ${active === id
                    ? "text-[#929aff]"
                    : "text-neutral-400 hover:text-white"
                  }`}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              className="mt-3 border border-white/25 px-4 py-3 text-xs transition-colors hover:border-[#2c3480] 
              hover:bg-[#2c3480] md:mt-0"
            >
              Let's talk ↗
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          ref={(element) => {
            sectionRefs.current.home = element;
          }}
          className="relative flex min-h-162.5 scroll-mt-20 items-center overflow-hidden py-24 sm:min-h-175 sm:py-20
           lg:min-h-185"
        >

          <div className="pointer-events-none absolute -right-40 top-16 h-112.5 w-112.5 rounded-full bg-[#2c3480]/20
           blur-[120px]" />

          <div className="relative mx-auto grid w-full max-w-360 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.15fr_.85fr]
           md:gap-8 lg:gap-12 lg:px-12">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-neutral-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#858df1]" />
                FRONTEND & FULL-STACK DEVELOPMENT
              </div>

              <h1 className="text-[clamp(3.4rem,8vw,6.5rem)] font-bold leading-[.98] tracking-[-0.085em]">
                <span data-hero-line className="block">
                  Building
                </span>
                <span data-hero-line className="block">
                  ideas into
                </span>
                <span data-hero-line className="block text-[#858df1]">
                  real products.
                </span>
              </h1>

              <p className="mt-7 max-w-117.5 text-sm leading-8 text-neutral-400 sm:text-base">
                I'm Chandrakant, a developer from India who enjoys turning
                practical problems into thoughtful web experiences, from
                interface design to backend logic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="group inline-flex items-center gap-4 bg-[#2c3480] px-5 py-4 text-xs font-semibold 
                  transition-all duration-300 hover:-translate-y-1 hover:bg-[#3a46a5]"
                >
                  Explore my work
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-4 border border-white/25 px-5 py-4 text-xs font-semibold 
                  transition-all duration-300 hover:-translate-y-1 hover:border-white"
                >
                  Get in touch <Arrow diagonal />
                </button>
              </div>

              <div className="mt-9 flex items-center gap-3 font-mono text-[9px] tracking-[0.09em] text-neutral-500">
                <span className="text-[#858df1]">✳</span>
                BCA GRADUATE · INDEPENDENT PROJECT BUILDER
              </div>
            </div>

            <div
              data-reveal
              className="mx-auto w-full max-w-130 md:justify-self-end lg:max-w-142.5"
            >
              <div className="relative z-10 flex h-85 items-end justify-center sm:h-110 md:h-120 lg:h-132.5">
                {PHOTO ? (
                  <img src={PHOTO} alt="Portrait of Chandrakant Kale" fetchPriority="high"
                    className="h-full w-full object-contain object-bottom" />
                ) : (
                  <div className="mb-6 flex h-[85%] w-[82%] flex-col items-center justify-center rounded-t-full
                   bg-[#d0d1d7] text-[#2c3480]"> <span className="text-7xl font-semibold -tracking-widest"
                    > CK. </span>
                    <span className="mt-3 font-mono text-[9px]"> ADD YOUR PHOTO TO SRC/ASSETS </span>
                  </div>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between font-mono text-[9px] tracking-widest text-neutral-500">
                <span>CHANDRAKANT KALE</span>
                <span className="text-[#858df1]">INDIA · IST</span>
              </div>
            </div>
          </div>
        </section>

        {/* ANIMATED TECHNOLOGY STRIP: ONLY ONE INSTANCE */}
        <div className="overflow-hidden border-y border-white/10 bg-[#0d0e13] py-5">
          <div
            ref={marqueeRef}
            className="flex w-max items-center whitespace-nowrap font-mono text-[10px] tracking-[0.15em] text-neutral-300"
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-8 pr-8"
              >
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="flex shrink-0 items-center gap-8"
                  >
                    {technology}
                    <span className="h-1 w-1 rotate-45 bg-[#858df1]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section
          id="about"
          ref={(element) => {
            sectionRefs.current.about = element;
          }}
          className="scroll-mt-20 py-24 sm:py-32"
        >
          <div className="mx-auto grid max-w-290 gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-20">
            <div data-reveal>
              <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>

              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-6xl">
                Curious by nature.
                <span className="mt-2 block text-neutral-600">
                  Practical by choice.
                </span>
              </h2>
            </div>

            <div
              data-reveal
              className="text-sm leading-8 text-neutral-400 sm:pt-12 sm:text-[15px]"
            >
              <p className="mb-5">
                I'm <strong className="font-semibold text-white">Chandrakant Kale</strong>,
                a BCA graduate and developer interested in building useful,
                accessible and reliable web applications.
              </p>

              <p className="mb-5">
                My learning goes beyond writing components. I work with
                databases, authentication, API design and the details that
                connect a frontend to a working application.
              </p>

              <p>
                <strong className="text-white">Clean India</strong> is my
                independent civic waste-management project. I'm also
                developing <strong className="text-white">PorChatal</strong>,
                a messaging project that has pushed me to learn about privacy
                and cryptography.
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-[#2c3480] font-bold">
                  CK
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Learning through building
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    Frontend · APIs · Databases · Security fundamentals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          ref={(element) => {
            sectionRefs.current.skills = element;
          }}
          className="scroll-mt-20 bg-[#f2f2ef] py-24 text-[#111216] sm:py-32"
        >
          <div className="mx-auto max-w-290 px-5 sm:px-8">
            <div
              data-reveal
              className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <SectionLabel number="02" light>
                  TOOLS OF THE TRADE
                </SectionLabel>

                <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-6xl">
                  The stack behind
                  <span className="block text-neutral-500">the work.</span>
                </h2>
              </div>

              <p className="max-w-82.5 text-sm leading-7 text-neutral-600">
                Technologies I've worked with through projects, hands-on
                practice and continued learning.
              </p>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-black/15 sm:grid-cols-3">
              {skills.map(([name, category]) => (
                <div
                  key={name}
                  data-reveal
                  className="group flex min-h-28.75 flex-col justify-between gap-6 border-b border-r border-black/15
                   p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2c3480] hover:text-white 
                   sm:min-h-32.5 sm:p-6"
                >
                  <span className="font-mono text-[9px] tracking-widest text-neutral-500 transition-colors 
                  group-hover:text-[#d2d5ff]">
                    {category}
                  </span>
                  <span className="text-base font-semibold tracking-tight sm:text-xl">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 font-mono text-[9px] leading-6 tracking-widest text-neutral-500">
              MY APPROACH: UNDERSTAND THE PROBLEM → BUILD → TEST → IMPROVE
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="work"
          ref={(element) => {
            sectionRefs.current.work = element;
          }}
          className="scroll-mt-20 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-290 px-5 sm:px-8">
            <div
              data-reveal
              className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <SectionLabel number="03">SELECTED PROJECTS</SectionLabel>

                <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-6xl">
                  Built to solve
                  <span className="block text-neutral-600">real problems.</span>
                </h2>
              </div>

              <p className="max-w-75 text-sm leading-7 text-neutral-400">
                A closer look at what I've been working on and the problems
                behind each project.
              </p>
            </div>

            <div className="border-t border-white/15">
              {projects.map((project) => (
                <article
                  key={project.number}
                  data-reveal
                  className="group grid grid-cols-[30px_minmax(0,1fr)_32px] gap-3 border-b border-white/15 py-8
                   transition-colors duration-300 hover:bg-white/2.5 sm:grid-cols-[45px_minmax(0,1fr)_minmax(180px,.75fr)_35px]
                    sm:gap-5 sm:py-10"
                >
                  <span className="pt-1 font-mono text-[10px] text-neutral-500">
                    {project.number}
                  </span>

                  <div>
                    <p className="mb-3 font-mono text-[9px] tracking-[.12em] text-[#929aff]">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-.065em] transition-transform duration-300 
                    group-hover:translate-x-1 sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 font-mono text-[9px] text-neutral-500">
                      {project.year}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 px-2 py-1.5 font-mono text-[9px] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-start-2 sm:col-start-auto">
                    <p className="text-xs leading-7 text-neutral-400 sm:text-[13px]">
                      {project.description}
                    </p>

                    <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 px-2 py-1.5 font-mono text-[9px] text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (project.github) {
                        openExternal(project.github);
                      } else {
                        scrollTo("contact");
                      }
                    }}
                    aria-label={`View ${project.name} project`}
                    className="col-start-3 row-start-1 grid h-8 w-8 place-items-center border border-white/20 
                    transition-all duration-300 group-hover:rotate-45 group-hover:border-[#2c3480] 
                    group-hover:bg-[#2c3480] sm:col-start-4"
                  >
                    <Arrow diagonal />
                  </button>
                </article>
              ))}
            </div>

            <p className="mt-6 font-mono text-[9px] leading-6 text-neutral-500">
              ADD YOUR ACTUAL REPOSITORY URLS TO THE PROJECT DATA AT THE TOP
              OF THIS FILE.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="border-y border-white/10 bg-[#101116] py-24 sm:py-32">
          <div className="mx-auto grid max-w-290 gap-12 px-5 sm:px-8 md:grid-cols-[.85fr_1.15fr] md:gap-20">
            <div data-reveal>
              <SectionLabel number="04">HOW I WORK</SectionLabel>

              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-6xl">
                Less noise.
                <span className="mt-2 block text-neutral-600">
                  More substance.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-8 text-neutral-400">
                Good software isn't only about how it looks. It's also about
                how it behaves, how it's maintained and whether it actually
                helps someone.
              </p>
            </div>

            <div className="border-t border-white/15">
              {[
                [
                  "01",
                  "Understand first",
                  "Start with the user and the problem instead of adding features without a purpose.",
                ],
                [
                  "02",
                  "Build with intention",
                  "Keep components understandable, layouts responsive and code organised.",
                ],
                [
                  "03",
                  "Learn the whole system",
                  "Understand how the interface, server, APIs and database work together.",
                ],
                [
                  "04",
                  "Improve continuously",
                  "Test edge cases, fix issues and keep learning from each implementation.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  data-reveal
                  className="grid grid-cols-[32px_1fr] gap-4 border-b border-white/15 py-6 sm:grid-cols-[42px_1fr]"
                >
                  <span className="pt-1 font-mono text-[10px] text-[#929aff]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-7 text-neutral-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={(element) => {
            sectionRefs.current.contact = element;
          }}
          className="scroll-mt-20 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-290 px-5 sm:px-8">
            <div
              data-reveal
              className="relative overflow-hidden border border-white/15 bg-[#0d0e14] p-6 sm:p-12 md:p-16"
            >
              <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#2c3480]/35 
              blur-[100px]" />

              <div className="relative">
                <SectionLabel number="05">
                  HAVE A PROJECT IN MIND?
                </SectionLabel>

                <h2 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-.08em] sm:text-7xl md:text-8xl">
                  Let's make
                  <span className="block text-[#858df1]">
                    something useful.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-8 text-neutral-400">
                  I'm interested in developer opportunities, meaningful
                  projects and connecting with people who care about building
                  good software.
                </p>

                <button
                  onClick={() => {
                    window.location.href = `mailto:${EMAIL}`;
                  }}
                  className="group mt-8 inline-flex items-center gap-4 bg-[#2c3480] px-5 py-4 text-xs font-semibold 
                  transition-all duration-300 hover:-translate-y-1 hover:bg-[#3a46a5]"
                >
                  Start a conversation
                  <Arrow diagonal />
                </button>

                <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-6 
                sm:flex-row sm:items-center">
                  <button
                    onClick={copyEmail}
                    className="flex max-w-full items-center gap-3 break-all text-left text-xs text-neutral-300 
                    transition-colors hover:text-[#929aff]"
                  >
                    {copied ? "✓ Email copied" : EMAIL}
                    {!copied && <Arrow diagonal />}
                  </button>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "GitHub", symbol: "GH", url: GITHUB },
                      { label: "LinkedIn", symbol: "in", url: LINKEDIN },
                    ].map((social) => (
                      <button
                        key={social.label}
                        onClick={() => openExternal(social.url)}
                        className="inline-flex items-center gap-2 border border-white/20 px-3 py-3 text-[10px] 
                        transition-colors hover:border-[#2c3480] hover:bg-[#2c3480]"
                      >
                        <span className="font-mono">{social.symbol}</span>
                        {social.label}
                        <Arrow diagonal />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-290 flex-wrap items-center justify-between gap-4 px-5 font-mono text-[9px]
         tracking-widest text-neutral-500 sm:px-8">
          <span>© 2026 CHANDRAKANT KALE</span>
          <span>DESIGNED WITH INTENTION</span>
          <button
            onClick={() => scrollTo("home")}
            className="transition-colors hover:text-white"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
