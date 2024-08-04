import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='bg-dark-100 p-4'>
        <div className='pl-2 pr-2 flex'>
            <p className='font-spaceGrotesk text-white text-[2rem] font-bold glow'>Fort<span className='text-primary-dark blue-glow'>Code</span></p>
            <div className={'flex-grow'} />
            <Link href={'/docs'}>
                <p className={'font-spaceGrotesk text-primary-dark text-[2rem] font-bold'}>API</p>
            </Link>
        </div>
    </div>
  )
}

export default NavBar
