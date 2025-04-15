// components/Layout.jsx
export default function Layout({ children }) {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 px-6 py-12 lg:px-24 font-body">
            {children}
        </main>
    );
}
