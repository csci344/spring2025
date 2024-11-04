import React from "react";
import { useState, useEffect } from "react";

export default function Carousel({ gallery }) {
    const [idx, setIdx] = useState(0);
    console.log(gallery);
    const currentImageUrl = gallery.images[idx];

    // effect to reset counter each time a new gallery is set:
    useEffect(() => setIdx(0), [gallery]);

    function previous() {
        console.log("previous");
        idx > 0 ? setIdx(idx - 1) : setIdx(gallery.images.length - 1);
    }

    function next() {
        console.log("next");
        idx < gallery.images.length - 1 ? setIdx(idx + 1) : setIdx(0);
    }

    return (
        <div className="carousel">
            {/* <h2>{gallery.name}</h2> */}
            <img src={currentImageUrl} />
            <div class="navigation">
                <button
                    aria-label="show previous image"
                    className="btn"
                    onClick={previous}
                >
                    &laquo;
                </button>
                <p>
                    Photo {idx + 1} of {gallery.images.length}
                </p>
                <button
                    className="btn"
                    aria-label="show next image"
                    onClick={next}
                >
                    &raquo;
                </button>
            </div>
        </div>
    );
}
