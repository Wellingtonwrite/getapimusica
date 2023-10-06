import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/homepage/TrackCard"
import './style/HomePage.css'


const HomePage = () => {

  const [listTracks, getlistTracks] = useFetch()
  const [inputValue, setInputValue] = useState('ricardo arjona')
  const [quantityPerPage, setQuantityPerPage] = useState(10)


  useEffect(() => {
    getlistTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])



  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }



  return (
    <div className="Home_container">
      <div className="Home_elements">
        <form className="Home_form" onSubmit={handleSearch}>
          <input className="Home_input" ref={inputSearch} type="text" />
          <i className='bx lupa bx-search-alt-2'></i>
          <select className="Home_select" onChange={handleTracksPerPage} defaultValue={10}>
            {
              [2, 4, 6, 8, 10].map(tracksPerPage => (
                <option 
                  className="Home_select_option"
                  key={tracksPerPage}
                  value={tracksPerPage}
                >{tracksPerPage}</option>
              ))
              
            }
          </select>
        </form>

        <div className="Home_list">
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard
                key={track.id}
                track={track}
              />
            ))
          }
        </div>

      </div>

    </div>
  )

}

export default HomePage;
