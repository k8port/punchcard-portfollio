import AboutMe from "./ui/AboutMe";
import Projects from "./ui/Projects";
import Logo from "./ui/Logo";
import { getContent } from "./lib/utils";
import InterimSkillsPanel from "./ui/InterimSkillsPanel";
import styles from "./styles/modules/page.module.css";

export default async function HomePage() {
  const content = await getContent();
  const branding = content.sections.branding;
  const bio = content.sections.aboutMe;
  // const competencies = content.sections.skillsPanel;

  return (
    <>
      {/* Logo (Top-left on Desktop, first section on Mobile) */}
      <section className="col-span-5 mt-12">
        <div className="pt-12">
          <Logo
            logo={branding}
            className={`${styles.pageContainer}
              flex flex-row 
              items-center justify-center 
              p-4
            `}
          />
        </div>
      </section>
      {/* SkillsPanel span cols 5-12, top right */}
      <section className="col-span-7 mt-24">
        <div className="flex flex-col gap-4">
          <InterimSkillsPanel className={`${styles.pageContainer}`} />
        </div>
      </section>

      {/* Bottom Row (Desktop) */}
      {/* Projects - bottom left */}
      <section className="col-span-6 flex flex-col gap-4 ml-16">
        <Projects className="p-4 my-8 w-full" />
      </section>

      {/* About Me - bottom right */}
      <section className="col-span-6 p-5">
        <div className="flex justify-center items-start p-4">
          <AboutMe
            label={bio.label}
            className="p-4 my-8"
            content={bio.content}
          />
        </div>
      </section>
    </>
  );
}
