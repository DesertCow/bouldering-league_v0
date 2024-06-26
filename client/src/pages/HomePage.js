// import SideBar from "../components/Sidebar";
// import Header from "../components/Header";
import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const HomePage = () => {

  const navigate = useNavigate();

  const handleTeamRankings = async (event) => {
    event.preventDefault();
    navigate("/team_rankings");
    window.scrollTo(0, 0);
  };

  const handleTeamPages = async (event) => {
    event.preventDefault();
    navigate("/team_page");
    window.scrollTo(0, 0);
  };

  const handleClimberProfile = async (event) => {
    event.preventDefault();
    navigate("/climbers/");
    window.scrollTo(0, 0);
  };

  const handleEventUpdates = async (event) => {
    event.preventDefault();
    navigate("/updates");
    window.scrollTo(0, 0);
  };

  const handleSubmitScorecard = async (event) => {
    event.preventDefault();
    navigate("/scorecard");
    window.scrollTo(0, 0);
  };

  const handleEventInfo = async (event) => {
    event.preventDefault();
    // navigate("/climberinfo");
    window.location.href = 'https://www.senderoneclimbing.com/bouldering-league/';
    window.scrollTo(0, 0);
  };

  const senderOneHomePage = async (event) => {
    event.preventDefault();
    window.location.href = 'https://www.senderoneclimbing.com/sna/';
    window.scrollTo(0, 0);
  };

  const handlePhotoPage = async (event) => {
    event.preventDefault();
    window.location.href = 'https://lightroom.adobe.com/shares/edbe685b58f34d7690c731af0fe13cd2';
    window.scrollTo(0, 0);
  };




  return (

    <div className="homePage w-100">

      <MainHeader />

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="">

          
          {/* <img src={require("../img/BoulderLeague24.png")}
            className="headerLogo"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => HeaderLogoClicked(event)}
            alt="Bouldering League Banner" /> */}
          {/* <h1 className="text-center mt-5 mx-5 welcomeText">Home Page!</h1> */}

          <div className="text-center homeMenu row mt-3 d-flex align-items-center justify-content-center">
            <div className="row px-5 py-3 pt-5">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleTeamRankings(event)}>Team Rankings</div>
            </div>
            {/* <div className="row px-5 py-3">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleTeamPages(event)}>Team Pages</div>
            </div> */}
            {/* <div className="row px-5 py-3">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleClimberProfile(event)}>Climber Profiles</div>
            </div> */}
            <div className="row px-5 py-3 pt-4">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleSubmitScorecard(event)}>Week 4 Scorecard</div>
            </div>
            <div className="row px-5 py-3 pt-4">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handleEventUpdates(event)}>Event Updates</div>
            </div>
            <div className="row px-5 py-3 pt-4">
              <div className="homeBTNs p-2 d-flex align-items-center justify-content-center" onClick={(event) => handlePhotoPage(event)}>Photos / Videos</div>
            </div>
            <div className="row px-5 pt-3 mb-2 pt-4" >
              <div className="homeBTNs p-2 mb-0 d-flex align-items-center justify-content-center" onClick={(event) => handleEventInfo(event)}>Competition Information</div>
            </div>
          </div>
          
          {/* <div className="text-center d-flex mb-2 align-items-center justify-content-center">
          <img src={require("../img/SenderOneLogo.png")}
            className="footerLogo align-items-center justify-content-center"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" />
          </div> */}

          {/* <div className="text-center d-flex">
          <img src={require("../img/SenderOneLogo.png")}
          // <img src={require("../img/Sponsors_2.png")}
            className="footerLogo align-items-center justify-content-center"
            style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" />
          </div> */}

          {/* <div className="mb-0 mt-2 footerContainer">
            <Navbar className="d-flex FooterClass" fixed="bottom" expand="lg">
              <Container className="p-0 justify-content-center footerContainer">
                <div className="text-center d-flex">
                  <img src={require("../img/Sponsors_2.png")}
                    className="footerLogo align-items-center justify-content-center"
                    onClick={() => senderOneHomePage(event)}
                    alt="SenderOne Logo" />
                </div>
              </Container>
            </Navbar>
          </div> */}
          <MainFooter />
        </div>

      </div>


    </div>

  )
}

export default HomePage;


//!========================= EOF =========================