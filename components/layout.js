// src/components/layout.js
import React from 'react';

/**
 * @param {{ children: React.ReactNode, home?: boolean }} props
 */
export default function Layout({ children, home }) {
    return (
        <div className={`layout ${home ? 'home' : ''}`}>
            {children}
        </div>
    );
}