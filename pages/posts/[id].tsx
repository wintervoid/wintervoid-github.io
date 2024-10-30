// src/pages/posts/[id].tsx
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout.js';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';

const LayoutWithProps: React.FC<{ children: React.ReactNode, home?: boolean }> = Layout;

interface PostProps {
    postData: {
        title: string;
        contentHtml: string;
    };
}

const Post: React.FC<PostProps> = ({ postData }) => {
    return (
        <LayoutWithProps home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </LayoutWithProps>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};