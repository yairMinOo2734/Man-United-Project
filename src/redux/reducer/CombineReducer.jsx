import { combineReducers } from "redux";
import { unitedReducer } from "./MainReducer";

export const reducer = combineReducers(
    {
        football : unitedReducer
    }
)