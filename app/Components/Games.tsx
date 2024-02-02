"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function Games() {
  const [isDarkPC, setIsDarkPC] = useState(false);
  const [isDarkConsole, setIsDarkConsole] = useState(false);
  const [isDarkPortativ, setIsDarkPortativ] = useState(false);

  const handleButtonClick = (platform:any) => {
    setIsDarkPC(platform === 'PC');
    setIsDarkConsole(platform === 'Console');
    setIsDarkPortativ(platform === 'Portativ');
  };

  return (
    <div className='bg-black h-auto w-full pl-2 pt-4 flex flex-col relative'>
      <div className='text-white text-3xl ml-20'>Feathured Games</div>
      <div className='flex justify-end top-[24px] space-x-4 mr-[100px]'>
        <button onClick={() => handleButtonClick('PC')} className="text-right hover:text-gray-900 bg-gray-500 text-white px-10 py-2 rounded-[100px] inline-block text-lg m-1">
          PC
        </button>
        <button onClick={() => handleButtonClick('Console')} className="text-right hover:text-gray-900 bg-gray-500 text-white px-5 py-2 rounded-[100px] inline-block text-lg m-1">
          Console
        </button>
        <button onClick={() => handleButtonClick('Portativ')} className="text-right hover:text-gray-900 bg-gray-500 text-white px-5 py-2 rounded-[100px] inline-block text-lg m-1">
          Portativ
        </button>
      </div>
      <div className='flex space-x-4 mt-10 ml-20'>
        <Image
          src="GTA online.svg"
          alt="PC Image"
          className={`w-64 h-64 object-cover ${isDarkPC ? 'opacity-50' : 'opacity-100'}`}
          width={64}
          height={64}
        />
        <Image
          src="RED.svg"
          alt="Console Image"
          className={`w-64 h-64 object-cover ${isDarkConsole ? 'opacity-50' : 'opacity-100'}`}
          width={64}
          height={64}
        />
        <Image
          src="GTA 5.svg"
          alt="Portativ Image"
          className={`w-64 h-64 object-cover ${isDarkPortativ ? 'opacity-50' : 'opacity-100'}`}
          width={64}
          height={64}
        />
        <Image
          src="GTA 5.svg"
          alt="Portativ Image"
          className={`w-64 h-64 object-cover ${isDarkPC ? 'opacity-50' : 'opacity-100'}`}
          width={64}
          height={64}
        />
        <Image
          src="GTA 5.svg"
          alt="Portativ Image"
          className={`w-64 h-64 object-cover ${isDarkPortativ ? 'opacity-50' : 'opacity-100'}`}
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}

export default Games;
