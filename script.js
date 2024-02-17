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
        src: "/catechism/Baptist Catechism 1-5.mp3",
        content: "<p>1. Who is the first and chiefest being?</p> <p>God is the first and chiefest being (Is. 44:6; 48:12; Ps. 97:9)</p>  <br> <p>2. Ought every one to believe there is a God?</p> <p>Everyone ought to believe there is a God (Heb. 11:6); and it is their great sin and folly who do not (Ps. 14:1).</p> <br> <p>3. How may we know there is a God?</p> <p>The light of nature in man and the works of God plainly declare there is a God (Rom. 1:19,20; Ps. 19:1, 2, 3; Acts 17:24); but his word and Spirit only do it fully and effectually for the salvation of sinners (1 Cor. 2:10; 2 Tim. 3:15,16).</p>  <br> <p>4. What is the word of God?</p> <p>The holy scriptures of the Old and New Testament are the word of God, and the only certain rule of faith and obedience (2 Tim. 3:16; Eph. 2:20).</p>  <br> <p>5. May all men make use of the holy scriptures?</p> <p>All men are not only permitted, but commanded and exhorted to read, hear, and understand the holy scriptures (John 5:38; John 17:17,18; Rev.1:3; Acts 8:30).</p>  <p></p> <p></p> "
    }, 
    {
        id: 1,
        title: "Baptist Catechism 6-10",
        artist: "Jim Orick",
        duration: "4:15",
        src: "/catechism/Baptist Catechism 6-10.mp3",
        content:  "<p>6. What things are chiefly contained in the holy scriptures?</p> <p>The holy scriptures chiefly contain what man ought to believe concerning God, and what duty God requireth of man (2 Tim. 1:13; 3:15,16).</p> <br> <p>7. What is God?</p> <p>God is a Spirit (John 4:24), infinite (Job 11:7, 8, 9), eternal (Ps. 110:2), and unchangeable (Jas. 1:17) in his being (Ex. 3:14), wisdom (Ps. 147:5), power (Rev. 4:8), holiness (Rev. 15:4), justice, goodness, and truth (Ex. 34:6).</p> <br> <p>8. Are there more gods than one?</p> <p>There is but one only, the living and true God (Deut. 6:4; Jer 10:10).</p> <br> <p>9. How many persons are there in the Godhead?</p> <p>There are three persons in the godhead, the Father, the Son, and the Holy Spirit; and these three are one God, the same in essence, equal in power and glory (1 John 5:7; Mt. 28:19).</p> <br> <p>10. What are the decrees of God?</p> <p>The decrees of God are his eternal purpose according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass (Eph. 1:4, 11; Rom. 9:22-23; Is. 46:10; Lam. 3:37).</p> <br> <p></p> <p></p> "
    },
    {
        id: 2,
        title: "Baptist Catechism 11-15",
        artist: "Jim Orick",
        duration: "3:51",
        src: "/catechism/Baptist Catechism 11-15.mp3",
        content:  "<p>11. How doth God execute his decrees?</p> <p>God executeth his decrees in the works of creation and providence.</p> <br> <p>12. What is the work of creation?</p> <p>What is the work of creation?</p> <br> <p>13. How did God create man?</p> <p>God created man, male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures (Gen. 1:26, 27, 28; Col. 3:10, Eph. 4:24).</p> <br> <p>14. What are God’s works of providence?</p> <p>God’s works of providence are his most holy, (Ps. 145:17;) wise (Is. 28:29, Ps. 104:24), and powerful preserving (Heb. 1:3) and governing all his creatures, and all their actions (Ps. 103:19; Mt. 10:29, 30, 31).</p> <br> <p>15. What special act of providence did God exercise towards man in the estate wherein he was created?</p> <p>When God had created man, he entered into a covenant of life with him upon condition of perfect obedience: forbidding him to eat of the tree of the knowledge of good and evil, upon pain of death (Gal. 3:12; Gen. 2:17).</p> <br> <p></p> <p></p> "
    },
    {
        id: 3,
        title: "Baptist Catechism 16-20",
        artist: "Jim Orick",
        duration: "3:34",
        src: "/catechism/Baptist Catechism 16-20.mp3",
        content:  "<p>16.</p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> "
    },
    {
        id: 4,
        title: "Baptist Catechism 21-25",
        artist: "Jim Orick",
        duration: "3:35",
        src: "/catechism/Baptist Catechism 21-25.mp3",
        content:  "<p>21.</p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> "
    },
    {
        id: 5,
        title: "Baptist Catechism 26-30",
        artist: "Jim Orick",
        duration: "3:12",
        src: "/catechism/Baptist Catechism 26-30.mp3",
        content:  "<p>26. </p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> "
    },
    {
        id: 6,
        title: "Baptist Catechism 31-35",
        artist: "Jim Orick",
        duration: "3:25",
        src: "/catechism/Baptist Catechism 31-35.mp3",
        content:  "<p>31</p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> <br> <p></p> <p></p> "
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
    setPlayerDisplay()
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

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0]
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

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title")
    const songArtist = document.getElementById("player-song-artist")
    const playingCatechism = document.querySelector(".player-display-song-artist")
    const currentTitle = userData?.currentSong?.title
    const currentArtist = userData?.currentSong?.artist
    const currentContent = userData?.currentSong?.content
    
    // playingSong.textContent = currentTitle ? currentTitle : ""
    // songArtist.textContent = currentArtist ? currentArtist : ""

    playingCatechism.innerHTML = currentContent ? currentContent : ""
    
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
    if (a.id < b.id) {
        return -1;
    }

    if (a.id > b.id) {
        return 1;
    }
    return 0; 
})
// optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined.

renderSongs(userData?.songs) 
