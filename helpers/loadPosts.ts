import fs from 'fs';
import path from 'path';

export async function loadPosts() {
  const POST_FOLDER_NAME = 'posts';
  const POSTS_DIRECTORY = path.join(process.cwd(), 'public', POST_FOLDER_NAME);
  return fs.readdirSync(POSTS_DIRECTORY);
}
