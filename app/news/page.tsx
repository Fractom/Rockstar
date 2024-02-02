import React from 'react'
import Navbar from '../Components/NavBar';
import Image from 'next/image';
import Footer from '../Components/Footer';
const News=()=>{
  return (
    <div>
      <Navbar/>
      <div className='flex bg-gray-800 h-[1080px]'>
      <div className='w-[600px] h-[580px] bg-black mt-10 ml-[700px] '>
        <Image  className="ml-[10px] w-[580px]" src="/banner.svg" alt="Gta6" width={500} height={50}/>
        <div className='flex text-white'> 
          <div>Gta 6</div>
          <div className='ml-2'>January 18 2024</div>
          
        </div>
        <div className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.</div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
export default News;
