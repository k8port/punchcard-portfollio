import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Logo from "./ui/Logo";
import { getContent } from "./lib/utils";
import InterimSkillsPanel from "./ui/skills/InterimSkillsPanel";

export default async function HomePage() {
  const content = await getContent();
  const branding = content.sections.branding;
  // const competencies = content.sections.skillsPanel;
  const bio = content.sections.aboutMe;

  return (
    <>
      {/* Logo (Top-left on Desktop, first section on Mobile) */}
      <section className="col-span-3 col-start-1 row-span-2">
        <Logo
          logo={branding}
          className="bg-babypowder/65 rounded-lg shadow-lg subtopic-text 
          flex flex-col items-center my-8 p-4"
        />
      </section>

      {/* About Me span cols 1-4, span 5 rows */}
      <section className="col-span-7 col-start-5 row-start-5 row-span-6">
        <AboutMe
          label={bio.label}
          content={bio.content}
          className="aspect-[3/5] my-8 p-2"
        />
      </section>

      {/* Projects spans right side of page */}
      <section className="col-span-4 col-start-1 row-start-5">
        <div className="my-8 p-4">
          <Projects />
        </div>
      </section>

      {/* SkillsPanel span cols 5-12, span 4 rows */}
      <section className="col-span-8 col-start-4 row-start-1 row-span-6">
        <div className="col-start-5 row-start-1">
          <InterimSkillsPanel />
        </div>
      </section>
    </>
  );
}
