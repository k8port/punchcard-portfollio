// app/ui/Header.tsx
export default function Header() {
    return (
      <header className="bg-black text-white p-4 sticky top-0 z-50">
        <nav>
          <ul className="flex justify-around">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#competencies" className="hover:underline">
                Competencies
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  