// docmentation page for spotify
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/


export const authEndpoint=
"https://accounts.spotify.com/authorize";

const redirectUri = "https://motuify-lub.netlify.app";

const clientId = "b23009bd55cf4b5ebc16842862e74f05";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromSpotifyResponse = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;
    },{});
}

export const longUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
