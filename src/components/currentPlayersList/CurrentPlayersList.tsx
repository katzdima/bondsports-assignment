import LoadingSpinner from 'components/loadingSpinner/LoadingSpinner'
import UserTile from 'components/userTile/UserTile'
import { Player } from 'stateManagement/reducers/currentPlayersReducer'

type AppProps = {
    players: Player[];
    isLoading: boolean;
    loaderRef?: React.Ref<HTMLDivElement> | null;
    onBtnClick: (player: Player) => void;
    isFavorite: (id: number) => boolean;
}

const CurrentPlayersList = ({ players, isLoading, loaderRef, onBtnClick, isFavorite }: AppProps): JSX.Element => {
    return (
        <div>
            <h3>Current NBA PLayers</h3>
            <article className='players-list'>
                {players.length > 0 ?
                    players.map(player => {
                        return (
                            <UserTile 
                                key={player.id}
                                firstName={player.first_name}
                                lastName={player.last_name}
                                onClick={()=> onBtnClick(player)}
                                label='Add to favorite'
                                isFavorite={isFavorite(player.id)} />
                        )
                    }) :
                    <h2 className='not-found'>No records are found</h2>
                }
            </article>
            {isLoading && (players.length > 0) && <LoadingSpinner />}
            <div ref={loaderRef} />
        </div>
    )
}

export default CurrentPlayersList