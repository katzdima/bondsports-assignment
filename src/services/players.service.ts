import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from 'stateManagement/configurations/store'
import {
    addPlayers,
    addPlayersSuccess,
    setSearchedPlayers,
    setSearchedPlayersSuccess
} from 'stateManagement/actions/currentPlayersActions'
import { fetchPlayers } from './fetching.service'
import { Player, CurrentPlayersState } from 'stateManagement/reducers/currentPlayersReducer'
import { FavoritePlayersState } from 'stateManagement/reducers/favoritePlayersReducer'
import { addPlayer } from 'stateManagement/actions/favoritePlayersActions'

export const FIRST_PAGE: number = 1

export type FetchedPlayers = {   
    data: Player[];
    meta: {
        total_pages: number;
    };
}

export const loadPlayersFirstPage = () => loadPlayers(FIRST_PAGE)

export const loadNextPlayersPage = 
    (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
        const { currentPage, totalPages, isLoading }: CurrentPlayersState = getState().currentPlayers

        return !isLoading && (totalPages > currentPage) && dispatch(loadPlayers(currentPage + 1))
    }

const loadPlayers = 
    (page: number): ThunkAction<void, RootState, unknown, AnyAction> => 
    async (dispatch, getState) => {
        const { search }: CurrentPlayersState = getState().currentPlayers

        dispatch(addPlayers())

        const fetchedPlayers: FetchedPlayers = await fetchPlayers({ page, search })

        return dispatch(addPlayersSuccess({
            players: fetchedPlayers?.data,
            totalPages: fetchedPlayers?.meta?.total_pages
        }))
    }

export const loadSearch = 
    (search: string): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatch(setSearchedPlayers(search))
        
        const fetchedPlayers: FetchedPlayers = await fetchPlayers({ search })

        dispatch(setSearchedPlayersSuccess({
            players: fetchedPlayers?.data,
            totalPages: fetchedPlayers?.meta?.total_pages
        }))
    }

export const addFavoritePlayer = 
    (player: Player): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch, getState) => {
        const { players }: FavoritePlayersState = getState().favoritePlayers

        const index = players.findIndex(p => p.id === player.id)

        if(index === -1) {
            dispatch(addPlayer(player))
        }
    }