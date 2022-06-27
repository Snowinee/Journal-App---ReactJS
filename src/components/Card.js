import '../css/Card.css'



export default function Main(props) {
    return (
            <div className='container'>
                <div className="card">
                    <section className="locationCover">
                        <img src={props.item.imageUrl} />
                    </section>
                    <section className="description">
                        <section className="descHeader">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="location">{props.item.location}</p>
                            <a href={props.item.googleMapsUrl} target="_blank" className="mapLink">View on Google Maps</a>
                        </section>
                        <h2 className="locationTitle">{props.item.title}</h2>
                        <p className="locationDate">{props.item.startDate} - {props.item.endDate}</p>
                        <p className="locationDesc">{props.item.description}</p>
                    </section>
                </div>
            </div>
    )
}