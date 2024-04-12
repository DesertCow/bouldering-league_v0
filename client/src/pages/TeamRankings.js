import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

// import { useNavigate } from "react-router-dom";


const TeamRankings = () => {


  return (

    <div className="homePage w-100">

      <MainHeader />

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="w-100">

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
                  <td className="teamRankingsTableTeamName">TBD 7</td>
                  <td className="teamRankingsTablePoints">138</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">2</td>
                  <td className="teamRankingsTableTeamName">Maximum Effort</td>
                  <td className="teamRankingsTablePoints">136</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">3</td>
                  <td className="teamRankingsTableTeamName">Skin Issue</td>
                  <td className="teamRankingsTablePoints">134</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">4</td>
                  <td className="teamRankingsTableTeamName">Gravity Crushers</td>
                  <td className="teamRankingsTablePoints">127</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">5</td>
                  <td className="teamRankingsTableTeamName">Beta Males</td>
                  <td className="teamRankingsTablePoints">126</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">5</td>
                  <td className="teamRankingsTableTeamName">Here to Touch Rocks and Eat Chalk</td>
                  <td className="teamRankingsTablePoints">126</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">7</td>
                  <td className="teamRankingsTableTeamName">Idk</td>
                  <td className="teamRankingsTablePoints">124</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">8</td>
                  <td className="teamRankingsTableTeamName">GenXSenders</td>
                  <td className="teamRankingsTablePoints">122</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">8</td>
                  <td className="teamRankingsTableTeamName">Summertime Sendness</td>
                  <td className="teamRankingsTablePoints">122</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">10</td>
                  <td className="teamRankingsTableTeamName">Los Jugs and Pinches</td>
                  <td className="teamRankingsTablePoints">112</td>
                </tr>
                <tr>
                  <td className="teamRankingsTableRank">10</td>
                  <td className="teamRankingsTableTeamName">Edge Masters</td>
                  <td className="teamRankingsTablePoints">112</td>
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

    <MainFooter />

    </div>

  )
}

export default TeamRankings;


//!========================= EOF =========================