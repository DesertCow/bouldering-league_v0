
import { useNavigate } from "react-router-dom";


const MainHeader = () => {


  const navigate = useNavigate();

  const HeaderLogoClicked = async (event) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };


  return (

    <div className="">

    <img src={require("../../img/BoulderLeague24.png")}
      className="headerLogo"
      // style={{paddingLeft: "63px", paddingRight: "63px"}}
      onClick={() => HeaderLogoClicked(event)}
      alt="Bouldering League Banner" />

    </div>

  );
};

export default MainHeader;