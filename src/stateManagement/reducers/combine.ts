import { combineReducers } from 'redux'
import { currentPlayersReducer } from './currentPlayersReducer'
import { favoritePlayersReducer } from './favoritePlayersReducer'

const reducers = combineReducers({
    currentPlayers: currentPlayersReducer,
    favoritePlayers: favoritePlayersReducer
});

export default reducers
