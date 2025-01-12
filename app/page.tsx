import PunchCard from "./ui/PunchCard";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kate Portalatin | Software Engineer</title>
        <meta name="description" content="Kate Portalatin's portfolio build using Next.js 13, Tailwind CSS, and TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="k8port | Kate Portalatin" />
        <meta property="og:description" content="Software portfolio build using Next.js 13." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://k8port.github.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-y-auto">
        {/* Punch Card Section */}
        <PunchCard>
          <h1 className="font-lobster font-bold text-3xl text-left text-paleMint my-2 pb-4 text-stroke-midnight">About Me</h1>
          <div className="font-crimsonText text-sm leading-relaxed text-black mb-2">
            <p className="mb-3">I am a full-stack Software Engineer with strong intuition and a solid design sense. I combine 10+ years of experience building robust, user-centric enterprise systems
              and 5 years in the design field to deliver high-quality, impactful software solutions.  
              </p>
            <p className="mb-3">This unique perspective enables me to craft enterprise-grade systems rooted in thoughtful UX principles
              and optimized for security, performance, and usability. Recently, I developed an RBAC navigation menu for a multi-tenant supply chain SaaS platform, empowering over 1,000 customers to 
              tailor role-based access control while reducing system vulnerabilities and simplifying architecture complexity.</p>
            <p className="mb-3">Collaboration and curiosity are central to my work. I thrive in dynamic environments alongside like-minded individuals, to solve complex problems,
                streamline workflows, and drive innovation. As a mentor and lifelong learner, I value humility and transparency, recognizing that mutual
              accountability is the cornerstone of success. I&apos;m passionate about asking the right questions and embracing diverse perspectives to uncover
              new solutions.</p>
            <p className="mb-3">I am proficient in React, TypeScript, Python, Java, Node.js,SQL, and more. I am adept at building secure, event-driven services,
              APIs, microservices, and distributed systems, leveraging cloud environments and modern DevSecOps practices to deliver scalable and maintainable
              solutions.</p>
          </div>
        </PunchCard>
        {/* Typewriter Buttons Section */}
        {/* <section className="flex justify-center mb-8 mt-8">
          <TypewriterButtons />
        </section>

        {/* Loom Section */}
        {/* <LoomSection id="experience" title="Experience">
          <p className="leading-relaxed"> */}
            {/* Work Experience */}
          {/* </p>
        </LoomSection> */}

        {/* Loom Section */}
        {/* <LoomSection id="competencies" title="Core Competencies">
          <p className="leading-relaxed"> */}
            {/* Skills outline */}
          {/* </p>
        </LoomSection> */}

        {/* Loom Section */}
        {/* <LoomSection id="open-source" title="Open Source Projects">
          <p className="leading-relaxed"> */}
            {/* Contributions to open source Projects */}
          {/* </p>
        </LoomSection> */} 
      </div>
    </>
  )
}

