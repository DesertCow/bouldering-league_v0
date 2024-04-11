//* Bouldering League Web App
//* By Clayton Skaggs
//* Version 0.1 [WW15.2]


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// import { MaterialSymbol } from 'react-material-symbols';
// import 'react-material-symbols/dist/rounded.css';

//* Font Import
// import "./fonts/Catamaran-Bold.ttf"

//* Page Import

import HomePage from './pages/HomePage';
import TeamRankings from './pages/TeamRankings';
import SubmitScorecard from './pages/SubmitScorecard';
import EventUpdates from './pages/EventUpdates';


//* Component Import



export default function App() {

  require('./css/style.css')
  require('./css/reset.css')

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team_rankings" element={<TeamRankings />} />
        <Route path="/scorecard" element={<SubmitScorecard />} />
        <Route path="/updates" element={<EventUpdates />} />
        {/* <Route path="/staff" element={<Staff />} /> */}
      </Routes>
    </Router>
  );
}