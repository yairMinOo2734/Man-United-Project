import React, { useEffect, useState } from 'react'
import Hcard from './Hcard'
import { api } from '../myApi/api'
import { useDispatch, useSelector } from 'react-redux'
import { FetchHighlightData } from '../redux/action/ToMakeAction'

const HcardList = () => {

   

    const dispatch = useDispatch()

    const stateHighlight = useSelector((state)=> state.football.highlights)

    const hDataFromServer = async() => {
        const hData = await api.get("./highlight");
        
        dispatch(FetchHighlightData(hData.data))
    }

    useEffect(()=>{hDataFromServer()}
     , [])

     const jHcard = JSON.stringify(stateHighlight)

  return (
    <div className='grid grid-cols-4 container mx-auto gap-2 mt-30 m-2'>
      {
        jHcard.length !== 0 ? stateHighlight.map((dd , index) => (
          <Hcard key={index} dd={dd} />
        )) : <p>Loading...</p>
      }
    </div>
  )
}

export default HcardList