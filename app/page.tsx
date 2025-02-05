import AboutMe from "./ui/AboutMe";
// import SkillsPanel from "./ui/Skills/SkillsPanel";
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
      <div className="col-span-6 ">
        <div className="pt-12">
          <Logo
            logo={branding}
            className="relative flex flex-col max-w-4xl mx-auto p-6 bg-pistachio/65 rounded-lg shadow-lg subtopic-text items center gap-4 w-full"
          />
        </div>
      </div>
      <div className="col-span-6">
        <div className="flex justify-center items-start p-4">
          <AboutMe
            label={bio.label}
            content={bio.content}
            className="max-w-[200px] my-8"
          />
        </div>
      </div>

      {/* About Me (Beneath Logo on Desktop, second section on Mobile) */}

      {/* SkillsPanel (Competencies) - Takes up majority of the screen width */}
      <div className="col-span-6 flex flex-col gap-4 ml-8">
        <InterimSkillsPanel />
      </div>

      {/* Projects (Full width, beneath all other sections) */}
      <div className="col-span-6 p-5">
        <Projects />
      </div>
    </>
  );
}
