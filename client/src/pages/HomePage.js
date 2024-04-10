// import SideBar from "../components/Sidebar";
// import Header from "../components/Header";


const HomePage = () => {

  return (

    <div className="homePage">

      {/* <Header /> */}

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="w-100">

          <h1 className="text-center mt-5 mx-5 welcomeText">Home Page!</h1>
          <img src={require("../img/SNA_BoulderLeague24_WebHead.png")}
            className="headerLogo my-3"
            style={{paddingLeft: "63px", paddingRight: "63px"}}
            // onClick={() => HeaderLogoClicked(event)}
            alt="Bouldering League Banner" />

        </div>

      </div>


    </div>

  )
}

export default HomePage;


//!========================= EOF =========================