const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton  = document.getElementById('pause')
const nextButton  = document.getElementById('next')
const previousButton  = document.getElementById('previous')
const shuffleButton  = document.getElementById('shuffle')
const loopButton  = document.getElementById('loop')

const audioNegative  = document.querySelector('.audio-adjuster-negative')
const audioPositive  = document.querySelector('.audio-adjuster-positive')
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
        content:  "<p>16. Did our first parents continue in the estate wherein they were created?</p> <p>Our first parents being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God (Gen. 3:6, 7, 8, 13; Eccles. 7:29).</p> <br> <p>17. What is sin?</p> <p>Sin is any want of conformity unto, or transgression of, the law of God (1 John 3:4).</p> <br> <p>18. What was the sin whereby our first parents fell from the estate wherein they were created?</p> <p>The sin whereby our first parents fell from the estate wherein they were created, was their eating the forbidden fruit (Gen. 3:6, 12, 16, 17).</p> <br> <p>19. Did all mankind fall in Adam’s first transgression?</p> <p>The covenant being made with Adam, not only for himself but for his posterity, all mankind descending from him by ordinary generation sinned in him, and fell with him in his first transgression (Gen. 2:16, 17; Rom. 5:12; 1 Cor. 15:21, 22).</p> <br> <p>20. Into what estate did the fall bring mankind?</p> <p>The fall brought mankind into an estate of sin and misery (Rom. 5:12).</p> <br> <p></p> <p></p> "
    },
    {
        id: 4,
        title: "Baptist Catechism 21-25",
        artist: "Jim Orick",
        duration: "3:35",
        src: "/catechism/Baptist Catechism 21-25.mp3",
        content:  "<p>21. Wherein consists the sinfulness of that estate whereinto man fell?</p> <p>The sinfulness of that estate whereinto man fell, consists in the guilt of Adam’s first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it (Rom. 5:12, to the end; Eph. 2:1, 2, 3; James 1:14, 15; Mt. 15:19).</p> <br> <p>22. What is the misery of that estate whereinto man fell?</p> <p>All mankind by their fall lost communion with God (Gen. 3:8, 10, 24), are under his wrath and curse (Eph. 2:2, 3; Gal. 3:10), and so made liable to all miseries in this life, to death itself, and to the pains of hell for ever (Lam. 3:39; Rom. 6:23; Mt. 25:41, 46).</p> <br> <p>23. Did God leave all mankind to perish in the estate of sin and misery?</p> <p></p> <br> <p>God having out of his mere good pleasure, from all eternity, elected some to everlasting life (Eph. 1:4, 5), did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer (Rom. 3:20-22; Gal. 3:21, 22).</p> <p></p> <br> <p>24. Who is the Redeemer of God’s elect?</p> <p>The only Redeemer of God’s elect is the Lord Jesus Christ (1 Tim. 2:5, 6); who, being the eternal Son of God, became man (John 1:14; Gal. 4:4), and so was and continueth to be God and man in two distinct natures, and one person for ever (Rom. 9:5; Lk. 1:35; Col. 2:9; Heb. 7:24, 25).</p> <br> <p>25. How did Christ, being the Son of God become man?</p> <p>Christ the Son of God became man by taking to himself a true body (Heb. 2:14, 17; 10:5), and a reasonable soul (Mt. 26:38); being conceived by the power of the Holy Spirit in the womb of the Virgin Mary, and born of her (Luke 1:27, 31, 34, 35, 42; Gal. 4:4), yet without sin (Heb. 4:15; 7:26).</p>"
    },
    {
        id: 5,
        title: "Baptist Catechism 26-30",
        artist: "Jim Orick",
        duration: "3:12",
        src: "/catechism/Baptist Catechism 26-30.mp3",
        content:  "<p>26. What offices doth Christ execute as our Redeemer?</p> <p>Christ as our Redeemer executeth the offices of a prophet, of a priest, and of king, both in his estate of humiliation and exaltation (Acts 3:22; Heb. 12:25; 2 Cor. 13:3; Heb. 5:5, 6, 7; 7:25; Ps. 2:6; Is. 9:6, 7; Mt. 21:5; Ps. 2:8-11).</p> <br> <p>27. How doth Christ execute the office of a prophet?</p> <p>Christ executeth the office of prophet in revealing to us, by his word and Spirit, the will of God for our salvation (John 1:18; 1 Pet.1:10,11, 12; John 15:15; and 20:31).</p> <br> <p>28. How doth Christ execute the office of a priest?</p> <p>Christ executeth the office of priest in his once offering up himself a sacrifice to satisfy divine justice (Heb. 9:14, 28) and reconcile us to God (Heb. 2:17), and in making continual intercession for us (Heb.7:24, 25).</p> <br> <p>29. How doth Christ execute the office of king?</p> <p>Christ executeth the office of a king, in subduing us to himself (Acts 15:14, 15, 16), in ruling (Is. 33:22), and defending us (Is. 32:1, 2), and in restraining and conquering all his and our enemies (1 Cor. 15:25; Ps. 110 throughout).</p> <br> <p>30. Wherein did Christ’s humiliation consist?</p> <p>Christ’s humiliation consisted in his being born, and that in a low condition (Luke 2:7), made under the law (Gal. 4:4), undergoing the miseries of this life (Heb. 12:2, 3; Is. 53:2, 3), the wrath of God (Luke 22:44; Mt. 27:46), and the cursed death of the cross (Phil. 2:8); in being buried (1 Cor. 15:3,4), and continuing under the power of death for a time (Acts 2:24, 25, 26, 27, 31; Mt. 12:40).</p> <br> <p></p> <p></p> "
    },
    {
        id: 6,
        title: "Baptist Catechism 31-35",
        artist: "Jim Orick",
        duration: "3:25",
        src: "/catechism/Baptist Catechism 31-35.mp3",
        content:  "<p>31. Wherein consisteth Christ’s exaltation?</p> <p>Christ’s exaltation consisteth in his rising again from the dead on the third day (1 Cor. 15:4), in ascending up into heaven (Mark 16:19), in sitting at the right hand of God the Father (Eph. 1:20), and in coming to judge the world at the last day (Acts 1: 11; 17:31).</p> <br> <p>32. How are we made partakers of the redemption purchased by Christ?</p> <p>We are made partakers of the redemption purchased by Christ, by the effectual application of it to us (John 1:11,12) by his Holy Spirit (Titus 3:5,6).</p> <br> <p>33. How doth the spirit apply to us the redemption purchased by Christ?</p> <p>The Spirit applieth to us the redemption purchased by Christ, by working faith in us (Eph. 1:13, 14; John 6:37, 39; Eph. 2:8), and thereby uniting us to Christ, in our effectual calling (Eph. 3:17; 1 Cor. 1:9).</p> <br> <p>34. What is effectual calling?</p> <p>Effectual calling is the work of God’s Spirit (2 Tim. 1:9; 2 Thess. 2:13, 14), whereby convincing us of our sin and misery (Acts 2:37), enlightening our minds in the knowledge of Christ (Acts 26:18), and renewing our wills (Ez. 36:26, 27), he doth persuade and enable us to embrace Jesus Christ freely offered to us in the gospel (John 6:44, 45; Phil. 2:13).</p> <br> <p>35. What benefits do they that are effectually called partake of in this life?</p> <p>They that are effectually called do in this life partake of justification (Rom. 8:30), adoption (Eph. 1:5), sanctification, and the several benefits which in this life do either accompany or flow from them (1 Cor. 1:30).</p> <br> <p></p> <p></p> "
    }
        
]


