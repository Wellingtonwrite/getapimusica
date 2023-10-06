import axios from "axios"
import { useState } from "react"
import { setTraksSlice } from "../store/slices/tracks.slice"
import { useDispatch } from "react-redux"

const usePlayList = () => {
const [playlist, setPlaylist] = useState([])
const dispatch = useDispatch()

const baseUrl = 'https://playlist-share-dev.fl0.io'

const getPlaylist = () => {
    const url = `${baseUrl}/api/playlists/me`
    axios.get(url, getConfigToken())
    .then(res => setPlaylist(res.data))
    .catch(err => console.log(err))
}


const postPlaylist =( data ) => {
    const url =  `${baseUrl}/api/playlists`
    axios.post(url, data, getConfigToken())
    .then(res => {
        console.log(res.data)
    setPlaylist([...playlist, res.data.info])
    dispatch(setTraksSlice([]))
    })
    .catch(err => console.log(err))
}


const deletePlaylist = (id) =>{
    const url =  `${baseUrl}/api/playlists/${id}`
    axios.delete(url, getConfigToken())
    .then(res => console.log (res.data))
    .catch(err => console.loog(err))
}

return [playlist, getPlaylist, postPlaylist, deletePlaylist ]
}

export default usePlayList