// app/ui/Header.tsx

export default function Header() {
    return (
      <header className="flex items-center justify-between px-11 py-8 bg-black text-bonewhite">
        <h1 className="text-6xl ml-11 pl-11 mt-6 font-alexBrush">K8 Portalatin</h1> 
        <nav className="flex justify-end mr-8 mt-6 font-inconsolata text-sm"> 
          <ul className="flex justify-around space-x-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skillset" className="hover:underline">
                Skillset
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#open-source" className="hover:underline">
                Open Source
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  