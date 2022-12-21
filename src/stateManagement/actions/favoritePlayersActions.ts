import { Player } from 'stateManagement/reducers/currentPlayersReducer'

export const ADD_PLAYER: string = 'FAVORITE_PLAYERS/ADD_PLAYER'
export const REMOVE_PLAYER: string = 'FAVORITE_PLAYERS/REMOVE_PLAYER'

export const addPlayer = (player: Player) => {
    return {
        type: ADD_PLAYER,
        payload: player
    }
}

export const removePlayer = (id: number) => {
    return {
        type: REMOVE_PLAYER,
        payload: id
    }
}