import { useContext } from "react";
import MAANG from "../assets/MANG.png";
import { AuthContext } from "../authContext/AuthContext";
import "./home.css";

export default function HomPage() {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <>
      <div className="home">
        <div className="Headings">
          <div className="heading1">
            <h1>Learn to code — for free.</h1>
          </div>
          <br />
          <div className="heading2">
            <h1>Build projects.</h1>
          </div>
          <br />
          <div className="heading3">
            <h1>Earn certifications.</h1>
          </div>
        </div>
        <div className="para">
          <p className="heading4">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <br />
          <p className="MAANG">
            <img src={MAANG} alt="dashboard-img"></img>
          </p>
        </div>
        <div className="getStarted">
          {user ? (
            <button>
              <a href="/menu">
                <h1 className="getStartedBtn">Get started (It's free)</h1>
              </a>
            </button>
          ) : (
            <button>
              <a href="/signin">
                <h1 className="getStartedBtn">Get started (It's free)</h1>
              </a>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
