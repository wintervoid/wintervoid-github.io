const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get all post IDs for generating paths
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    const paths = fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ''),
        },
    }));

    console.log('Generated Paths:', paths); // Log paths for debugging
    return paths;
}

// Get post data by ID
export function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id,
        ...matterResult.data,
        contentHtml: matterResult.content,
    };
}
