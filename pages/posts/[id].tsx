// pages/posts/[id].tsx
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Post({ postData }) {
    return (
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <p>{postData.date}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(); // Get all possible post IDs
    console.log('Generated paths:', paths); // Debugging: check generated paths
    return {
        paths,
        fallback: false, // Only generate paths for existing posts
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
};
