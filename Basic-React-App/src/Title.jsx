import "./Title.css";

function Title({ name = "User" }) {
    return (
        <>
            <p>The sum of 2 x 2 is {2 * 2}</p>
            <p>Greeting - Hello {name}.</p>
        </>
    );
}

export default Title;
