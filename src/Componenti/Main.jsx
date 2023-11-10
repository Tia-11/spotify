import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setClickedSong } from '../Redux/Actions';
import MyPlayer from "./Player"



  const Main = () => {
    const dispatch = useDispatch();
    const clickedSong = useSelector((state) => state.yourReducer.clickedSong);

    const albumCard = function (songInfo) {
        return `
            <div class="col text-center" id=${songInfo.id}>
                <img class="img-fluid" src=${
                    songInfo.album.cover_medium
                    } alt="track" />
                <p>
                    Track: "${
                        songInfo.title.length < 16
                        ? `${songInfo.title}`
                        : `${songInfo.title.substring(0, 16)}...`
                    }"<br>
                    Artist: ${songInfo.artist.name}
                </p>
                </div>`
        }
        
        const handleSection = async (artistName, querySelector) => {
            try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                artistName,
                {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                    'X-RapidAPI-Key':
                    '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                },
                }
            )
            if (response.ok) {
                let { data } = await response.json()
                let musicSection = document.querySelector(querySelector)
                for (let i = 0; i < 4; i++) {
                musicSection.innerHTML += albumCard(data[i])
                }
            } else {
                throw new Error('Error in fetching songs')
            }
            } catch (err) {
            console.log('error', err)
            }
        }

    useEffect(() => {
        handleSection('queen', '#rockSection')
         handleSection('katyperry', '#popSection')
         handleSection('eminem', '#hipHopSection')
        dispatch(setClickedSong(['example'])); // Esempio di utilizzo di Redux
      }, [dispatch]);
    

    return (
        <>
        <div className="col-12 col-md-9 offset-md-3 mainPage mt-5">
            <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
            </div>
            </div>
            <div className="row">
            <div className="col-10">
                <div id="searchResults" style={{display: 'none'}}>
                <h2>Search Results</h2>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-10">
                <div id="rock">
                <h2>Rock Classics</h2>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                >
                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-10">
                <div id="pop">
                <h2>Pop Culture</h2>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                ></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-10">
                <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                ></div>
                </div>
            </div>
            </div>
        </div>
        <MyPlayer />
        </>
    )
}


export default Main