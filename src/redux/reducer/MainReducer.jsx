import userCanAction from "../action/UserCanAction"

const initialState = {
    players : [] ,
    matchs : [] ,
    highlights : []
}

export const unitedReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case userCanAction.FetchingPlayerData :
        return {... initialState , players : payload}
        case userCanAction.FetchingMatchData :
        return {... initialState , matchs : payload}
        case userCanAction.FetchingHighlightData :
        return {... initialState , highlights : payload}
        default:
        return state;
    }
}