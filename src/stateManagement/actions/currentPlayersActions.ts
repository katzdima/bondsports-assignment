import { Player } from 'stateManagement/reducers/currentPlayersReducer'

type FetchedPlayers = {
    players: Player[];
    totalPages: number;
}

export const ADD_PLAYERS: string = 'CURRENT_PLAYERS/ADD_PLAYERS'
export const ADD_PLAYERS_SUCCESS: string = 'CURRENT_PLAYERS/ADD_PLAYERS_SUCCESS'
export const SET_SEARCHED_PLAYERS: string = 'CURRENT_PLAYERS/SET_SEARCHED_PLAYERS'
export const SET_SEARCHED_PLAYERS_SUCCESS: string = 'CURRENT_PLAYERS/SET_SEARCHED_PLAYERS_SUCCESS'

export const addPlayers = () => {
    return {
        type: ADD_PLAYERS
    }
}

export const addPlayersSuccess = (fetchedPlayers: FetchedPlayers) => {
    return {
        type: ADD_PLAYERS_SUCCESS,
        payload: fetchedPlayers
    }
}

export const setSearchedPlayers = (search: string) => {
    return {
        type: SET_SEARCHED_PLAYERS,
        payload: search
    }
}

export const setSearchedPlayersSuccess = (fetchedPlayers: FetchedPlayers) => {
    return {
        type: SET_SEARCHED_PLAYERS_SUCCESS,
        payload: fetchedPlayers
    }
}