import './style.css.scss'

type AppProps = {
    firstName: string;
    lastName: string;
    onClick: () => void;
    label: string;
    isFavorite: boolean | null;
}

const UserTile = ({ firstName, lastName, onClick, label, isFavorite }: AppProps): JSX.Element => {
    return (
        <div className={`user-tile ${isFavorite ? 'favorite' : ''}`}>
            <div className='name'>
                <div>{firstName}</div>
                <div>{lastName}</div>
            </div>
            <button
                type="button"
                onClick={onClick}>{label}</button>
        </div>
    )
}

export default UserTile