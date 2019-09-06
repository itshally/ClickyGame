import React, { Component } from 'react';
import data from './data.json';
import CharacterCard from './components/Cards';
import Container from './components/Container';

// function App() {
//   return (
//     <div className="App">
//       <div className="row">
//         <div className="col-12 col-md-4 col-lg-3"></div>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  state = {
    data
  };

  disablePhoto = id => {
    const img = this.state.data.filter(data => data.id !== id);
    this.setState({ data });
  }

  render(){
    return (
      <div className="App container">
        

        <Container>
        <div className="row">
        {this.state.data.map(character => (
          <CharacterCard
            key={character.id}
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
