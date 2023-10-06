import { useSelector } from "react-redux"
import TrackList from "../TrackList"
import '../shared/style/Header.css'
import { useForm } from "react-hook-form"
import usePlayList from "../../../hooks/usePlayList"




const HeaderMusic = () => {

  const tracksPlaylist = useSelector(store => store.tracks)

const {reset, handleSubmit, register} = useForm()

const {postPlaylist} = usePlayList()


const submit = data => {
 
 const obj = {
  ...data ,
  tracks: tracksPlaylist.map(e =>({
    id: e.id
  }) )
 }
 postPlaylist(obj)
  reset ({
      title: '',
      to: '',
      message:''
    })

}


  return (
    <header className="Header">
      <h1 className="Header_title"> Gift Music</h1>
      <div className="Header_element">
        <form onSubmit={handleSubmit(submit)} className="Header_form">
          <div >
            <label htmlFor="title">Title</label>
            <input {...register('title')} type="text" id="title" />
          </div>
          <div>
            <label htmlFor="to">To</label>
            <input {...register('to')} type="text" id="to" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea {...register('message')} id="message" />
          </div>
          <div className="Header_trackplay">
            {
              tracksPlaylist.map(track => (
                <TrackList
                  key={track.id}
                  track={track}
                />
              ))
            }
          </div>
          <button className="Header_button">Create</button>
        </form>
      </div>
    </header>
  )

}



export default HeaderMusic