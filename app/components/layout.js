"use client"

export function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 p-4 text-white">
        <h1>My Next.js App</h1>
      </header>
      <main className="h-screen w-screen">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white">
        &copy; 2023 My Next.js App
      </footer>
    </div>
  );
}