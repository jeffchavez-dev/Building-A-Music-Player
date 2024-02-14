const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton  = document.getElementById('pause')
const nextButton  = document.getElementById('next')
const previousButton  = document.getElementById('previous')
const shuffleButton  = document.getElementById('shuffle')

const allSongs = [
    {
        id: 0,
        title: "Baptist Catechism 1-5",
        artist: "Jim Orick",
        duration: "4:25",
        src: "/catechism/Baptist Catechism 1-5.mp3"
    }, 
    {
        id: 1,
        title: "Baptist Catechism 6-10",
        artist: "Jim Orick",
        duration: "4:15",
        src: "/catechism/Baptist Catechism 6-10.mp3"
    },
    {
        id: 2,
        title: "Baptist Catechism 11-15",
        artist: "Jim Orick",
        duration: "3:51",
        src: "/catechism/Baptist Catechism 11-15.mp3"
    },
    {
        id: 3,
        title: "Baptist Catechism 16-20",
        artist: "Jim Orick",
        duration: "3:34",
        src: "/catechism/Baptist Catechism 16-20.mp3",
    },
    {
        id: 4,
        title: "Baptist Catechism 21-25",
        artist: "Jim Orick",
        duration: "3:35",
        src: "/catechism/Baptist Catechism 21-25.mp3",
    },
    {
        id: 5,
        title: "Baptist Catechism 26-30",
        artist: "Jim Orick",
        duration: "3:12",
        src: "/catechism/Baptist Catechism 26-30.mp3",
    },
    {
        id: 6,
        title: "Baptist Catechism 31-35",
        artist: "Jim Orick",
        duration: "3:25",
        src: "/catechism/Baptist Catechism 31-35.mp3",
    }
        
]


const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
}

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id)
    audio.src = song.src;
    audio.title = song.title;
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0
    } else {
        audio.currentTime = userData?.songCurrentTime
    }

    userData.currentSong = song
    playButton.classList.add('playing')
    audio.play()
    highlightCurrentSong()
}

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime
    console.log(userData.currentSong + userData.songCurrentTime)
    playButton.classList.remove(".playing")
    audio.pause()
}

pauseButton.addEventListener('click', pauseSong)

const renderSongs = (array) => {
    // The map() method is used to iterate through an array and return a new array.
    const songsHTML = array.map((song) => {return ` 
    
    <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete${song.title}">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
    </li>
`}).join("") 

playlistSongs.innerHTML = songsHTML

}

const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong)
}

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const nextSong = userData?.songs[currentSongIndex + 1]
        playSong(nextSong.id)
    }
}
nextButton.addEventListener('click', playNextSong)


const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return
    } else {
        const currentSongIndex = getCurrentSongIndex()
        const previousSong = userData?.songs[currentSongIndex - 1]
        playSong(previousSong.id)
    }
}

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`)
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current")
    })

    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", "true")
    }
}

previousButton.addEventListener('click', playPreviousSong)




playButton.addEventListener('click', () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id)
    }  else {
        playSong(userData?.currentSong.id)
      }
        
})

userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
        return -1;
    }

    if (a.title > b.title) {
        return 1;
    }
    return 0; 
})
// optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined.

renderSongs(userData?.songs) 
