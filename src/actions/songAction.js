import { SONG_LIST_REQUEST, SONG_LIST_SUCCESS, SONG_LIST_FAIL } from '../constants/songConstant';
import { create } from 'apisauce';

const api = create({
    baseURL: 'http://192.168.43.157:3000'
})

export const listSongs = (query) => async (dispatch) => {
    try {
        dispatch({ type: SONG_LIST_REQUEST })

        const { data } = await api.get(`https://itunes.apple.com/search?term=${query}`)

        dispatch({
            type: SONG_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SONG_LIST_FAIL
        })
    }
}