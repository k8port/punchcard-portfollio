

export interface ContentJson {
    aboutMe: {
        title: string;
        content: Array<{
            p: {
               text: Array<{
                sentence: string;
                order: number;
               }>;
               className: string;
            };
        }>;
    };
    skillsPanel: {
        title: string;
        component: string;
        props: {
            floatSide: string;
            className: string;
        };
        skills: Topic[];
    };
}


// "Topic a topmost level of skill"
export interface Topic {
    topic: string;
    topicList: Subtopic[];
}

export interface Subtopic {
    subtopic?: string;
    subtopicList?: Subtopic[] | SubtopicBlock[];
}

export interface SubtopicBlock {
    subtopic: string;
    iconList: string[];
    level?: DreyfusLevel;
}


// Dreyfus Model of Skill Acquisition
export enum DreyfusLevel {
    Novice = 0,
    AdvancedBeginner = 1,
    Competent = 2,
    Proficient = 3,
    Expert = 4,
}

export const DreyfusLevelBadgeType = {
    [DreyfusLevel.Novice]: 'violet',
    [DreyfusLevel.AdvancedBeginner]: 'blue',
    [DreyfusLevel.Competent]: 'green',
    [DreyfusLevel.Proficient]: 'yellow', 
    [DreyfusLevel.Expert]: 'red', 
}