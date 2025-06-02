import { Navbar } from "../components";

export default function LayoutPublic(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1>Test</h1>
        {children}
      </main>
    </>
  )
}
