import React from 'react';

import UserCard from './component/UserCard'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Th5tch3r")
      .then(res => res.json())
      .then(res => this.setState({ userData: res }))
      .catch(err => console.log(err));

    fetch("https://api.github.com/users/Th5tch3r/followers")
      .then(res => res.json())
      .then(res => this.setState({userFollowers: res}))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.userData)
    return(
     <div className="App">
      <header className="App-header">
        <h1>Github User Card!</h1>
      </header>
      <div className="body">
        <UserCard
          key={this.state.userData.id}
          avatar={this.state.userData.avatar_url}
          name={this.state.userData.name}
          userName={this.state.userData.login}
          location={this.state.userData.location}
          follower={this.state.userData.followers}
          following={this.state.userData.following}
         />
      </div>
    </div>
    )
  }
}


export default App;
