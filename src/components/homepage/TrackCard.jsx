import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from 'react-router-dom'
import './shared/style/TrackCard.css'

const TrackCard = ({ track }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTrack(track))
    }

    const handleArtist =(id)  => {
navigate(`/artist/${id}`)
    }

    return (
        <section className="trackCard_container">
            <header className="trackCard_header">
                <img className="trackCard_img" src={track.album.images[0].url} alt="" />
                <article className="trackCard_body">
                <Link to={`/track/${track.id}`}><h3 className="trackCard_title">{track.name}</h3></Link >
                <ul>
                    {
                        track.artists.map(artist => (
                            <li 
                            onClick={()=> handleArtist(artist.id)} 
                            key={artist.id}
                            >{artist.name}</li>
                        ))
                    }
                </ul>
            </article>

            </header>
            <footer className="trackCard_footer">
                <a target="_blank" href={track.external_urls.spotify}>
                    <i className='bx bxl-spotify'></i>
                </a>                
                    <i className='bx bx-plus-circle' onClick={handleAddTrack}></i>
            </footer>

        </section>

    )
}

export default TrackCard