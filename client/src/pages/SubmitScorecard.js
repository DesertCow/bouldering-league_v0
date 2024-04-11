// import SideBar from "../components/Sidebar";
// import Header from "../components/Header";

// import { useNavigate } from "react-router-dom";


const SubmitScorecard = () => {


  return (

    <div className="homePage">

      {/* <Header /> */}

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="w-100">

          
          <img src={require("../img/SNA_BoulderLeague24_WebHead.png")}
            className="headerLogo"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => HeaderLogoClicked(event)}
            alt="Bouldering League Banner" />

          <h1 className="text-center mt-5 mx-5 welcomeText">Scorecard Page!</h1>
          
          <div className="text-center d-flex mb-2 align-items-center justify-content-center">
          <img src={require("../img/SenderOneLogo.png")}
            className="footerLogo align-items-center justify-content-center"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" />
          </div>


        </div>

      </div>


    </div>

  )
}

export default SubmitScorecard;


//!========================= EOF =========================