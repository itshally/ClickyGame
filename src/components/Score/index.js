import React from 'react';
import './style.css';

const Score = x => {
     return (
          <div className="Score">
               <div className="container-fluid score-header">
                    <div className="row">
                         <div className="col-12 col-md-4">
                              <label>Clicky Game</label>
                         </div>
                         <div className="col-12 col-md-4">
                              <label id="status">Click an image to begin!</label>
                         </div>
                         <div className="col-12 col-md-4">
                              <label className="score-labels" id="score-holder">
                                   Score: <span id="scoreValue">0</span>
                              </label> | 
                              <label className="score-labels" id="top-score-holder">
                                   Top Score: <span id="topScoreValue">{x.topScore}</span>
                              </label>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Score;