import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  name: string;
  school: string;
  city: string;
  state: string;
}

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

function Team(props: TeamProps) {
  return (
    <div className="team">
      <h2>{props.school}</h2>
      <h3>Mascot: {props.name}</h3>
      <h3>
        Location: {props.city}, {props.state}
      </h3>
    </div>
  );
}

function CollegeList() {
  return (
    <div>
      {data.teams.map((team: TeamProps, index: number) => (
        <React.Fragment key={team.name}>
          <Team {...team} />
          {index !== data.teams.length - 1 && (
            <hr className="team-divider" />
          )}{' '}
          {}
        </React.Fragment>
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
