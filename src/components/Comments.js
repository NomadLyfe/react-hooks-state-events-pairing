import React, {useState} from "react";

function Comments({ video }) {
    const [hidden, setHidden] = useState(false);
    const commentList = video.comments.map(comment => {
        if (!hidden) {
            return (
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <h4>{comment.comment}</h4>
                </div>
    
            )
        }
    });
    function handleHide() {
        setHidden(() => !hidden);
    }
    return (
        <div>
            <br></br>
            <button onClick={handleHide}>{hidden ? "Show Comments" : "Hide Comments"}</button><br></br>
            <div className="commentList">
                <h2>{video.comments.length} Comments</h2>
                {commentList}
            </div>
        </div>
    )
}

export default Comments;