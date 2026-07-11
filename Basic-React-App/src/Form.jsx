import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                />

                <br />

                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />

                <br />

                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                />

                <br />
                <br />

                <button>Submit</button>
            </form>
        </div>
    );
}
