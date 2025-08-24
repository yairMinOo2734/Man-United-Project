import React from 'react'

const Player = ({dd}) => {
  return (
    <div>
      <div className='flex flex-col w-80 bg-black rounded-xl items-center'> 
        <div className='rounded-full bg-red-900 bg-white overflow-hidden w-70 h-70 gap-2 m-2 mt-5'>
            <img className='w-300 object-cover'  src={dd[1].img} />
        </div>
         <h1 className='text-white m-4 text-2xl font-bold'>{dd[0].name}</h1>
      </div>
    </div>
  )
}

export default Player
