import { useState, useEffect } from "react"
import ListingCard from "../ListingCard"

export default function Listing() {
    const [wines, setWines] = useState();
    const [type, setType] = useState('whites');

    useEffect ( () => {
        fetch(`https://api.sampleapis.com/wines/${type}`)
            .then( res => res.json() )
            .then( setWines )
            .catch( err => console.error(err) )

    }, [type])

    // console.log({wines})
    return(
        <>
        <div id="topheader">
            <header>
                <h1>Le Chateau Amor</h1>
            </header>
       
            <nav>
                <button onClick={ () => setType("whites") }>White</button>
                <button onClick={ () => setType("reds") }>Red</button>
            </nav>
        </div>
            <div>
                {!wines
                ? (<h2>Welcome to the site, choose above.</h2>)
                : (<section>
                    { wines.map( (element) => {

                    return <ListingCard key={element.id}wine={element}/>
                    }) }
                </section>)}
            </div>
        
        </>
    )
}