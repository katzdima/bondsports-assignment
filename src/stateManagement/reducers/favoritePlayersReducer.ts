import { AnyAction } from 'redux'
import { ADD_PLAYER, REMOVE_PLAYER } from 'stateManagement/actions/favoritePlayersActions'
import { Player } from './currentPlayersReducer'

export type FavoritePlayersState = {
    players: Player[];
}
  

const initialState: FavoritePlayersState = {
    players: []
}

export const favoritePlayersReducer = (state: FavoritePlayersState = initialState, action: AnyAction): FavoritePlayersState => {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.payload]
            }

        case REMOVE_PLAYER:
            return {
                ...state,
                players: [...state.players.filter(player => player.id !== action.payload)]
            }


        default:
            return state
    }
}