import React, { useState } from "react";
import PropTypes from "prop-types";

function Videos(props) {
  const renderPosts = () => {
    return props.videos.map((p) => (
      <li key={p.id}>
        <iframe
          width="490"
          height="300"
          src={p.url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>
          <a href={"/videos/" + p.id}>{p.name} (Click to add your comments!)</a>
        </h2>
      </li>
    ));
  };

  console.log("render Posts", props);

  return (
    <div>
      <h2>Videos</h2>
      <ul>{renderPosts()}</ul>
    </div>
  );
}

export default Videos;
