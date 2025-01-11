import Image from "next/image";
import PunchCard from "./ui/PunchCard";
import TypewriterButtons from "./ui/TypewriterButtons";
import LoomSection from "./ui/LoomSection";

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Punch Card Section */}
        <PunchCard>
          <h1 className="font-lobster font-bold text-3xl text-left text-paleMint my-2 pb-4 text-stroke-midnight">About Me</h1>
          <div className="font-crimsonText text-sm leading-relaxed text-black mb-2">
            <p className="mb-3">I am a results-driven Software Engineer with 10+ years of experience building robust, scalable, and user-centric enterprise systems.
              With expertise spanning intuitive front-end interfaces, resilient back-end systems, legacy modernizations, and greenfield applications,
              I consistently deliver high-quality, impactful software solutions.</p>
            <p className="mb-3">My background in design gives me a unique perspective, enabling me to craft enterprise-grade systems rooted in thoughtful UX principles
              and optimized for security, performance, and usability. Recently, I developed an RBAC navigation menu for a multi-tenant SaaS platform
              in the supply chain industry, empowering over 1,000 customers to tailor role-based access control while reducing system vulnerabilities
              and simplifying architecture complexity.</p>
            <p className="mb-3">Collaboration and curiosity are central to my work. I thrive in dynamic environments alongside like-minded professionals, solving complex problems,
              streamlining workflows, and driving innovation. As a mentor and lifelong learner, I value humility and transparency, recognizing that mutual
              accountability is the cornerstone of success. I'm passionate about asking the right questions and embracing diverse perspectives to uncover
              new solutions.</p>
            <p className="mb-3">My technical expertise includes React, TypeScript, Node.js, Python, Java, SQL, and more. I am adept at building secure, event-driven services,
              APIs, microservices, and distributed systems, leveraging cloud environments and modern DevSecOps practices to deliver scalable and maintainable
              solutions.</p>
          </div>
        </PunchCard>
        {/* Typewriter Buttons Section */}
        <section className="flex justify-center mb-8 mt-8">
          <TypewriterButtons />
        </section>

        {/* Loom Section */}
        <LoomSection id="experience" title="Experience">
          <p className="leading-relaxed">
            {/* Work Experience */}
          </p>
        </LoomSection>

        {/* Loom Section */}
        <LoomSection id="competencies" title="Core Competencies">
          <p className="leading-relaxed">
            {/* Skillset outline */}
          </p>
        </LoomSection>

        {/* Loom Section */}
        <LoomSection id="open-source" title="Open Source Projects">
          <p className="leading-relaxed">
            {/* Contriubtions to open source Projects */}
          </p>
        </LoomSection>
      </div>
    </>
  )
}

