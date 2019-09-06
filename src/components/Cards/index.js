import React from 'react';
import './style.css';

const CharacterCard = x => {
     return (
          <div class="card text-center" style={{width: 18 + 'rem'}}>
               <div class="card-body" id={x.id}>
                    <h5 class="card-title">{x.name}</h5>
                    <img alt={x.name} src={x.image}/>
               </div>
          </div>
     );
}    

export default CharacterCard;