import { AnyAction } from 'redux'
import { FIRST_PAGE } from 'services/players.service'
import {
    ADD_PLAYERS,
    ADD_PLAYERS_SUCCESS,
    SET_SEARCHED_PLAYERS,
    SET_SEARCHED_PLAYERS_SUCCESS
} from 'stateManagement/actions/currentPlayersActions'

export type Player = {
    id: number;
    first_name: string;
    last_name: string;
}
  
export type CurrentPlayersState = {
    players: Player[];
    search: string;
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
}
  

const initialState: CurrentPlayersState = {
    players: [],
    search: '',
    currentPage: FIRST_PAGE,
    totalPages: FIRST_PAGE,
    isLoading: false
}

export const currentPlayersReducer = (state: CurrentPlayersState = initialState, action: AnyAction): CurrentPlayersState => {
    switch (action.type) {
        case ADD_PLAYERS:
            return {
                ...state,
                isLoading: true
            }

        case ADD_PLAYERS_SUCCESS:
            return {
                ...state,
                players: [...state.players, ...action.payload.players],
                currentPage: state.currentPage + 1,
                totalPages: action.payload.totalPages,
                isLoading: false
            }

        case SET_SEARCHED_PLAYERS:
            return {
                ...state,
                search: action.payload,
                isLoading: true
            }

        case SET_SEARCHED_PLAYERS_SUCCESS: 
            return {
                ...state,
                players: action.payload.players,
                currentPage: FIRST_PAGE,
                totalPages: action.payload.totalPages,
                isLoading: false
            }

        default:
            return state
    }
}