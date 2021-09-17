import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import '../CustomStyles/TinderCards.css'
import axios from '../axios';

function Card() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/cards')

            setPeople(req.data);
        }
        /*return () => {
            cleanup
        }*/
        fetchData();
    }, [])

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
                    <div style={{backgroundImage:`url(${person.imgUrl})`}}
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
