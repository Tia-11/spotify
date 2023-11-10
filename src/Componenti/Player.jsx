
import Next from '../Assets/playerbuttons/next.png';
import Play from '../Assets/playerbuttons/play.png';
import Prev from '../Assets/playerbuttons/prev.png';
import Repeat from '../Assets/playerbuttons/repeat.png';
import Shuffle from '../Assets/playerbuttons/shuffle.png';

const MyPlayer = (props) => (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    <div className="row h-100">
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex-column justify-content-center align-items-center">
          <div className="col-6 col-md-4 playerControls">
            <div className="d-flex">
              <a href="#">
                <img src={Shuffle} alt="shuffle" />
              </a>
              <a href="#">
                <img src={Prev} alt="prev" />
              </a>
              <a href="#">
                <img src={Play} alt="play" />
              </a>
              <a href="#">
                <img src={Next} alt="next" />
              </a>
              <a href="#">
                <img src={Repeat} alt="repeat" />
              </a>
            </div>
            <div className="progress mt-3" id="progress">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyPlayer;