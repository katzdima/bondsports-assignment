import { useState } from 'react'

type AppProps = {
    search: string;
    onSearchSubmit: (searchValue: string) => void;
}

const Search = ({ search, onSearchSubmit }: AppProps): JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>(search)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        onSearchSubmit(searchValue)
    }

    return (
        <form onSubmit={handleSubmit} className='search-container'>
            <label>
                Search For Player:
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className='search-input' />
            </label>
            <input type="submit" value="Search" className='search-btn'/>
        </form>
    )
}

export default Search