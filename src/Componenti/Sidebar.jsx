
import { HouseDoorFill } from "react-bootstrap-icons";
import { CollectionFill } from "react-bootstrap-icons";
import Logo from '../Assets/logo/logo.png'

const SideBar = () => {

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

    const search = async (event) => {
        event.preventDefault()
        let div = document.querySelector('#searchResults .row')
        div.innerHTML = ''
        let searchQuery = document.querySelector('#searchField').value
      
        if (searchQuery.length > 2) {
            document.querySelector('#searchResults').style.display = 'block'
        
            try {
                let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                    searchQuery,
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
                let result = await response.json()
                let { data } = result
                for (let x = 0; x < data.length; x++) {
                    div.innerHTML += albumCard(data[x])
                }
                } else {
                throw new Error('error in search')
                }
            } catch (err) {
                console.log('error', err)
            }
            } else {
            document.querySelector('#searchResults').style.display = 'none'
            }
        }

    return (
        <>
            <div className="col col-2">
                <nav
                    className="navbar navbar-expand-md fixed-left justify-content-between"
                    id="sidebar"
                >
                    <div className="container flex-column align-items-start">
                        <a className="navbar-brand" href="index.html">
                            <img
                                src={Logo}
                                alt="Spotify Logo"
                                width="131" 
                                height="40"
                            />
                            
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul className="p-0">
                                    <li>
                                        <a
                                            className="nav-item nav-link d-flex align-items-center"
                                            href="#"
                                        >
                                            <HouseDoorFill className="text-light fs-4"/>&nbsp; Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-item nav-link d-flex align-items-center"
                                            href="#"
                                        >
                                            <CollectionFill className="text-light fs-4"/>&nbsp; Your Library
                                        </a>
                                    </li>
                                    <li>
                                        <form className="input-group mt-3" onSubmit={(event) => search(event)}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="searchField"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon2"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-outline-secondary btn-sm h-100"
                                                    type="submit"
                                                >
                                                    GO
                                                </button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-btn w-100 d-flex flex-column align-items-center">
                        <button className="btn btn-light signup-btn" id="signup1" type="button">Sign Up</button>
                        <button className="btn login-btn border border-light" id="login1" type="button">Login</button>
                        <div>
                        <a href="#">Cookie Policy |</a> 
                        <a href="#"> Privacy</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideBar