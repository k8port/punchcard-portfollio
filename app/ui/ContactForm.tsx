import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-[414px] h-[276px]">
      <div className="bg-industrialGray border border-deadwhite rounded-lg shadow-punchcard p-6">
        <div className="bg-offwhite h-4 mb-4" />
        
        <h2 className="font-mono text-xl font-bold text-lightGreen mb-6">
          Contact me:
        </h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="font-mono text-xl font-bold text-lightGreen">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-[264px] h-[29px] bg-industrialGray border border-pearl rounded"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-xl font-bold text-lightGreen">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-[264px] h-[29px] bg-industrialGray border border-pearl rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
