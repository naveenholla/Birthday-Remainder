import React from 'react';

const List = ({people}) => {
 
  return (
    <>
      {people.map((person)=> 
      {const id = person.id
       const name = person.name
       const  age = person.age
       const image = person.image
       if(age >29){

        return (<article key={id} className='person'>
           
          <img src={image} alt='img1c'></img>
          <div>
          <h4>{name}</h4>
          <p>{age}</p>
          </div>
          
    
    </article>
    )
       }
        
          
      }
      )}
      
    </>
  );
};

export default List;
