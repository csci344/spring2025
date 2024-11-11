import React from "react";
import NavBar from "./NavBar";
// custom components:
export default function App() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-6xl mt-24 mx-auto">Main Panel</main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
