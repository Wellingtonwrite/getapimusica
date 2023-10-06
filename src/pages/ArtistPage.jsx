import ArtistAlbum from "../components/homepage/ArtistPage/ArtistAlbum"
import ArtistInfo from "../components/homepage/ArtistPage/ArtistInfo"
import {Link, useParams} from "react-router-dom"
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import ArtistSongsTop from "../components/homepage/ArtistPage/ArtistSongsTop"

const ArtistPage = () => {
    const { id } = useParams()
    const [artist, getArtist] = useFetch()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)

    }, [id])

    console.log(artist)

    return (
        <div>
            <Link to='/'> Atras </Link>
            <ArtistInfo
                artist={artist}
            />
            <ArtistAlbum
                albums={artist?.albums}
            />
            <ArtistSongsTop
                tracks={artist?.songsTop}
            />
        </div>

)

}


export default ArtistPage