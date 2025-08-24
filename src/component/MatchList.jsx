import React, { useEffect, useState } from 'react'
import Match from './Match'
import { api } from '../myApi/api'
import { useDispatch, useSelector } from 'react-redux'
import { FetchMatchData } from '../redux/action/ToMakeAction'

const MatchList = () => {

    const dispatch = useDispatch()

    const stateMatch = useSelector((state)=>state.football.matchs)

    const matchDataFromDB = async() => {
        const matchData = await api.get("./match") ;
        dispatch(FetchMatchData(matchData.data))
    }

    useState(()=>{matchDataFromDB()} , [])

    const mdata = JSON.stringify(stateMatch)

  return (
    <div className='grid gap-4 mt-30 m-2'>
        {
            mdata.length !== 0 ? stateMatch.map((dd , index) => (
                <Match dd={dd} key={index} />
            )) : <h1>Loading...</h1>
        }
    </div>
  )
}

export default MatchList
