// src/components/GithubRepos.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
}

const GithubRepos: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/wintervoid/repos?type=owner');
                if (!response.ok) {
                    throw new Error('Failed to fetch repos');
                }
                const data = await response.json();
                setRepos(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex">
            <Sidebar  />
        <div className="p-6 bg-ctp-base text-ctp-text rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">GitHub Repositories</h1>
            <ul className="space-y-4">
                {repos.map(repo => (
                    <li key={repo.id} className="p-4 rounded-lg shadow border border-ctp-surface1 hover:bg-ctp-surface1 transition">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ctp-blue hover:underline text-xl font-semibold"
                        >
                            {repo.name}
                        </a>
                        {repo.description && <p className="text-ctp-text mt-2">{repo.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default GithubRepos;