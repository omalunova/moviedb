interface MovieState {
    movies: any[];
    genres: any[];
}

interface SetMoviesAction {
    type: 'SET_MOVIES';
    payload: any[];
}

interface SetGenresAction {
    type: 'SET_GENRES';
    payload: any[];
}

type MoviesActionTypes = SetMoviesAction | SetGenresAction

const initialState:MovieState = {
    movies: [],
    genres: [],
}

export const moviesReducer = (state = initialState, action: MoviesActionTypes) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        case 'SET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }
}
