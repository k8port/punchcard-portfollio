import fs from 'fs';
import path from 'path';
import { ContentJson, DreyfusLevel, Subtopic, SubtopicBlock } from './types';


export async function getContent(): Promise<ContentJson> {
    const jsonPath = path.join(process.cwd(), "app", "data", "content.json");
    const jsonContent = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(jsonContent) as ContentJson;
}

export function isSubtopicBlock(item: Subtopic | SubtopicBlock): item is SubtopicBlock {
    return (item as SubtopicBlock).iconList !== undefined;
}


/**
 * Converts string to DreyfusLevel enum
 * If input invalid, returns undefined
 */
export function drefusLevelFromString(levelStr?: string): DreyfusLevel | undefined {
    if (!levelStr) return undefined;

    const enumKeys = Object.keys(DreyfusLevel).filter(k => isNaN(Number(k)));
    const matchedKey = enumKeys.find(key => key.toLowerCase() === levelStr.toLowerCase());
    if (!matchedKey) return undefined;

    const numericValue = DreyfusLevel[matchedKey as keyof typeof DreyfusLevel];
    return typeof numericValue === 'number' ? numericValue : undefined;
}

