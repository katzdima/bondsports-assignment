import axios from 'axios'

type Params = {
    page?: number;
    search?: string;
}


export const fetchPlayers = (params: Params) => {
    let fetchParams: string = ''

    if(params.page) {
        fetchParams = `page=${params.page}`
    }

    if(params.page && params.search && params.search.length > 0) {
        fetchParams += '&'
    }

    if(params.search && params.search.length > 0) {
        fetchParams += `search=${params.search}`
    }

    return fetch(fetchParams)
}

const fetch = async (params: string) => {
    const response = await axios.get(`https://www.balldontlie.io/api/v1/players?${params}`)

    return response.data
}

