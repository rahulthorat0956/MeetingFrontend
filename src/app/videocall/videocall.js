// const { Token } = require("@angular/compiler")
// const { default: AgoraRTC } = require("agora-rtc-sdk-ng")

const APP_ID = "a85cd245f3224dd082fedd3fbc089f22"
const TOKEN = "007eJxTYNh/MennmcwJFfoJqRd9Njg0ZlSHOLxev+udjoZ57+0vT6wUGBItTJNTjExM04yNjExSUgwsjNJSU1KM05KSDSws04yMDjGppTUEMjLsbxVkYWSAQBCfhSE3MTOPgQEA3fggwg=="
const CHANNEL = "main"

const client = AgoraRTC.createClient({mode:'rtc' , codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async() => {

    client.on('user-published',handleUserJoined)

    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                    <div class="video-player" id="user-${UID}"></div>
                  </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)

    // let playerContainer = document.createElement('div');
    // playerContainer.className = 'video-container';
    // playerContainer.id = `user-container-${UID}`;

    // let player = document.createElement('div');
    // player.className = 'video-player';
    // player.id = `user-${UID}`;

    // playerContainer.appendChild(player);
    // document.getElementById('video-streams').appendChild(playerContainer);



    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0] , localTracks[1]])

}

let joinStream = async() =>{
    await joinAndDisplayLocalStream()
    document.getElementById('join-btn').style.display = 'none'
    document.getElementById('stream-controls').style.display = 'flex'

    
}


let handleUserJoined = async (user,mediaType)=>{
    remoteUsers[user.uid] = user
    await client.subscribe(user,mediaType)

    if(mediaType === 'video'){
        let player = document.getElementById(`user-container-${user.uid}`)
        if(player != null){
            player.remove()
        }

        player = `<div class="video-container" id="user-container-${user.uid}">
                        <div class="video-player" id="user-${user.uid}"></div>  
                  </div>`

        document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)

        user.videoTrack.play(`user-${user.uid}`)
    }

    if(mediaType === 'audio'){
        user.audioTrack.play()
    }
}

let toggleMic = async(e) =>{
    if(localTracks[0].muted){
        await localTracks[0].setMuted(false)
        e.target.innerText = 'Mic on'
        e.target.style.backgroundColor = 'cadetblue'
    }else{
        await localTracks[0].setMuted(true)
        e.target.innerText = 'Mic off'
        e.target.style.backgroundColor = '#EE4B2B'

    }
}

//edited
let toggleCamera = async (e) => {
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        e.target.innerText = 'Camera on'
        e.target.style.backgroundColor = 'cadetblue'
    }else{
        await localTracks[1].setMuted(true)
        e.target.innerText = 'Camera off'
        e.target.style.backgroundColor = '#EE4B2B'
    }
}

let leaveAndRemoveLocalStream = async () => {
    for(let i = 0; localTracks.length > i; i++){
        localTracks[i].stop()
        localTracks[i].close()
    }

    await client.leave()
    document.getElementById('join-btn').style.display = 'block'
    document.getElementById('stream-controls').style.display = 'none'
    document.getElementById('video-streams').innerHTML = ''
}



document.getElementById('join-btn').addEventListener('click',joinStream)
document.getElementById('join-btn').addEventListener('click', joinStream)
document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
document.getElementById('camera-btn').addEventListener('click', toggleCamera)