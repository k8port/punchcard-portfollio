import fs from 'fs';
import path from 'path';
import { ContentJson } from './types';

export async function getContent(): Promise<ContentJson> {
    const jsonPath = path.join(process.cwd(), "app", "data", "content.json");
    const jsonContent = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(jsonContent) as ContentJson;
}
  