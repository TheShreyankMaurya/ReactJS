import { useState } from "react";

function LikeBtn() {
    let [like, setLike] = useState(false);

    let [count, setCount] = useState(0);

    function changeLike() {
        if (!like) {
            setCount((count += 1));
        }

        setLike(!like);
    }

    let likeStyle = { color: "red" };
    return (
        <>
            <button onClick={changeLike}>
                {like ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </button>
            <p>No. of likes = {count}</p>
        </>
    );
}

export default LikeBtn;
