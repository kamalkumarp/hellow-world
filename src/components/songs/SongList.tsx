import { useState } from "react";
import Song from "./Song";
// import { useState } from "react";

export type SongType = {title: string, artist: string, votes : number};
const SongList = () => {

   
    const [visible, setVisible] = useState<boolean>(true);

    const [song1, setSong1] = useState<SongType>({title: "Barbie Girl", artist: "Aqua", votes: 0});
    const [song2, setSong2] = useState<SongType>({title: "Last Thing On My Mind", artist: "Steps", votes: 0});


    const initialSongs: SongType[] = [
        {title: "Barbie Girl", artist: "Aqua", votes: 0},
        {title: "Last Thing on My Mind", artist: "Steps",votes: 0},
        {title: "Bicycle Race", artist: "Queen", votes: 0}
    ]

    const [listOfSongs, setListOfSongs] = useState(initialSongs);

    const voteForSong = (position: number) => {
        debugger;
        const copyList = [...listOfSongs];
        const songtoBeVotedOn = copyList[position];
        copyList[position] = {...songtoBeVotedOn, votes: songtoBeVotedOn.votes + 1}

        setListOfSongs(copyList);

    }

    const voteForSong2 = () => {
        setSong2({...song2, votes: song2.votes + 1});
        
    }


    const songsForDisplay: JSX.Element[] = listOfSongs.map ( 
        (nextSong, position) => {
            return <Song key={position}  song = {nextSong}  voteFunction= {() => voteForSong(position) }  />
        }   
    )

    const toggleVisibility = () => {
        setVisible(!visible);
    }


    return <div>
        {visible && 
        <ul style={{ display : visible ? "block" : "none" }}    >
        {listOfSongs.map ( 
                (nextSong, position) => {
                return <Song key={position} song={nextSong} voteFunction={() => voteForSong(position)}  />
                }   
            )}
        </ul>
    }
    {!visible && <p>The songs are hidden</p>}
        <button onClick={toggleVisibility} >{ visible ? "Hide songs  " : " Show songs"}</button>
    </div>
}

export default SongList;