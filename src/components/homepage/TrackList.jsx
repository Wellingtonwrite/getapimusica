
import {deleteTrack} from "../../store/slices/tracks.slice"
import { useDispatch } from 'react-redux'


const TrackList = ({track}) => {

    const dispatch = useDispatch()

const handleDelete = () => {
    dispatch(deleteTrack(track))
}

  return (
    <section>
        <img src={track.album.images[0].url} alt="" />
        <article>
            <h3>
                {track.name}
            </h3>
            <ul>
                {
                    track.artists.map(artist => (
                        <li key ={artist.id}>{artist.name}</li>
                    ))

                }
            </ul>
        </article>
        <footer onClick={handleDelete}>
            
        <i  className='bx bx-minus-circle'></i>
        </footer>
    </section>


  )
}

export default TrackList