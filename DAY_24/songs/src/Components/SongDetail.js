import React from "react";
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>select some song to know duration</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title:{song.title}
                Duration:{song.duration}
            </p>

        </div>);
    console.log(song)
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);

