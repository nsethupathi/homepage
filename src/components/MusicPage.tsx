import {FunctionComponent} from "react";
import "../css/MusicPage.css"

// @ts-ignore
const Amplitude = require('amplitudejs');

Amplitude.init({
    "songs": [
        {
            "name": "Snow Girls",
            "artist": "Nivethan Sethupathi",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/snowgirls.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        },
        {
            "name": "Hey Vera",
            "artist": "Nivethan Sethupathi",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/heyvera.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        },
        {
            "name": "Kenosha",
            "artist": "Nivethan Sethupathi",
            "album": "The Exit Remedy",
            "url": process.env.PUBLIC_URL + '/kenosha.mp3',
            "cover_art_url": process.env.PUBLIC_URL + '/dt_napes.jpg'
        }
    ]
})

export const MusicPage: FunctionComponent = () => {
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
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Risin' High (feat Raashan Ahmad)</span>
                                <span className="song-artist">Ancient Astronauts</span>
                            </div>
                            <a href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">3:30</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="1">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">The Gun</span>
                                <span className="song-artist">Lorn</span>
                            </div>
                            <a href="https://lorn.bandcamp.com/" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">3:16</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="2">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Anvil</span>
                                <span className="song-artist">Lorn</span>
                            </div>
                            <a href="https://lorn.bandcamp.com/" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">3:32</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="3">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">I Came Running</span>
                                <span className="song-artist">Ancient Astronauts</span>
                            </div>
                            <a href="https://switchstancerecordings.bandcamp.com/track/i-came-running" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">3:30</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="4">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">First Snow</span>
                                <span className="song-artist">Emancipator</span>
                            </div>
                            <a href="https://emancipator.bandcamp.com" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">5:12</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="5">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Terrain</span>
                                <span className="song-artist">pg.lost</span>
                            </div>
                            <a href="https://pglost.bandcamp.com/track/terrain" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">5:29</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="6">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Vorel</span>
                                <span className="song-artist">Russian Circles</span>
                            </div>
                            <a href="https://russiancircles.bandcamp.com/track/vorel" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">5:29</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="7">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Intro / Sweet Glory</span>
                                <span className="song-artist">Jimkata</span>
                            </div>
                            <a href="http://jimkata.bandcamp.com/track/intro-sweet-glory" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">2:39</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="8">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Offcut #6</span>
                                <span className="song-artist">Little People</span>
                            </div>
                            <a href="https://littlepeople.bandcamp.com/track/offcut-6" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">1:00</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="9">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Dusk To Dawn</span>
                                <span className="song-artist">Emancipator</span>
                            </div>
                            <a href="https://emancipator.bandcamp.com/track/dusk-to-dawn-2" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">5:25</span>
                        </div>
                        <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="10">
                            <div className="song-now-playing-icon-container">
                                <div className="play-button-container">

                                </div>
                                <img className="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/now-playing.svg"/>
                            </div>
                            <div className="song-meta-data">
                                <span className="song-title">Anthem</span>
                                <span className="song-artist">Emancipator</span>
                            </div>
                            <a href="https://emancipator.bandcamp.com/track/anthem" className="bandcamp-link" target="_blank">
                                <img className="bandcamp-grey" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-grey.svg"/>
                                <img className="bandcamp-white" src="https://521dimensions.com/img/open-source/amplitudejs/blue-player/bandcamp-white.svg"/>
                            </a>
                            <span className="song-duration">5:40</span>
                        </div>
                    </div>
                </div>
            </div>

            <p>Live Instrument Recordings Coming Soon!</p>
        </div>


    )
}