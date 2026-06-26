import Student from "./Student";

function ReportCard() {
    let s1 = [
        { name: "maths", marks: 47 },
        { name: "science", marks: 80 },
    ];
    return (
        <>
            <Student name="Shreyank" rollNo={29} subjects={s1}></Student>
        </>
    );
}

export default ReportCard;
