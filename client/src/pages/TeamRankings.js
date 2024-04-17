import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

import teamRankingData from '../utils/week3TeamRanking.json';
console.log(teamRankingData);

// import { useNavigate } from "react-router-dom";


const TeamRankings = () => {

  function populateTeamLeaderboardHTML(leaderboardData) {

    var sessionListHTML = []

    // console.log("Leaderboard Data (S): " + JSON.stringify(leaderboardData));
    // console.log("Leaderboard Data (Rank): " + JSON.stringify(leaderboardData.Rank));
    // console.log("Leaderboard Data (Team Name): " + JSON.stringify(leaderboardData.Team_Name));
    // console.log("Leaderboard Data (Points): " + JSON.stringify(leaderboardData.Points));
    // console.log("Leaderboard Data (S): " + JSON.stringify(leaderboardData));
    // console.log("Leaderboard Data (Raw) " + leaderboardData);

    
    //* Create Buttons based user sessions pulled from DB
    // sessionListHTML.push(<li key={sessionData._id} onClick={(event) => displayItem(event, sessionData.sessionDate, essionData.sessionTime)} className="subMenuBtns m-4 p-2"><div variant="light">{sessionData._id}</div>{' '}</li>)
    // sessionListHTML.push(<li key={sessionData._id} onClick={(event) => displaySurfSession(event, sessionData._id)} className="previousSurfSessionBTN mt-4 p-3">{sessionData.sessionDate} ({sessionData.sessionTime}) @ {sessionData.sessionLocation}</li>)
    // console.log(sessionListHTML)

    
    leaderboardHTML.push(
      <tr>
        <td className="teamRankingsTableRank"> {leaderboardData.Rank} </td> 
        <td className="teamRankingsTableTeamName p-1" > {leaderboardData.Team_Name} </td>
        <td className="teamRankingsTablePoints p-1"> {leaderboardData.Points} </td>
      </tr>

    )
    // leaderboardHTML.push(<td className="teamRankingsTableTeamName p-1" > {leaderboardData.Team_Name} </td> )
    // leaderboardHTML.push(<td className="teamRankingsTablePoints p-1"> {leaderboardData.Points} </td> )
  }

  var leaderboardHTML = []

  //* Generate Line in the table for each team
  teamRankingData.forEach(populateTeamLeaderboardHTML)

  console.log(leaderboardHTML)

  return (

    <div className="homePage w-100">

      <MainHeader />

      <div className="d-flex flex-row">

        {/* <SideBar/> */}

        <div className="w-100 leaderboardTable">

          {/* <h1 className="text-center mt-5 mx-5 welcomeText">Team Rankings Page!</h1> */}
          <div className="tableDiv my-3 px-3">
            <table className="teamRankingsTable text-center w-100 mt-3 p-3">
              <thead className="teamRankingsTableTitle">
                <tr>
                  <th className="teamRankingsTableRank p-1" >Ranking</th>
                  <th className="teamRankingsTableTeamName p-1" >Team Name</th>
                  <th className="teamRankingsTablePoints p-1">Points</th>
                </tr>
              </thead>
              <tbody>

                {leaderboardHTML}

              </tbody>
            </table>
          </div>
        </div>

      </div>

    <MainFooter />

    </div>

  )
}

export default TeamRankings;


//!========================= EOF =========================