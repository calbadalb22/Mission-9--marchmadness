import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  name: string;
  mascot: string;
  location: string;
}
const teamNames = [
  {
    name: 'BYU',
    mascot: 'Cougar',
    location: 'Provo, Utah',
  },
  {
    name: 'UCLA',
    mascot: 'Bruin',
    location: 'Los Angeles',
  },
  {
    name: 'Texas',
    mascot: 'Longhorns',
    location: 'Austin, Texas',
  },
  {
    name: 'UVU',
    mascot: 'Wolverine',
    location: 'Orem, Utah',
  },
];

function Title() {
  return <h1>March Madness</h1>;
}

function Welcome() {
  return (
    <h3>
      March Madness is upon us. In order to prepare, I made this website to give
      you a little refresher on all the teams
    </h3>
  );
}
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img />
        <h2>{oneTeam.name}</h2>
        <h3>Mascot: {oneTeam.mascot}</h3>
        <h3>Location: {oneTeam.location}</h3>
      </div>
    );
  }
}

function CollegeList() {
  return (
    <div>
      {teamNames.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Title />
      <Welcome />
      <CollegeList />
    </div>
  );
}

export default App;
