import { Player } from 'stateManagement/reducers/currentPlayersReducer'
import UserTile from 'components/userTile/UserTile'

type AppProps = {
    players: Player[];
    onBtnClick: (id: number) => void;
}

const FavoritePlayersList = ({ players, onBtnClick }: AppProps): JSX.Element => {
    return (
        <article className='players-list'>
            <h3>Favorite NBA PLayers</h3>
            {players.length > 0 && players.map(player => {
                return (
                    <UserTile 
                        key={player.id}
                        firstName={player.first_name}
                        lastName={player.last_name}
                        onClick={()=> onBtnClick(player.id)}
                        label='Remove'
                        isFavorite={null} />
                )
            })}
        </article>
    )
}

export default FavoritePlayersList