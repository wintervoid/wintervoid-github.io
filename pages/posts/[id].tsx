import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const Post = ({ postData }) => {
    return (
        <Layout home={true}>
            <h1>{postData.title}</h1>
            <p>{postData.date}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
};

export async function getStaticPaths() {
    // Get all posts data
    const posts = getSortedPostsData();

    // Create paths for each post based on the file names
    const paths = posts.map((post) => ({
        params: { id: post.id }, // The id corresponds to the file name (without .md)
    }));

    return { paths, fallback: false }; // Set to false for a static build
}

export async function getStaticProps({ params }) {
    const { id } = params;

    // Read the markdown file based on the id
    const fullPath = path.join(process.cwd(), 'posts', `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Convert markdown content to HTML
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            postData: {
                id,
                contentHtml,
                ...matterResult.data,
            },
        },
    };
}

export default Post;
