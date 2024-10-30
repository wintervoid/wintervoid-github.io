// components/Layout.js
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="container">
            <div className="mainContainer flex">
                <aside className="w-64 bg-ctp-surface p-4">
                    <Sidebar />
                </aside>
                <main className="main-content flex-1">{children}</main>
            </div>
        </div>
    );
}