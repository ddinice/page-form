import React, { ReactNode } from 'react'
import Link from "next/link";
import ThemeSwither from '@/components/ThemeSwicher';
import { UserButton } from '@clerk/nextjs';

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-hscreen">
      <nav className="flex items-center justify-between flex-row border-b px-4 py-2">
        <div>
          <Link href={"/"}>Form</Link></div>
        <div className='flex flex-row gap-4'>
          <ThemeSwither />
          <UserButton />
        </div>
      </nav>

      <main>{children}</main>
    </div>
  )
}


export default Layout;