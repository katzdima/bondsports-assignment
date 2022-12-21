import { useAppDispatch, useAppSelector } from 'customHooks/appHooks'
import FavoritePlayersList from './FavoritePlayersList'
import { FavoritePlayersState } from 'stateManagement/reducers/favoritePlayersReducer'
import { removePlayer } from 'stateManagement/actions/favoritePlayersActions'
import { useState } from 'react'
import ColorChanger from './ColorChanger'

export enum Colors {
    white = "white",
    grey = "grey",
    yellow = "yellow",
  }

const FavoritePlayersListContainer = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { players }: FavoritePlayersState = useAppSelector((state) => state.favoritePlayers)
    const [backgroundColor, setBackgroundColor] = useState<string>(Colors.white)

    const handleBtnClick = (id: number) => dispatch(removePlayer(id))

    return (
        <div className='favorite-players-container' style={{backgroundColor: backgroundColor}}>
            <ColorChanger
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor} />
            <FavoritePlayersList
                players={players} 
                onBtnClick={handleBtnClick} />
        </div>
    )
}

export default FavoritePlayersListContainer