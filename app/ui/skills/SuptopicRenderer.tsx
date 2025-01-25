// import React from "react";
// import { Subtopic, SubtopicBlock } from "../../lib/types";
// import { drefusLevelFromString, isSubtopicBlock } from "../../lib/skillUtills";
// import { LevelBadge } from "../badge/LevelBadge";

// interface SuptopicRendererProps {
//   item: Subtopic | SubtopicBlock;
//   indentLevel?: number;
// }

// /**
//  * A recursive renderer that displays either:
//  * - A subtopic (non-leaf node - includes subtopic + subtopicList)
//  * - A subtopic block (leaf node - includes iconList + level)
//  */
// export default function SuptopicRenderer({ item, indentLevel = 0 }: SuptopicRendererProps) {
//     const marginValue = indentLevel * 16;
    
//     if (isSubtopicBlock(item)) {
//         const { subtopic, subtopicText, level } = item as SubtopicBlock;

//         const levelValue = drefusLevelFromString(level?.toString());

//         return (
//             <div className={`ml-[${marginValue}px] subtopic-text`}>
//                 <ul>
//                     <li>
//                         <p>
//                             <span className="font-mono font-thin">{subtopic}</span>
//                             {subtopicText && (
//                             <span>{subtopicText}</span>
//                         )}
//                         </p>
//                     </li>
//                 </ul>
//                 {levelValue !== undefined && (
//                     <>
//                         {' - '}
//                         <LevelBadge dreyfusLevel={levelValue} />
//                     </>
//                 )}
//             </div>
//         )
//     } else {
//         const { subtopic, subtopicList } = item as Subtopic;

//         return (
//             <div className={`ml-[${marginValue}px] mt-2`}>
//                 {subtopic && (
//                     <h4 className="text-base font-bold">{subtopic}</h4>
//                 )}

//                 {subtopicList?.map((child, idx) => (
//                     <SuptopicRenderer key={idx} item={child} indentLevel={indentLevel + 1} />
//                 ))}
                
//             </div>
//         )
//     }
    
// }
