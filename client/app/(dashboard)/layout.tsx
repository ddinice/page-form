import React, { ReactNode, Suspense } from 'react'
import Link from "next/link";
import ThemeSwither from '@/components/ThemeSwicher';
import { UserButton, ClerkLoading, SignedIn } from '@clerk/nextjs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-hscreen">
      <nav className="flex items-center justify-between flex-row border-b px-4 py-2 min-h-[70px]">
        <div>
          <Link href={"/"}>Form</Link></div>
        <div className='flex flex-row gap-4 justify-content items-center'>
          <ThemeSwither />
          <ClerkLoading>
            <Avatar className="w-[28px] h-[28px]">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </ClerkLoading>
          <UserButton />
        </div>
      </nav>

      <main>{children}</main>
    </div>
  )
}


export default Layout;