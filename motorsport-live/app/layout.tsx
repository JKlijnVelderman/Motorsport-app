import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden md:flex w-64 flex-col border-r border-zinc-800 bg-zinc-950">
            <div className="p-4 font-bold text-lg">
              Motorsport
            </div>

            <nav className="flex-1 px-2">
              <a className="block px-3 py-2 rounded hover:bg-zinc-900">
                Dashboard
              </a>
              <a className="block px-3 py-2 rounded hover:bg-zinc-900">
                Series
              </a>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Header */}
            <header className="h-14 border-b border-zinc-800 flex items-center px-6">
              <h1 className="font-semibold">
                Motorsport Live Guide
              </h1>
            </header>

            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
