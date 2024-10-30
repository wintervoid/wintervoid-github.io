// src/components/Layout.d.ts
import React from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    home?: boolean; // Optional prop
}

declare const Layout: React.FC<LayoutProps>;

export default Layout;