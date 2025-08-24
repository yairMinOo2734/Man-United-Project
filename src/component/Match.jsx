import React from 'react'

const Match = ({dd}) => {
  return (
    <div>
      <div className=' grid grid-cols-3 bg-black/90 container mx-auto rounded-full text-white h-20'>
        <div className=' text-left pl-4 pt-2 pb-2 flex justify-start gap-10 items-center'>
            <img className='w-10' src={dd[1].homeLogo} />
            <h1 className='text-xl'>{dd[0].homeTitle}</h1>
        </div>
        <div className=' text-center pt-2 pb-2  font-bold flex items-center justify-center '>Today</div>
        <div className=' text-right pr-4 pt-2 pb-2 flex justify-end gap-10 items-center'>
            <h1 className='text-xl'>{dd[2].awayTitle}</h1>
            <img className='w-10' src={dd[3].awayLogo} />
        </div>
      </div>
    </div>
  )
}

export default Match
