import {useState} from "react"
import cards_data from "../my_data/index"

export default function Cards(){
    const [card] = useState(cards_data);
    console.log(card);
    return(
        <div className="cards-section">
        {card.map((c) => (
            <div key={c.id} className="card-container">
                <img src={c.img} className="card-img"/>
                <p className="card-s">{c.sold_out}</p>
                <div className="card-top">
                   <img src={c.star} className="rating_star"/>
                    <span className="rating">{c.rating}</span>
                    <span className="country">(6).USA</span>
                </div>
                <p className="card-about">{c.about}</p>
                <p className="card-from">{c.from}</p>
            </div>
          ))}
        </div>
    )
}