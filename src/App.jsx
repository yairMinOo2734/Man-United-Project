import React from 'react'
import Header from './component/Header'
import Hcard from './component/Hcard'
import HcardList from './component/HcardList'
import Player from './component/Player'
import PlayerList from './component/PlayerList'
import Match from './component/Match'
import MatchList from './component/MatchList'
import Home from './component/Home'
import Trophy from './component/Trophy'
import TrophyList from './component/TrophyList'
import { Route, Routes } from 'react-router'
import HcardDetils from './component/HcardDetils'

const App = () => {
  return (
    <div>
      <Header/>

      <HcardDetils/>

      {/* <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/highlight"} element={<HcardList/>}/>
        <Route path={"/player"} element={<PlayerList/>}/>
        <Route path={"/match"} element={<MatchList/>}/>
        <Route path={"/trophy"} element={<TrophyList/>}/>
      </Routes> */}
    </div>
  )
}

export default App
