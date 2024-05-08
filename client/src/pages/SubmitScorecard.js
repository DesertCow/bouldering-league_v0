
import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

import Button from 'react-bootstrap/Button';

import Switch from "react-switch";
import React, { Component, useState } from "react";

import { useNavigate } from "react-router-dom";


const SubmitScorecard = () => {

  const navigate = useNavigate();


  // ======================================================

  const [checked, setChecked] = useState(false);
  const flashSwitch = nextChecked => {
    setChecked(nextChecked);
  };

  const [checked2, setChecked2] = useState(false);
  const sendSwitch = nextChecked2 => {
    setChecked2(nextChecked2);
  };

  const [checked3, setChecked3] = useState(false);
  const flashSwitch2 = nextChecked3 => {
    setChecked3(nextChecked3);
  };

  const [checked4, setChecked4] = useState(false);
  const sendSwitch2 = nextChecked4 => {
    setChecked4(nextChecked4);
  };

  const [checked5, setchecked5] = useState(false);
  const flashSwitch3 = nextchecked5 => {
    setchecked5(nextchecked5);
  };

  const [checked6, setchecked6] = useState(false);
  const sendSwitch3 = nextchecked6 => {
    setchecked6(nextchecked6);
  };

  const [checked7, setchecked7] = useState(false);
  const flashSwitch4 = nextchecked7 => {
    setchecked7(nextchecked7);
  };

  const [checked8, setchecked8] = useState(false);
  const sendSwitch4 = nextchecked8 => {
    setchecked8(nextchecked8);
  };

  
  // ======================================================


  const HeaderLogoClicked = async (event) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };

  const scorecardSubmitRequest = async (event) => {
    console.log('Request to submit scorecard');
    confirm("Press OK to submit scorecard othewise click cancel");
  }

  const scorecardSaveLocal = async (event) => {
    console.log('Scorecard Saved Locally');
    alert("Scorecard Saved Locally!");
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

          <h1 className="text-center mb-5 mx-5 welcomeText scorecardTitleText">Week 4 Scorecard</h1>

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
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">2</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch2} checked={checked3} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch2} checked={checked4} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">3</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch4} checked={checked7} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch4} checked={checked8} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">4</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">5</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">6</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">7</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">8</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">9</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">10</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">11</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">12</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">13</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">14</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">15</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">16</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">17</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">18</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">19</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
              <tr>
                <td className="scorecardTableRank">20</td>
                <td className="scorecardTableTeamName p-2"><Switch onChange={flashSwitch3} checked={checked5} className="react-switch"/></td>
                <td className="scorecardTableTeamName"><Switch onChange={sendSwitch3} checked={checked6} className="react-switch"/></td>
                <td className="scorecardTableWitness"><input className="witnessInput" id="witness#1" name="witness#1" type="text" /></td>
              </tr>
            </tbody>
          </table>
          

          <div className='scorcardSubmitButtonGroup text-center mt-5 d-flex flex-row'>
            <Button className="mx-3 scorecardButton" onClick={() => scorecardSaveLocal(event)} variant="success">Save Scorecard <br></br>(Locally)</Button>{' '}
            <Button className="mx-3 scorecardButton" onClick={() => scorecardSubmitRequest(event)} variant="warning">Submit Scorecard</Button>{' '}
            <Button className="mx-3 scorecardButton" onClick={() => scorecardClear(event)} variant="danger">Clear Scorecard</Button>{' '}
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