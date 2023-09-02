import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const postFileNames = fs.readdirSync(postsDirectory);

  console.log(postFileNames);

  const sortedPosts = postFileNames
    .map((postFileName) => getPostData(postFileName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return sortedPosts;
}

export function getPostData(postName) {
  const slug = postName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, postName);
  const fileData = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileData);

  return { slug, ...data, content };
}
