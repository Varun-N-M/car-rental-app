import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'


export const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='max-width flex-between px-6 py-4 sm:px-16'>
        <Link href="/">
          <Image src={`/logo.svg`} alt='logo' width={120} height={20} className='object-contain'/>
        </Link>
        <CustomButton title='Sign in' customStyle="min-w-[130px] bg-[#2B59FF] xl:bg-white rounded-full " textStyle="text-white xl:text-[#2B59FF] "/>
      </nav>
    </header>
  )
}
