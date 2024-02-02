import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal'
import { FaYoutube, FaInstagram} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='bg-black w-full h-[238px] flex'>
        <Image className='justify-start items-center ml-[200px]' src="/Lo.svg" alt="Rockstar" width={60} height={55.52}/>
      <div className='flex items-center left-[40px] relative'>
        <Modal className='text-white left-3 bottom-8'>Contact</Modal>
        <Link href="/about" className='text-white right-[100px]'>About</Link>
        <div className='flex ml-[1100px]'>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaYoutube className='text-white w-6 h-6'/></Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaInstagram className='text-white ml-[20px] w-6 h-6'/></Link>
        </div>
      </div>
    </div>
  )
}
