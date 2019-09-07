import React from 'react';
import './style.css';

const CharacterCard = x => {
     return (
          <div className="card text-center" onClick={() => x.scoreCount(x.id)} style={{width: 18 + 'rem'}}>
               <div className="card-body" id={x.id}>
                    <h5 className="card-title">{x.name}</h5>
                    <img alt={x.name} src={x.image}/>
               </div>
          </div>
     );
}    

export default CharacterCard;