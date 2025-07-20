import Navbar from '../../components/Navbar'


export const metadata = {
  title: 'Home | BuddyBot',
  description: 'Your AI-powered assistant homepage',
}

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 px-4 py-6 max-w-6xl mx-auto">
        {children}
      </main>
    </>
  )
}
