import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-accent selection:text-white overflow-x-hidden">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-background to-background -z-10 pointer-events-none" />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
