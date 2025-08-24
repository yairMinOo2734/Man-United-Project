import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='bg-red-600 text-white p-6 flex justify-between items-center fixed top-0 w-full h-20'>
        <h1 onClick={()=> navigate("/")} className='text-2xl font-bold cursor-pointer'>Manchester United</h1>
        <div className='flex gap-4 font-bold cursor-pointer'>
            <span onClick={()=>navigate("./home")}>Home</span>
            <span onClick={()=>navigate("./highlight")}>Highlights</span>
            <span onClick={()=>navigate("./player")}>Players</span>
            <span onClick={()=>navigate("./match")}>Matchs</span>
            <span onClick={()=>navigate("./trophy")}>Trophy</span>
        </div>
        <div className='bg-black/60 p-1 rounded-full'>
            <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/7/7a/Manchester_United_FC_crest.svg/2021px-Manchester_United_FC_crest.svg.png' className='w-12'/>        </div>
      </div>
    </div>
  )
}

export default Header
