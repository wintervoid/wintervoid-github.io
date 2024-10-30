// app/blog/page.js
import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the path as necessary
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <a href={`/posts/${id}`}>{title}</a>
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
