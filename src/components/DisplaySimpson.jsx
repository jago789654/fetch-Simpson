import React from 'react';


function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className='DisplaySimpson'>
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>{simpson.quote}
          </li>
          <li>{simpson.character} 
          </li>
          <li>{simpson.characterDirection}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;