import React from 'react'

const HcardDetils = () => {
  return (
    <div className='m-30 container mx-auto w-full'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex justify-center flex-col-1'>
            <img className='w-300' src='https://i.ytimg.com/vi/gKgCSFZALkE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMCzI4TWcezessvgh3C3kfkcz79w' />
        </div>
        <div className='flex justify-center gap-30'>
          <h1 className='text-2xl font-bold'>Manchester United vs Arsenal</h1>
          <h1  className='text-2xl font-bold'>2017</h1>
          <h1 className='text-2xl font-bold'>Premier League</h1>
        </div>
      </div>
    </div>
  )
}

export default HcardDetils
