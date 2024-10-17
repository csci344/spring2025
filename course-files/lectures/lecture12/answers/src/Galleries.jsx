import React from "react";

export default function Galleries({ galleries, galleryIdx, setGalleryIdx }) {
    console.log("redraw galleries!");
    return (
        <div className="galleries">
            <h2>Galleries</h2>
            {galleries.map((gallery, idx) => {
                return (
                    <div key={idx} className="row">
                        <button
                            onClick={() => setGalleryIdx(idx)}
                            className={idx === galleryIdx && "selected"}
                        >
                            {gallery.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
