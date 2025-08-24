import React from 'react'
import Trophy from './Trophy'

const TrophyList = () => {
  return (
    <div className='mt-20 p-2 bg-black grid grid-cols-1 gap-4' >
                <div className=' w-300 p-2 rounded-lg bg-white mx-auto flex justify-between items-center text-white'>
            <div className='text-4xl font-bold text-black'>
                Competition
            </div>
            <div className='text-4xl font-bold text-black'> 
                Trophies Won
            </div>
            <div className='text-4xl font-bold text-black'>
                Most Recent
            </div>
        </div>
      <Trophy/>
      <Trophy/>
      <Trophy/>
      <Trophy/>
      <Trophy/>
    </div>
  )
}

export default TrophyList
