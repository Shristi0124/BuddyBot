import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sign In | BuddyBot',
}

export default function LoginLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark min-h-screen flex items-center justify-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
