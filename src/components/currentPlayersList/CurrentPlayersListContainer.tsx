import { useEffect, useRef, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'customHooks/appHooks'
import CurrentPlayersList from './CurrentPlayersList'
import Search from './Search' 
import {
    FIRST_PAGE,
    loadPlayersFirstPage,
    loadNextPlayersPage,
    loadSearch,
    addFavoritePlayer
} from 'services/players.service'
import { CurrentPlayersState, Player } from 'stateManagement/reducers/currentPlayersReducer'
import { FavoritePlayersState } from 'stateManagement/reducers/favoritePlayersReducer'

const CurrentPlayersListContainer = (): JSX.Element => {
    const loaderRef: React.Ref<HTMLDivElement> | null = useRef(null)
    const dispatch = useAppDispatch()
    const { players, currentPage, totalPages, isLoading, search }: CurrentPlayersState = useAppSelector((state) => state.currentPlayers)
    const { players : favoritePlayers }: FavoritePlayersState = useAppSelector((state) => state.favoritePlayers)

    useEffect(() => {
        !isLoading && dispatch<any>(loadPlayersFirstPage())
    },[])

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0]

        if (target.isIntersecting) {
            dispatch<any>(loadNextPlayersPage())
        }
    }, [])

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "100px",
            threshold: 0
        }

        const observer = new IntersectionObserver(handleObserver, option)

        if (!isLoading && (currentPage > FIRST_PAGE) && (currentPage <= totalPages) && loaderRef.current) {
            observer.observe(loaderRef.current)
        }
    }, [handleObserver, isLoading, currentPage, totalPages])

    const handleSearchSubmit = (searchValue: string): void => (searchValue !== search) && dispatch<any>(loadSearch(searchValue))

    const handleAddToFavorite = (player: Player) => dispatch<any>(addFavoritePlayer(player))

    const isFavorite = (id: number): boolean => favoritePlayers.findIndex(p => p.id === id) !== -1

    return (
        <div className='current-players-container'>
            <Search
                search={search}
                onSearchSubmit={handleSearchSubmit} />
            <CurrentPlayersList
                players={players}
                isLoading={isLoading}
                loaderRef={loaderRef}
                onBtnClick={handleAddToFavorite}
                isFavorite={isFavorite} />
        </div>
    )
}

export default CurrentPlayersListContainer