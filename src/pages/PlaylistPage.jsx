import React, { useEffect } from 'react'
import usePlayList from '../hooks/usePlayList'

const PlaylistPage = () => {
    const {getPlaylist, playlist} = usePlayList()


    useEffect(() => {

        getPlaylist()

    }, [])
    
  return (
    <article>
        {
            playlist.map(track =>(
                <div key={track.id}>  
                    <h2>{track.title}</h2>
                </div>
            ))
        }
    </article>
  )
}

export default PlaylistPage