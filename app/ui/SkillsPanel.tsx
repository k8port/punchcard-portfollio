import React from 'react';

export default function SkillsPanel() {
  return (
    <div className="relative w-[456px] h-[644px]">
      <div className="absolute inset-0 border-2 border-lightGreen rounded-lg shadow-punchcard">
        <div className="m-4 bg-offwhite h-[603px] rounded-lg p-6">
          <h2 className="font-lobster text-4xl text-paleMint stroke-midnight mb-6">
            Skills
          </h2>
          
          <div className="font-cormorantGaramond text-base leading-relaxed text-antiqueBlack">
            <p className="mb-4">
              {/* Sample skill content - replace with actual content */}
              Frontend Development: React, TypeScript, Next.js, Tailwind CSS
            </p>
            <p className="mb-4">
              Backend Development: Node.js, Python, Java, SQL
            </p>
            <p className="mb-4">
              Cloud & DevOps: AWS, Docker, CI/CD
            </p>
            {/* Add more skill sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
