import Subjects from "./Subject.jsx";

function Student({ name, rollNo, subjects }) {
    return (
        <>
            <h2>Name : {name}</h2>
            <h3>Roll No. : {rollNo}</h3>

            {subjects.map((subject) => (
                <Subjects name={subject.name} marks={subject.marks}></Subjects>
            ))}
        </>
    );
}

export default Student;
