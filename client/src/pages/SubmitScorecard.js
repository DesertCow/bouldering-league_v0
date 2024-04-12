// import SideBar from "../components/Sidebar";
// import Header from "../components/Header";

// import { useNavigate } from "react-router-dom";

import Switch from "react-switch";
import React, { Component, useState } from "react";


const SubmitScorecard = () => {

  const [checked, setChecked] = useState(false);
  const flashSwitch = nextChecked => {
    setChecked(nextChecked);
  };

  const [checked2, setChecked2] = useState(false);
  const sendSwitch = nextChecked2 => {
    setChecked2(nextChecked2);
  };

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

          {/* <h1 className="text-center mt-5 mx-5 welcomeText">Scorecard Page!</h1> */}

          <table className="teamRankingsTable text-center w-100 mt-3 p-3">
            <thead className="scorecardTableTitle">
              <tr>
                <th className="teamRankingsTableRank p-1">Problem #</th>
                <th className="teamRankingsTableRank p-1">Flash?</th>
                <th className="teamRankingsTableRank p-1">Witness</th>
                <th className="teamRankingsTableRank p-1">Redpoint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="scorecardTableRank">1</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">2</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">3</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">4</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">5</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">6</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">7</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">8</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">9</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">10</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">11</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">12</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">13</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">14</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">15</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">16</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">17</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">18</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">19</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">20</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableWitness"></td>
                <td className="scorecardTableWitness"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
              </tr>
            </tbody>
          </table>
          
          {/* <div className="text-center d-flex mb-2 align-items-center justify-content-center">
          <img src={require("../img/SenderOneLogo.png")}
            className="footerLogo align-items-center justify-content-center"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" />
          </div> */}


        </div>

      </div>


    </div>

  )
}

export default SubmitScorecard;


//!========================= EOF =========================