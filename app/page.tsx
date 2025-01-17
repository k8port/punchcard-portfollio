import AboutMe from "./ui/AboutMe";
import SkillsPanel from "./ui/SkillsPanel";
import ContactForm from "./ui/ContactForm";
import Projects from "./ui/Projects";
import Logo from "./ui/Logo";
import { getContent } from "./lib/utils";


export default async function HomePage() {
  const content = await getContent();
  const skills = content.skillsPanel;
  const bio = content.aboutMe;

  return (
    <div className="flex flex-col w-full">
      
      {/* 
        On desktop (md+):
          - Left: SkillsPanel + ContactForm stacked vertically
          - Center: Logo
          - Right: AboutMe
          On smaller screens (md-):
          - All components stack vertically
          - Logo is hidden
      */}

        <section className="flex flex-col md:flex-row md:flex-nowrap items-start justify-center gap-8 p-4">
          <div className="flex flex-col w-full md:w-1/3 gap-4">
            <SkillsPanel skills={skills} />
            <ContactForm />
          </div>
          <div className="flex justify-center w-full md:w-1/3">
            <Logo />
          </div>
          <div className="w-full md:w-1/3">
            <AboutMe bio={bio} floatSide="right" className="no-x-scroll" />
          </div>
        </section>

        {/* Projects along bottom of page*/}
        <section className="p-4">
          <Projects />
        </section>
    </div>
  ); 
}