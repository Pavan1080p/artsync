import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from '@/components/auth/AuthProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Artsync',
  description: 'Created with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Wrap the entire application with AuthProvider */}
        <AuthProvider>
          {/* ThemeProvider must be a child of AuthProvider to ensure access */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
