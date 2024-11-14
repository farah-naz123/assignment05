import React from 'react'
import Header from "@/components/Header"
import Image from 'next/image'



const Home = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <div className=' flex ' >
        <div className='w-1/2 m-12'>
        <h1 className='text-[40px]  w-[496px] font-serif'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className=' font-serif text-[20px] text-[#787054]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className=' w-[177px] h-[38px]  m-4 rounded text-[#FFFFFF] bg-[#A29875] text-[20px] font-serif'>Explore Now</button>

        </div>
        <div className='w-1/2 flex md:justify-center items-center h-screen'>
        <Image
        src='/images/jewellary.png'
        alt='Image'
        width={400}
        height={200}

        />
        </div>
    
      </div>
      
    </div>
  )
}

export default Home;

