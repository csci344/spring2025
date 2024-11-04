import React from "react";
import "./Gallery.css";

export default function Gallery({ gallery }) {

    return (
        <div className="gallery">
            {gallery.map((image_url) => (
                <img src={image_url} />
            ))}
        </div>
    );
}
