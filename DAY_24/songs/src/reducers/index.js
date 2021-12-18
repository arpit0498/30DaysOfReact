import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'suraj hua madhaam', duration: '4:05' },
        { title: 'kabhi kabhi', duration: '5:25' },
        { title: 'Badal barse', duration: '3:08' },
        { title: 'lag jaa gale', duration: '4:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});