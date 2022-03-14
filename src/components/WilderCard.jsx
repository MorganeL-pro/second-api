import React from 'react';

function WilderCard({wilder}) {

  return (
    <div>
      <img
        src="https://chaire-eti.org/wp-content/uploads/2018/01/avatar-homme.png"
        alt="wilder"
      /> 
        <h3 className="card-title">{wilder.name}</h3>
        <p className="card-text">{wilder.city}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Atque exercitationem qui ab laudantium ex molestias voluptates alias,
          numquam repellendus voluptatum.</p>
        <h3>Wild Skills</h3>
        {wilder.skills.map(({title, votes, _id}, wilderIndex) =>(
            <div key={_id}>
              <span>{title}</span>
              <span>{votes}</span>
            </div>
        ))}
    </div>
  )
}
 
export default WilderCard;