import CurrentPlayersListContainer from './currentPlayersList/CurrentPlayersListContainer'
import FavoritePlayersListContainer from './favoritePlayersList/FavoritePlayersListContainer'
import './style.css.scss'

const MainContainer = (): JSX.Element => {
    return (
        <section className='main-container'>
            <CurrentPlayersListContainer />
            <FavoritePlayersListContainer />
        </section>
    )
}

export default MainContainer