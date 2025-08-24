import userCanAction from "./UserCanAction"

export const FetchPlayerData = (data) => {
    return{
        type : userCanAction.FetchingPlayerData,
        payload : data
    }
}

export const FetchMatchData = (data) => {
    return{
        type : userCanAction.FetchingMatchData,
        payload : data
    }
}

export const FetchHighlightData = (data) => {
    return{
        type : userCanAction.FetchingHighlightData,
        payload : data
    }
}