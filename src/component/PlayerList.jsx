import React, { useEffect, useState } from 'react'
import Player from './Player'
import { api } from '../myApi/api'
import { useDispatch, useSelector } from 'react-redux'
import { FetchPlayerData } from '../redux/action/ToMakeAction'

const PlayerList = () => {
  
  const dispatch = useDispatch()

  const statePlayer = useSelector((state)=>state.football.players)

    const playerDataFromDB = async() => {
        const playerData = await api.get("/player");
        dispatch(FetchPlayerData(playerData.data))
    }

    useEffect(()=>{playerDataFromDB()} , [])

    const playerj = JSON.stringify(statePlayer);

  return (
    <div>
      <div className='m-4 gap-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mt-30 mx-auto'>
        {
          playerj.length !== 0 ? statePlayer.map((dd , index)=>(
            <Player dd={dd} key={index} />
          )) : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

export default PlayerList
