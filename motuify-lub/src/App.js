import React,{ useEffect,useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import {getTokenFromSpotifyResponse} from "./spotifyPage/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player"
import {useSetRecoilState} from "recoil"
import {globaluser,globalplaylists} from "./recoiled/recoil"

const spotify = new SpotifyWebApi();

function App() {

  const setLoggedinUser = useSetRecoilState(globaluser);
  const setUserPlaylist = useSetRecoilState(globalplaylists);


  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromSpotifyResponse();
    console.log("I got the Token :point ", hash)
    window.location.hash = "";
   const _token = hash.access_token;

  if(_token){
    setToken(_token);

    spotify.setAccessToken(_token); //from Spotify Web Api

    spotify.getMe()
    .then(user => {
      console.log(":person",user)
      setLoggedinUser({user:user})
    }).catch(console.error())

    spotify.getUserPlaylists()
    .then((playlist)=>{
      console.log(playlist)
      setUserPlaylist(playlist)
    })
        
    .catch(console.error())

  }
  }, [])

  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
