export default function ListingCard( {wine} ) {

    // const {wine, image, description, location, winery, rating} = wine;

    console.log( {wine} )

    return(
        <div className="card">
           <img src={wine.image} alt={wine.title}/>
                <p>{wine.description}</p>
                <p>{wine.location}</p>
                <p>{wine.winery}</p>
                <h3>{wine.wine}</h3>
            <details>
                <summary>Rating</summary>
                <p>{wine.rating.average}</p>
                <p>{wine.rating.reviews}</p>
            </details>
        </div>
    )
}