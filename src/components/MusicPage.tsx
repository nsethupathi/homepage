//@ts-nocheck
import {FunctionComponent} from "react";
import "../css/MusicPage.css"

const Amplitude = require('amplitudejs');



Amplitude.init({
    "songs": [
        {
            "name": "Snow Girls",
            "artist": "Tilting",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/snowgirls.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        },
        {
            "name": "Hey Vera",
            "artist": "Tilting",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/heyvera.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        },
        {
            "name": "Kenosha",
            "artist": "Tilting",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/kenosha.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        }
    ],
    "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
    waveforms: {
        sample_rate: 50
    }
});

export const MusicPage: FunctionComponent = () => {
    let songElements = document.getElementsByClassName('song');

    for( var i = 0; i < songElements.length; i++ ){
        /*
          Ensure that on mouseover, CSS styles don't get messed up for active songs.
        */
        songElements[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = '#00A0FF';

            this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
            this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

            if( !this.classList.contains('amplitude-active-song-container') ){
                this.querySelectorAll('.play-button-container')[0].style.display = 'block';
            }

            this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
        });

        /*
          Ensure that on mouseout, CSS styles don't get messed up for active songs.
        */
        songElements[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#FFFFFF';
            this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
            this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
            this.querySelectorAll('.play-button-container')[0].style.display = 'none';
            this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
        });

        /*
          Show and hide the play button container on the song when the song is clicked.
        */
        songElements[i].addEventListener('click', function(){
            this.querySelectorAll('.play-button-container')[0].style.display = 'none';
        });
    }

    return (
        <div className={"MusicParent"}>
            <div id="blue-playlist-container">

                <div id="amplitude-player">

                    <div id="amplitude-left">
                        <img data-amplitude-song-info="cover_art_url" className="album-art"/>
                        <div className="amplitude-visualization" id="large-visualization">

                        </div>
                        <div id="player-left-bottom">
                            <div id="time-container">
              <span className="current-time">
                <span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span>
              </span>
                                <div id="progress-container">
                                    <div className="amplitude-wave-form">

                                    </div>
                                    <input type="range" className="amplitude-song-slider"/>
                                    <progress id="song-played-progress" className="amplitude-song-played-progress"></progress>
                                    <progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
                                </div>
                                <span className="duration">
                <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
              </span>
                            </div>

                            <div id="control-container">
                                <div id="repeat-container">
                                    <div className="amplitude-repeat" id="repeat"></div>
                                    <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
                                </div>

                                <div id="central-control-container">
                                    <div id="central-controls">
                                        <div className="amplitude-prev" id="previous"></div>
                                        <div className="amplitude-play-pause" id="play-pause"></div>
                                        <div className="amplitude-next" id="next"></div>
                                    </div>
                                </div>

                                <div id="volume-container">
                                    <div className="volume-controls">
                                        <div className="amplitude-mute amplitude-not-muted"></div>
                                        <input type="range" className="amplitude-volume-slider"/>
                                        <div className="ms-range-fix"></div>
                                    </div>
                                    <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle-right"></div>
                                </div>
                            </div>

                            <div id="meta-container">
                                <span data-amplitude-song-info="name" className="song-name"></span>

                                <div className="song-artist-album">
                                    <span data-amplitude-song-info="artist"></span>
                                    <span data-amplitude-song-info="album"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="amplitude-right">
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="0">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container"></div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Snow Girls</span>
                                <span className="song-artist">Tilting</span>
                            </div>
                            {/*<a href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad" className="bandcamp-link" target="_blank">*/}
                            {/*    <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>*/}
                            {/*    <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>*/}
                            {/*</a>*/}
                            <span className="song-duration">2:52</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="0">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container"></div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Hey Vera</span>
                                <span className="song-artist">Tilting</span>
                            </div>
                            {/*<a href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad" className="bandcamp-link" target="_blank">*/}
                            {/*    <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>*/}
                            {/*    <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>*/}
                            {/*</a>*/}
                            <span className="song-duration">3:39</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="0">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container"></div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Kenosha</span>
                                <span className="song-artist">Tilting</span>
                            </div>
                            {/*<a href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad" className="bandcamp-link" target="_blank">*/}
                            {/*    <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>*/}
                            {/*    <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>*/}
                            {/*</a>*/}
                            <span className="song-duration">3:44</span>
                        </div>
                    </div>
                </div>
            </div>

            <p>Live Instrument Recordings Coming Soon!</p>
        </div>


    )
}