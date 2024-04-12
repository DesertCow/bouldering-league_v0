import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import { MaterialSymbol } from 'react-material-symbols';
import { useNavigate } from "react-router-dom";


const MainFooter = () => {


  const navigate = useNavigate();

  const footerClicked = async (event) => {
    event.preventDefault();
    // window.location.href = 'https://www.senderoneclimbing.com/sna/';
    navigate("/");
    window.scrollTo(0, 0);
  };


  return (

    <div className="mb-0 mt-2 footerContainer">
      <Navbar className="d-flex FooterClass" fixed="bottom" expand="lg">
        <Container className="p-0 justify-content-center footerContainer">
          <div className="text-center d-flex">
            <img src={require("../../img/Sponsors_2.png")}
              className="footerLogo align-items-center justify-content-center"
              onClick={() => footerClicked(event)}
              alt="SenderOne Logo" />
          </div>
        </Container>
      </Navbar>
    </div>

  );
};

export default MainFooter;


//!========================= EOF =========================