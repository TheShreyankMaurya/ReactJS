import { useEffect, useState } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline,
        });
    };

    useEffect(function getFirstJoke() {
        getNewJoke();
    }, []);

    return (
        <div>
            <h1>Joker</h1>
            <h2>{joke.setup || "Loading..."}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}
