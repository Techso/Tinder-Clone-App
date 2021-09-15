import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import '../CustomStyles/TinderCards.css'

function Card() {
    const [people, setPeople] = useState([
        {
            name: 'Adeoti Faith',
            image: ''
        },
        {
            name: 'Olaiya Ore',
            image: ''
        },
        {
            name: 'Enoch Tomiwa',
            image: ''
        },
        {
            name: 'Agbabiaka Adewale',
            image: ''
        },
        {
            name: 'Victoria Oyin',
            image: ''
        }
    ])

    const onSwipe = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        //setLastDirection(direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="TinderCards">
            
            <div className="TinderCardsContainer">
            {people.map((person)=>(
                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir)=>onSwipe(dir, person.name)}
                    onCardLeftScreen={()=>onCardLeftScreen(person.name)}
                >
                    <div style={{backgroundImage:`url(${person.image})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                     
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default Card
