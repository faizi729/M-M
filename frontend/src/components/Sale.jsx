import React from 'react'
// import s1 from "../assets/s1.png"
// import s2 from "../assets/s2.png"
// import s3 from "../assets/s3.png"
const f1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNr_O_WJy_3jrVKRT3oO3OcI_HWcVTP9bRg&s"


const Sale = () => {
  return (
   <div className="bg-[#F3274C] pb-10 flex flex-col">
    <div className='flex justify-center items-center mt-20'>
        <h1 className='font-bold text-white text-[30px]'>Mega Sale</h1>
    </div>
    <div className="flex justify-center items-center mt-2 text-[14px] text-white">
        <p>Hurry Up! This offer is limited</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center mt-10 mx-5">
  <div className="w-full flex flex-row max-w-[600px] h-[300px] bg-white shadow-lg rounded-2xl">
    <div className='w-1/2'>
        <img src={f1} alt=""  className='w-full h-full object-cover'/>
    </div>
    <div className='flex justify-end'>
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">♥</button>
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col items-center justify-center'>
        <p className="text-sm text-amber-500 ml-2">★★★★★ (5)</p>
            <h1 className='ml-2 font-bold text-[26px]'>Rogan Josh</h1>
        </div>
        <div className='flex gap-2 flex-row ml-5'>
            <div>
                <p className='text-[#F3274C] mt-2 font-bold text-[28px]'>₹1000</p>
            </div>
            <div>
                <p className="text-gray-500 mt-4 stroke-1 line-through">
                    ₹1200
                </p>
            </div>



        </div>
    </div>
    </div>

  </div>
  <div className="w-full max-w-[600px] h-[300px] bg-white shadow-lg rounded-2xl">
  <div className="w-full flex flex-row max-w-[600px] h-[300px] bg-white shadow-lg rounded-2xl">
    <div className='w-1/2'>
        <img src={f1} alt=""  className='w-full h-full object-cover'/>
    </div>
    <div className='flex justify-end'>
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">♥</button>
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col items-center justify-center'>
        <p className="text-sm text-amber-500 ml-2">★★★★★ (5)</p>
            <h1 className='ml-2 font-bold text-[26px]'>Malai Kofta</h1>
        </div>
        <div className='flex gap-2 flex-row ml-5'>
            <div>
                <p className='text-[#F3274C] mt-2 font-bold text-[28px]'>₹1000</p>
            </div>
            <div>
                <p className="text-gray-500 mt-4 stroke-1 line-through">
                    ₹1200
                </p>
            </div>



        </div>
    </div>
    </div>

  </div>
  </div>
  <div className="w-full max-w-[600px] h-[300px] bg-white shadow-lg rounded-2xl">
  <div className="w-full flex flex-row max-w-[600px] h-[300px] bg-white shadow-lg rounded-2xl">
    <div className='w-1/2'>
        <img src={f1} alt=""  className='w-full h-full object-cover'/>
    </div>
    <div className='flex justify-end'>
    <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">♥</button>
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col items-center justify-center'>
        <p className="text-sm text-amber-500 ml-2">★★★★★ (5)</p>
            <h1 className='ml-2 font-bold text-[26px]'>Chicken Soup</h1>
        </div>
        <div className='flex gap-2 flex-row ml-5'>
            <div>
                <p className='text-[#F3274C] mt-2 font-bold text-[28px]'>₹1000</p>
            </div>
            <div>
                <p className="text-gray-500 mt-4 stroke-1 line-through">
                    ₹1200
                </p>
            </div>



        </div>
    </div>
    </div>

  </div>
  </div>
</div>

   </div>
  )
}

export default Sale