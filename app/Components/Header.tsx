import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div>
      <Image src="/banner.svg" alt="Gta6" width={1440} height={798} className='w-full'/>
    </div>
  )
}
