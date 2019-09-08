import React, { Component } from 'react';
import data from './data.json';
import CharacterCard from './components/Cards';
import Container from './components/Container';
import $ from 'jquery';
var shuffle = require('shuffle-array'),
    alertify = require('alertifyjs');

class App extends Component {
  
  state = {
    data,
    currentScore: 1,
    topScore: 0,
    clicked: []
  };

  scoreCount = id => {
    //declaring variables
    let clicked = this.state.clicked;
    let topScore = this.state.topScore;

    if(clicked.indexOf(id) === -1){
      clicked.push(id)
      this.setState({ 
        data: shuffle(data),
        currentScore: this.state.currentScore+1
      });
      //displaying the current scores per right click
      $('#scoreValue').text(this.state.currentScore);
    }else{
      Alertify(
        `<h1 class="game-status">You Lost</h1>`
      )
      $('#scoreValue').text(0);
      if(this.state.currentScore > this.state.topScore){
        topScore = this.state.currentScore-1;
        this.setState({ 
          currentScore: 1,
          topScore: topScore,
          clicked: []
        });
      }else{
        this.setState({ 
          currentScore: 1,
          clicked: []
        });
      }
      
      //displaying the current top score
      $('#topScoreValue').text(topScore);
    }
    
    if(this.state.clicked.length === this.state.data.length){
      Alertify(
        `<h1 class="game-status">You Win</h1>`
      )

      $('#scoreValue').text(0);
      topScore = this.state.clicked.length;
      this.setState({ 
        currentScore: 1,
        topScore: this.state.clicked.length,
        clicked: []
      });
      $('#topScoreValue').text('You Win!');
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


function Alertify(x) {
  alertify.minimalDialog || alertify.dialog('minimalDialog',function(){
      return {
          main:function(content){
              this.setContent(content); 
          },
          setup:function(){
              return{
                  options:{
                      title: 'Clicky Game'
                  }
              }
          }
      };
  });
  alertify.minimalDialog(x);
}