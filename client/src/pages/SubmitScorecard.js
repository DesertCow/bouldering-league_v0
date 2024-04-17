
import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

import Button from 'react-bootstrap/Button';

import Switch from "react-switch";
import React, { Component, useState } from "react";

import { useNavigate } from "react-router-dom";


const SubmitScorecard = () => {

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const flashSwitch = nextChecked => {
    setChecked(nextChecked);
  };

  const [checked2, setChecked2] = useState(false);
  const sendSwitch = nextChecked2 => {
    setChecked2(nextChecked2);
  };

  const HeaderLogoClicked = async (event) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };

  const scorecardSubmitRequest = async (event) => {
    console.log('Request to submit scorecard');
    confirm("Press OK to submit scorecard othewise click cancel");
  }

  const scorecardClear = async (event) => {
    console.log('Request to Clear Scorecard');
    alert("Scorecard Cleared!");
  }

  return (

    <div className="homePage w-100">

      <MainHeader />

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="w-100 mx-4">

          <h1 className="text-center mb-4 mx-5 welcomeText scorecardTitleText">Week 3</h1>

          <table className="teamRankingsTable text-center w-100">
            <thead className="scorecardTableTitle">
              <tr>
                <th className="teamRankingsTableRank p-1">Problem #</th>
                <th className="teamRankingsTableRank p-1">Redpoint</th>
                <th className="teamRankingsTableRank p-1">Flash?</th>
                <th className="teamRankingsTableRank p-1">Witness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="scorecardTableRank">1</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">2</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">3</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">4</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">5</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">6</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">7</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">8</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">9</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">10</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">11</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">12</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">13</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">14</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">15</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">16</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">17</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">18</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">19</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">20</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch} checked={checked} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch} checked={checked2} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input id="witness#1" name="witness#1" type="text" /></td>
              </tr>
            </tbody>
          </table>
          

          <div className='scorcardSubmitButtonGroup text-center mt-5 d-flex flex-row'>
            <Button className="mx-5 scorecardButton" onClick={() => scorecardSubmitRequest(event)} variant="success">Save Scorecard <br></br>(Locally)</Button>{' '}
            <Button className="mx-5 scorecardButton" onClick={() => scorecardSubmitRequest(event)} variant="warning">Submit Scorecard</Button>{' '}
            <Button className="mx-5 scorecardButton" onClick={() => scorecardClear(event)} variant="danger">Clear Scorecard</Button>{' '}
          </div>

          {/* <div className="text-center d-flex mb-2 align-items-center justify-content-center">
          <img src={require("../img/SenderOneLogo.png")}
            className="footerLogo align-items-center justify-content-center"
            // style={{paddingLeft: "63px", paddingRight: "63px"}}
            onClick={() => senderOneHomePage(event)}
            alt="SenderOne Logo" />
          </div> */}


        </div>

      </div>

      <MainFooter />

    </div>

  )
}

export default SubmitScorecard;


//!========================= EOF =========================