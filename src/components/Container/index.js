import React from 'react';
import './style.css';

let Container = container => {
     return (
          <div className="container wrapper">
               {container.children}
          </div>
     );
}    

export default Container;