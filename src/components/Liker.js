import React, {useState} from "react";

function Liker({ video }) {
    const [vote, setVote] = useState({up: video.upvotes, down: video.downvotes});
    function handleVote(e) {
        const newVotes = vote[e.target.id] + 1
        setVote(() => {
            return {...vote, [e.target.id]: newVotes}
        })
    }
    return (
        <div>
            <button onClick={handleVote} id="up">{vote.up} 👍</button>
            <button onClick={handleVote} id="down">{vote.down} 👎</button>
        </div>
    )
}

export default Liker;