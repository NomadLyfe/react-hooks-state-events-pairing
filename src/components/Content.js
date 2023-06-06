import React from "react";

function Content({ video }) {
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <h3 className="views">{video.views} Views | Uploaded {video.createdAt} </h3>
        </div>
    )
}

export default Content;