const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
}
const getAudioDuration = () => {
    audio.addEventListener('loadedmetadata', handleDurationChange);
    audio.addEventListener('durationchange', handleDurationChange);
}

function handleDurationChange() {
    if (isFinite(audio.duration)) {
        const audioDuration = audio.duration;
        const formattedDuration = formatDuration(audioDuration);
        console.log(`Duration: ${formattedDuration}`);
    } else {
        console.log("Duration is not finite");
    }
}

function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

audioPositive.addEventListener('click', () => getAudioDuration)


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
    setPlayButtonAccessibleText()
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
        <button class="playlist-song-delete" aria-label="Delete${song.title}" onclick="deleteSong(${song.id})">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
    </li>
`}).join("") 

playlistSongs.innerHTML = songsHTML

}

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0]
    playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play")
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



const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null
    userData.songCurrentTime = 0
    renderSongs(userData?.songs)
    pauseSong()
    setPlayerDisplay()
    setPlayButtonAccessibleText()
}


const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
    }
    userData.songs = userData?.songs.filter((song) => song.id !== id)
    renderSongs(userData?.songs)
    highlightCurrentSong()
    setPlayButtonAccessibleText()
    if (userData?.songs.length === 0) {
        const resetButton = document.createElement('button')
        const resetText = document.createTextNode("Reset Playlist")
        resetButton.id = "reset"
        resetButton.ariaLabel = "Reset playlist"
        resetButton.appendChild(resetText)
        playlistSongs.appendChild(resetButton)
        resetButton.addEventListener("click", () =>{
            userData.songs = [...allSongs]
            renderSongs(userData?.songs)
            setPlayButtonAccessibleText()
            resetButton.remove()
        })
       
    }
}

shuffleButton.addEventListener('click', shuffle)

audio.addEventListener('ended', () => {
    const currentSongIndex = getCurrentSongIndex()
    const nextSongExists = userData.songs.length - 1 > currentSongIndex
    if (nextSongExists) {
        playNextSong()
    } else {
        userData.currentSong = null
        userData.songCurrentTime = 0
        pauseSong()
        setPlayerDisplay()
        highlightCurrentSong()
        setPlayButtonAccessibleText()
    }
})

const loop = () => {
    loopButton.classList.toggle('looping')
    audio.loop = !audio.loop;  // Toggle the audio loop property

    if (!audio.loop && userData?.currentSong !== null) {
        // If loop is disabled and there is a current song, update currentTime
        userData.songCurrentTime = audio.currentTime;
    }
    
}

loopButton.addEventListener('click', loop)


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


//adjust audio


