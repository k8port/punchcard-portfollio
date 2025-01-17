import React from 'react';
import CardCard from './CardCard';
import { Topic, Subtopic, SubtopicBlock } from '../lib/types';


interface SkillsPanelProps {
  skills: {
    title: string;
    skills: Topic[];
  }
}

// Main skills panel component: loops over top-level topics
export default function SkillsPanel({ 
  skills,
  className,
  floatSide
 }: SkillsPanelProps & { className?: string, floatSide?: "left" | "right" }) {
  return (
    <>
      <CardCard floatSide={floatSide} className={className}>
        <h1 className="font-lobster text-2xl text-left text-paleMint my-2 
          pb-4 sm:text-3xl text-stroke-midnight">
            {skills.title}
        </h1>
        {skills.skills.map((topicData, idx) => {
          return <TopicBlock key={idx} topicData={topicData} />
        })}
      </CardCard>
    </>
  )
}

function TopicBlock({ topicData }: { topicData: Topic }) {
  const { topic, topicList } = topicData;

  return (
    <section className="mb-2">
      <h2 className="font-abrilFatface text-bismol600 font-extralight text-sm">{topic}</h2>

      {topicList.map((subtopic, idx) => (
        <SubtopicRecursive key={idx} data={subtopic} indentLevel={1} />
      ))}
    </section>
  );
}

function isSubtopicBlock(item: Subtopic | SubtopicBlock): item is SubtopicBlock {
  return (item as SubtopicBlock).subtopic !== undefined;
}

function SubtopicRecursive({ 
  data, 
  indentLevel,
}: { 
  data: Subtopic | SubtopicBlock;
  indentLevel: number;
}) {
  // if it's a leaf node (SubtopicBlock) show iconList + level
  if (isSubtopicBlock(data)) {
    const { subtopic, iconList, level } = data;
    debugger;
    return (
      <div className={`ml-${indentLevel * 2} mt-2 font-robotoMono text-xs text-antiqueBlack/50`}>
        <strong>{subtopic}</strong>
        {level && ` - ${level}`}
        {iconList?.length > 0 && (
          <span className="ml-2">
            {iconList.map((iconName, i) => (
              <span key={i}>
                {iconName}
              </span>
            ))}
          </span>
        )}
      </div>
    );
  }

  // otherwise it's a non-leaf node (Subtopic)
  const { subtopic, subtopicList } = data;

  return (
    <div className={`ml-${indentLevel * 2} mt-2`}>
      {/* If there's a subtopic name, display as small heading */}
      {subtopic && (
        <h3 className="font-cormorantGaramond font-semibold text-base">{subtopic}</h3>
      )}
      {/* subtopic list could be Suptopic[] or SuptopicBlock[] */}
      {Array.isArray(subtopicList) && 
        subtopicList.map((child, idx) => (
          <SubtopicRecursive
            key={idx}
            data={child}
            indentLevel={indentLevel + 1}
          />
        ))}
    </div>
  );
}
