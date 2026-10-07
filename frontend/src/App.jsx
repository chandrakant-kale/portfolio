import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Clean India",
    type: "Civic Technology",
    description:
      "A waste-management platform connecting citizens with cleaning staff through QR-based collection, rewards and digital wallet features.",
    stack: ["React", "Tailwind", "Express", "MongoDB"],
  },
  {
    number: "02",
    title: "Expense Tracker",
    type: "Web Application",
    description:
      "A focused expense-management interface with persistent local data, filtering and a clean dashboard experience.",
    stack: ["React", "JavaScript", "LocalStorage"],
  },
  {
    number: "03",
    title: "Notes Workspace",
    type: "Productivity",
    description:
      "A responsive notes experience with search, pinned notes, delete actions and persistent browser storage.",
    stack: ["React", "Hooks", "CSS"],
  },
];

const skills = [
  {
    icon: "</>",
    title: "Frontend",
    description: "HTML · CSS · JavaScript · React",
  },
  {
    icon: "◈",
    title: "UI Engineering",
    description: "Tailwind CSS · Responsive UI · UX",
  },
  {
    icon: "{}",
    title: "Backend",
    description: "Node.js · Express · MongoDB · PostgreSQL",
  },
  {
    icon: ">_",
    title: "Workflow",
    description: "Git · GitHub · Vite · VS Code",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080a0d] text-white selection:bg-orange-500 selection:text-white">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080a0d]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/10 font-bold text-orange-400 transition duration-300 group-hover:border-orange-400 group-hover:bg-orange-500/20">
              C
            </span>

            <span className="text-lg font-bold tracking-[0.2em]">
              CHAND<span className="text-orange-400">.</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#about"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium transition hover:border-orange-400/40 hover:bg-orange-500/10 md:flex"
          >
            Let's talk
            <span className="text-orange-400">↗</span>
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`border-t border-white/[0.06] bg-[#080a0d] px-5 transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 py-5 opacity-100"
              : "max-h-0 overflow-hidden py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/[0.04] hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/[0.04] hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/[0.04] hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/[0.04] hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
          {/* Hero content */}
          <div>
            {/* Status */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-orange-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
              </span>

              Available for frontend opportunities
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              I build{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                digital experiences
              </span>{" "}
              that feel as good as they work.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              I'm Chand, a frontend-focused developer who turns ideas into
              fast, responsive and polished web experiences with modern
              JavaScript.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
              >
                Explore my work
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                Contact me
                <span className="text-orange-400">@</span>
              </a>
            </div>

            {/* Meta */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="text-orange-400">●</span>
                India
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span>Frontend Developer</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto flex h-[480px] w-full max-w-[480px] items-center justify-center lg:h-[580px]">
            {/* Decorative circles */}
            <div className="absolute h-[360px] w-[360px] rounded-full border border-orange-500/10 sm:h-[430px] sm:w-[430px]" />

            <div className="absolute h-[270px] w-[270px] rounded-full border border-white/[0.07] sm:h-[340px] sm:w-[340px]" />

            <div className="absolute h-[220px] w-[220px] rounded-full bg-orange-500/10 blur-[90px]" />

            {/* Code card */}
            <div className="absolute right-0 top-8 z-20 rounded-2xl border border-white/10 bg-[#111419]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-3">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              <code className="text-xs text-zinc-400">
                <span className="text-orange-400">&lt;</span>
                developer
                <span className="text-orange-400"> /&gt;</span>
              </code>
            </div>

            {/* Image glow */}
            <div className="absolute h-[310px] w-[240px] rounded-[45%] bg-orange-500/20 blur-[70px]" />

            {/* Portrait */}
            <div className="relative z-10 flex h-[390px] w-[270px] items-end justify-center overflow-hidden rounded-[45%] border border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:h-[470px] sm:w-[320px]">
              <img
                src="/profile.png"
                alt="Chand wearing a dark professional suit"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-14 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111419]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-2">
              <span className="text-xl text-orange-400">✦</span>

              <div>
                <p className="text-sm font-semibold text-white">
                  Clean code.
                </p>

                <p className="text-xs text-zinc-500">
                  Thoughtful interfaces.
                </p>
              </div>
            </div>

            {/* Number */}
            <span className="absolute bottom-3 right-5 text-7xl font-black tracking-tighter text-white/[0.035] sm:text-8xl">
              01
            </span>
          </div>
        </section>

        {/* ================= TICKER ================= */}
        <section className="overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto flex max-w-7xl items-center gap-7 overflow-hidden px-5 py-5 whitespace-nowrap text-xs font-semibold tracking-[0.25em] text-zinc-500 sm:px-8 lg:px-10">
            <span>REACT</span>
            <span className="text-orange-500">✦</span>

            <span>JAVASCRIPT</span>
            <span className="text-orange-500">✦</span>

            <span>TAILWIND CSS</span>
            <span className="text-orange-500">✦</span>

            <span>NODE.JS</span>
            <span className="text-orange-500">✦</span>

            <span>MONGODB</span>
            <span className="text-orange-500">✦</span>

            <span>REACT</span>
            <span className="text-orange-500">✦</span>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mb-12 text-xs font-semibold tracking-[0.25em] text-orange-400">
            / 01 — ABOUT
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Developer by craft.
              <br />
              <span className="text-zinc-600">Builder by nature.</span>
            </h2>

            <div>
              <p className="text-xl leading-8 text-zinc-300">
                I enjoy taking a blank screen and turning it into something
                useful, intuitive and memorable.
              </p>

              <p className="mt-6 leading-7 text-zinc-500">
                My focus is frontend development: semantic HTML, modern CSS,
                JavaScript and React. I also work comfortably across the stack
                when a project needs APIs, databases or authentication.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-b border-orange-500/40 pb-1 text-sm font-medium text-orange-400 transition hover:border-orange-400"
              >
                Let's build something
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="border-y border-white/[0.06] bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
            <div className="mb-12 text-xs font-semibold tracking-[0.25em] text-orange-400">
              / 02 — TOOLKIT
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                The tools behind
                <br />
                <span className="text-zinc-600">the interface.</span>
              </h2>

              <p className="max-w-xl leading-7 text-zinc-500">
                Focused on fundamentals, performance and interfaces that work
                across devices.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <article
                  key={skill.title}
                  className="group rounded-3xl border border-white/[0.07] bg-[#0d1014] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#11151a]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/[0.07] font-mono text-sm text-orange-400 transition group-hover:bg-orange-500/10">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">{skill.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {skill.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36"
        >
          <div className="mb-12 text-xs font-semibold tracking-[0.25em] text-orange-400">
            / 03 — SELECTED WORK
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Things I've
              <br />
              <span className="text-zinc-600">built.</span>
            </h2>

            <p className="max-w-xl leading-7 text-zinc-500">
              Selected projects showing how I approach product thinking, UI
              and implementation.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid gap-6 py-10 transition hover:bg-white/[0.015] md:grid-cols-[70px_1fr_50px]"
              >
                <div className="font-mono text-sm text-zinc-600">
                  {project.number}
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                    {project.type}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-orange-400 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#"
                  aria-label={`View ${project.title}`}
                  className="flex h-11 w-11 items-center justify-center self-start rounded-full border border-white/10 text-lg text-zinc-400 transition group-hover:border-orange-500/40 group-hover:bg-orange-500 group-hover:text-black"
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="border-t border-white/[0.06] bg-gradient-to-b from-orange-500/[0.04] to-transparent"
        >
          <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
            <div className="text-xs font-semibold tracking-[0.25em] text-orange-400">
              / 04 — CONTACT
            </div>

            <div className="mt-12 max-w-4xl">
              <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
                Have a project
                <br />
                <span className="text-zinc-600">in mind?</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-500">
                I'm open to interesting products, frontend roles and
                collaborations.
              </p>

              <a
                href="mailto:hello@chand.dev"
                className="mt-10 inline-flex items-center gap-3 border-b border-orange-500/40 pb-2 text-lg font-medium text-white transition hover:border-orange-400 hover:text-orange-400"
              >
                hello@chand.dev
                <span className="text-orange-400">↗</span>
              </a>

              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-400 transition hover:border-orange-500/30 hover:text-white"
                >
                  <span className="mr-2 text-orange-400">GH</span>
                  GitHub
                </a>

                <a
                  href="#"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-400 transition hover:border-orange-500/30 hover:text-white"
                >
                  <span className="mr-2 text-orange-400">in</span>
                  LinkedIn
                </a>

                <a
                  href="mailto:hello@chand.dev"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-400 transition hover:border-orange-500/30 hover:text-white"
                >
                  <span className="mr-2 text-orange-400">@</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-zinc-600 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <span>© 2026 CHAND.</span>

          <span>Designed & built with intention.</span>

          <a
            href="#top"
            className="transition hover:text-orange-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;