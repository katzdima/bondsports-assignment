import { Colors } from './FavoritePlayersListContainer'

type AppProps = {
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}

const ColorChanger = ({ backgroundColor, setBackgroundColor }: AppProps): JSX.Element => {
    return (
        <div className='color-changer'>
            {
                Object.values(Colors).map((color) => {
                    return (
                        <div 
                            key={color}
                            style={{backgroundColor: color}}
                            className={`color-tile ${color === backgroundColor ? 'selected' : ''}`}
                            onClick={() => setBackgroundColor(color)} >
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ColorChanger