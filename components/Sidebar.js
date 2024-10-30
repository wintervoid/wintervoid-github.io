// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul>
                <li className="mb-2">
                    <Link href="/" className="text-ctp-text hover:underline">
                        Home
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/blog" className="text-ctp-text hover:underline">
                        Blog
                    </Link>
                </li>
            </ul>
        </div>
    );
}