import "./UserProfileCard.css";

function UserProfileCard({ name, age, profession }) {
    return (
        <div className="Card">
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Profession : {profession}</p>
        </div>
    );
}

export default UserProfileCard;
