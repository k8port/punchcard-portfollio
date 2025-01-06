// app/ui/TypewriterButtons.tsx
export default function TypewriterButtons() {
    const buttons = Array.from({ length: 10 }, (_, i) => i + 1); // [1..10]
  
    return (
      <div className="flex flex-wrap gap-4">
        {buttons.map((num) => (
          <button
            key={num}
            title={`Project ${num}`}
            className="
              group 
              relative 
              w-12 h-12 
              bg-accent1 
              border-2 
              border-black 
              rounded-full 
              font-mono 
              text-white 
              text-base 
              shadow-button 
              hover:bg-accent2
            "
          >
            {num}
            <span
              className="
                invisible 
                group-hover:visible 
                absolute 
                bottom-[-30px] 
                left-1/2 
                -translate-x-1/2 
                bg-black 
                text-white 
                text-xs 
                py-1 px-2 
                rounded 
                whitespace-nowrap
              "
            >
              Project {num}
            </span>
          </button>
        ))}
      </div>
    );
  }
  