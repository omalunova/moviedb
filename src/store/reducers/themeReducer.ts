interface ThemeState {
    isDarkMode: boolean;
}

interface ToggleThemeAction {
    type: 'TOGGLE_THEME'
}

type ThemeActionTypes = ToggleThemeAction

const initialState:ThemeState = {
    isDarkMode: false,
}

export const themeReducer = (state = initialState, action: ThemeActionTypes) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        default:
            return state
    }
}