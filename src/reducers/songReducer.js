import { SONG_LIST_REQUEST, SONG_LIST_SUCCESS, SONG_LIST_FAIL } from '../constants/songConstant';

export const songListReducer = (state = { songs: [] }, action) => {
    switch (action.type) {
        case SONG_LIST_REQUEST:
            return {
                loading: true,
                error: false,
                songs: []
            }
        case SONG_LIST_SUCCESS:
            return {
                loading: false,
                error: false,
                songs: action.payload.results
            }
        case SONG_LIST_FAIL:
            return {
                loading: false,
                error: true
            }
        default:
            return state
    }
}