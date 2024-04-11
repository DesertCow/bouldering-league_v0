// import SideBar from "../components/Sidebar";
// import Header from "../components/Header";

// import { useNavigate } from "react-router-dom";


const TeamRankings = () => {


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

          {/* <h1 className="text-center mt-5 mx-5 welcomeText">Team Rankings Page!</h1> */}
          <div className="tableDiv mt-3 px-3">
            <table className="teamRankingsTable text-center w-100 mt-3 p-3">
              <thead className="teamRankingsTableTitle">
                <tr>
                  <th className="teamRankingsTableRank p-1" >Ranking</th>
                  <th className="teamRankingsTableTeamName p-1" >Team Name</th>
                  <th className="teamRankingsTablePoints p-1">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="teamRankingsTableRank">1</td>
                  <td className="teamRankingsTableTeamName">Team A</td>
                  <td className="teamRankingsTablePoints">100</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">2</td>
                  <td className="teamRankingsTableTeamName">Team B</td>
                  <td className="teamRankingsTablePoints">99</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">3</td>
                  <td className="teamRankingsTableTeamName">Team C</td>
                  <td className="teamRankingsTablePoints">98</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">4</td>
                  <td className="teamRankingsTableTeamName">Team D</td>
                  <td className="teamRankingsTablePoints">97</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">5</td>
                  <td className="teamRankingsTableTeamName">Team E</td>
                  <td className="teamRankingsTablePoints">96</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">6</td>
                  <td className="teamRankingsTableTeamName">Team F</td>
                  <td className="teamRankingsTablePoints">95</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">7</td>
                  <td className="teamRankingsTableTeamName">Team G</td>
                  <td className="teamRankingsTablePoints">94</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">8</td>
                  <td className="teamRankingsTableTeamName">Team H</td>
                  <td className="teamRankingsTablePoints">93</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">9</td>
                  <td className="teamRankingsTableTeamName">Team I</td>
                  <td className="teamRankingsTablePoints">92</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">10</td>
                  <td className="teamRankingsTableTeamName">Team J</td>
                  <td className="teamRankingsTablePoints">91</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">11</td>
                  <td className="teamRankingsTableTeamName">Team A2</td>
                  <td className="teamRankingsTablePoints">90</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">12</td>
                  <td className="teamRankingsTableTeamName">Team B2</td>
                  <td className="teamRankingsTablePoints">89</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">13</td>
                  <td className="teamRankingsTableTeamName">Team C2</td>
                  <td className="teamRankingsTablePoints">88</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">14</td>
                  <td className="teamRankingsTableTeamName">Team D2</td>
                  <td className="teamRankingsTablePoints">87</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">15</td>
                  <td className="teamRankingsTableTeamName">Team E2</td>
                  <td className="teamRankingsTablePoints">86</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">16</td>
                  <td className="teamRankingsTableTeamName">Team F2</td>
                  <td className="teamRankingsTablePoints">85</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">17</td>
                  <td className="teamRankingsTableTeamName">Team G2</td>
                  <td className="teamRankingsTablePoints">84</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">18</td>
                  <td className="teamRankingsTableTeamName">Team H2</td>
                  <td className="teamRankingsTablePoints">83</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">19</td>
                  <td className="teamRankingsTableTeamName">Team I2</td>
                  <td className="teamRankingsTablePoints">82</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">20</td>
                  <td className="teamRankingsTableTeamName">Team J2</td>
                  <td className="teamRankingsTablePoints">81</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* <div className="text-center d-flex mb-2 align-items-center justify-content-center">
          <img src={require("../img/SenderOneLogo.png")}
            className="footerLogo align-items-center justify-content-center"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" 
          />
          </div> */}


        </div>

      </div>


    </div>

  )
}

export default TeamRankings;


//!========================= EOF =========================