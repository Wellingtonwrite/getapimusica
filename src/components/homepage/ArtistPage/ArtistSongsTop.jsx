import React from 'react'


const ArtistSongsTop = ({tracks}) => {


 
  return (
    <section>
        <h3>Artist's Top Songs</h3>
        <div>
            {
                tracks?.map(trackInfo => (
                    <TrackCard
                    key={ trackInfo.id}
                    track={trackInfo}
                    />
                ))
            }
        </div>
    </section>
  )


}

export default ArtistSongsTop