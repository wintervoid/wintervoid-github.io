// pages/index.js
import { useEffect } from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';

const name = 'wintervoid';

export default function Home() {
    useEffect(() => {
        document.body.classList.add('frappe');
        return () => {
            document.body.classList.remove('frappe');
        };
    }, []);

    const home = true; // Define home variable here

    return (
        <Layout home={home}>
            <div className="flex flex-1">
                <aside className="w-64 bg-ctp-surface p-4">
                </aside>
                <main className="flex-1 p-5 bg-ctp-mantle text-ctp-text">
                    <section className="about-me">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p className="mt-2">
                            Welcome to my portfolio! I'm {name}, a passionate developer who enjoys videogames, programing in rust, and hates web development with a burning passion!
                        </p>
                    </section>
                </main>
            </div>
            {!home && (
                <div className="mt-5">
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </Layout>
    );
}