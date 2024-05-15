import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "./SingleCard";





const PostCard = () => {
 const [cards,setCards]=useState([])
useEffect(()=>{
  fetch('card.json')
  .then(res=>res.json())
  .then(data=>setCards(data))
},[])
    return (
        <div className='mt-10 space-y-4'>
          <h1 className="text-4xl text-center text-purple-500">OUR EVERYDAY UPDATED POST:</h1>
       <h1 className="text-2xl text-center">Discover Our Exquisite Fleet: Unveiling Automotive Brilliance</h1>
       <div className=" grid md:grid-cols-4 gap-4">
        {
         cards.map(card=><SingleCard key={card.id} card={card}></SingleCard>) 
        }
       </div>
        </div>
    );
};

export default PostCard;