import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    });

    let handleFormData = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remark: "",
            rating: 5,
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter your username"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleFormData}
                />

                <br />
                <br />

                <label htmlFor="remark">Remark</label>
                <br />
                <textarea
                    type="text"
                    placeholder="Add remark"
                    id="remark"
                    name="remark"
                    value={formData.remark}
                    onChange={handleFormData}
                />

                <br />
                <br />

                <label htmlFor="rating">Rating</label>
                <br />
                <input
                    type="range"
                    placeholder="Give rating"
                    min={1}
                    max={5}
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleFormData}
                />

                <br />
                <br />

                <button>Submit</button>
            </form>
        </div>
    );
}
