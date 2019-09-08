import React, { Component } from 'react';
import data from './data.json';
import CharacterCard from './components/Cards';
import Container from './components/Container';
import $ from 'jquery';
var shuffle = require('shuffle-array');

class App extends Component {
  
  state = {
    data,
    currentScore: 1,
    topScore: 0,
    clicked: []
  };

  scoreCount = id => {
    
    let clicked = this.state.clicked;
    let topScore = this.state.topScore;
    console.log('image clicked')
    // shuffle(this.state.data)
    if(clicked.indexOf(id) === -1){
      
      clicked.push(id)
      this.setState({ 
        data: shuffle(data),
        currentScore: this.state.currentScore+1
      });

      console.log(shuffle(this.state.data));
      console.log(this.state.currentScore); 

      $('#scoreValue').text(this.state.currentScore);

      // $('#topScoreValue').text(this.state.topScore);
 
    }
    
    //change 5 to this.state.data.length
    if(this.state.clicked.length === 3){
      $('#scoreValue').text(0);
      topScore = this.state.currentScore;
      this.setState({ 
        currentScore: 1,
        topScore: topScore,
        clicked: []
      });
      console.log(this.state.topScore)
      $('#topScoreValue').text(topScore);
      alert('done!')
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
