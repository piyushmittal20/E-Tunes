import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { listSongs } from '../actions/songAction';
import styled from 'styled-components';
import Song from '../components/Song';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader/Loader';

const StyledSong = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;

  @media screen and (max-width:790px) {
    padding: 20px
  }
`
const ErrorWrapper = styled.h1`
  color: rgb(93, 0, 0);
  border: 2px solid rgb(93, 0, 0);
  background:  rgb(241, 65, 65);
  border-radius: 10px;
  padding: 10px;
  margin: 30px auto;
  width: 500px;
`

const HomeScreen = () => {
    const [query, setQuery] = useState('marshmello')

    const dispatch = useDispatch();

    const songList = useSelector(state => state.songList)
    const { loading, error, songs } = songList

    useEffect(() => {
        dispatch(listSongs(query))
        // eslint-disable-next-line
    }, [dispatch, query])

    return (
        <>
            <SearchBox
                setQuery={setQuery}
            />
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <ErrorWrapper>Some Error Occurred!</ErrorWrapper>
                ) : songs.length === 0 ? <ErrorWrapper>No Songs Found</ErrorWrapper> :
                            <StyledSong>
                                {songs.map((song, index) => (
                                    <Song
                                        key={index}
                                        title={song.trackName}
                                        image={song.artworkUrl100}
                                        trackUrl={song.trackViewUrl}
                                    />
                                ))}
                            </StyledSong>
            }
        </>
    );
}

export default HomeScreen;
