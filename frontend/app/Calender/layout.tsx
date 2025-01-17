import '@/app/Calender/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Sidebar} from "@/components/sidebar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div> {children} </div>
  )
}