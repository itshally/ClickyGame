import React, { Component } from 'react';
import data from './data.json';
import CharacterCard from './components/Cards';
import Container from './components/Container';

var shuffle = require('shuffle-array');

class App extends Component {
  state = {
    data,
    currentScore : 0,
    topScore : 0,
    clicked: []
  };

  scoreCount = id => {
    let clicked = this.state.clicked;
    // console.log(this.state.data)
    console.log('image clicked')
    // shuffle(this.state.data)
    if(clicked.indexOf(id) === -1){
      clicked.push(id)
      this.setState({ data: shuffle(data) });
      console.log(shuffle(this.state.data))
    }
  };

  render(){
    return (
      <div className="App container">
        <Container>
          <div className="row">
            {this.state.data.map(character => (
              <CharacterCard
                key={character.id}
                scoreCount={this.scoreCount}
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </Container>
      </div>

    );
  }
}

export default App;
