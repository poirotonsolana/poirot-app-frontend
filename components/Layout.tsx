"use client"
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 w-full p-4 overflow-auto">
                {children}
            </div>
        </div>
    );
};

export default Layout;
