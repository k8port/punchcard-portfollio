import React from 'react';


const Projects: React.FC = () => {
  return <div className="bg-paleMint h-full w-full">Projects</div>
}

export default Projects;

// export default function Projects() {
//   const projectKeys = [1, 2, 3, 4, 5, 6];

//   return (
//     <div className="relative w-[875px] h-[200px]">
//       <div className="absolute inset-0 border-2 border-lightGreen rounded-lg shadow-punchcard">
//         <h2 className="font-lobster text-5xl text-paleMint stroke-midnight text-center my-4">
//           Projects
//         </h2>
        
//         <div className="flex justify-center gap-4 mt-8">
//           {projectKeys.map((key) => (
//             <div key={key} className="relative w-[89px] h-[87px]">
//               <div className="absolute inset-0 bg-vanilla border border-ivory rounded-full shadow-punchcard" />
//               <div className="absolute inset-0 border border-antiqueBlack rounded-full shadow-punchcard" />
//               <span className="absolute inset-0 flex items-center justify-center font-cormorantGaramond text-5xl font-bold text-midnight stroke-midnight">
//                 {key}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
