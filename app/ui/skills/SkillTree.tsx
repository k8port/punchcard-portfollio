import React from 'react';
import { Topic, Subtopic, SubtopicBlock } from '../../lib/types';

function isSubtopicBlock(item: Subtopic | SubtopicBlock): item is SubtopicBlock {
    return (item as SubtopicBlock).subtopic !== undefined;
}

interface SkillTreeProps {
    topics: Topic[]; // top-level skill categories
}

const SkillTree: React.FC<SkillTreeProps> = ({ topics }) => {
    return (
        <div className="space-y-4">
            {topics.map((topicData, idx) => (
                <TopicBlock key={idx} topicData={topicData} />
            ))}
        </div>
    );
};

function TopicBlock({ topicData }: { topicData: Topic }) {
    const { topic, topicList } = topicData;

    return (
        <section className="mb-4">
            <h2 className="font-abrilFatface text-misspiggy_600 font-extralight text-sm">{topic}</h2>
        
             {/* Subtopics */}
             {topicList.map((subtopic, idx) => (
                <SubtopicRecursive key={idx} data={subtopic} indentLevel={1} />
             ))}
        </section>
    );
}

function SubtopicRecursive({ data, indentLevel }: { data: Subtopic | SubtopicBlock, indentLevel: number }) {
    // leaf node
    if (isSubtopicBlock(data)) {
        const { subtopic, iconList, level } = data;
        return (
            <div className={`flex items-center space-x-2 ml-${indentLevel * 4}`}>
                <h4 className="font-cormorantGaramond text-sm text-antiqueblack/45">{subtopic}</h4>
                {level && <span className="ml-2 text-industrialgray">- {level}</span>}
                {iconList && iconList.length > 0 && (
                    <span className="ml-2">
                        {iconList.map((iconName, i) => (
                            <span className="inline-block mr-1" key={i}>
                                {/* TODO: Add icon */}
                                {iconName}
                            </span> 
                        ))}
                    </span>
                )}
            </div>
        )
    }

    // non-leaf node
    const { subtopic, subtopicList } = data;
    return (
        <div className={`flex items-center space-x-2 ml-${indentLevel * 4}`}>
            <h4 className="font-cormorantGaramond text-sm text-antiqueBlack/45">{subtopic}</h4>
                {Array.isArray(subtopicList) && subtopicList.map((child, idx) => (
                    <SubtopicRecursive key={idx} data={child} indentLevel={indentLevel + 1} />
                ))}
        </div>
    );
}

export default SkillTree;