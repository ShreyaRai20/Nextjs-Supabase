'use client'

import '../globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {useState} from 'react'

const navLinks = [
  {name: 'Register', href:'/register'},
  {name: 'Login', href:'/login'},
  {name: 'Forgot Password', href:'/forgot-password'},
]


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState('')
  const pathname= usePathname();
  return (
    <div>
      <input className= 'text-white' value={input} onChange = {(e)=> setInput(e.target.value)}></input>

      {navLinks.map((link)=>{
        const isActive = pathname ===link.href || (pathname.startsWith(link.href) && link.href != '/');
        return (
          <Link className={isActive ? 'font-bold text-orange-700': 'text-amber-200' } href = {link.href} key = {link.name}>
            {link.name}
          </Link>
          
        )
      })}
      {children}
    </div>
  )
}
