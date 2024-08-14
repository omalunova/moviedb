import {Dispatch} from "redux";


const API_KEY = '04f4733b64f435bf171d1c90539c050d'
const BASE_URL = 'https://api.themoviedb.org/3'

export const setMovies = (movies: any[]) => {
    return {
        type: 'SET_MOVIES',
        payload: movies
    }
}

export const setGenres = (genres: any[]) => {
    return {
        type: 'SET_GENRES',
        payload: genres
    }
}

export const fetchMovies = () => async (dispatch: Dispatch, getState: any) => {
    try {
        const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
        const data = await response.json()
        dispatch(setMovies(data.results))
    } catch (error) {
        console.log(error)
    }
}

export const fetchGenres = () => async (dispatch: Dispatch, getState: any) => {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        const data = await response.json()
        dispatch(setGenres(data.genres))
    } catch (error) {
        console.log(error)
    }
}
