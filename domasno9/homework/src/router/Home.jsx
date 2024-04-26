import React from "react";
import { useAuth } from "../hooks/AuthProvider"

const Home = () => {
    const { auth } = useAuth();
    console.log(auth);

    return (
        <div>
            <button onClick={() => localStorage.setItem("user", "Marina")}>
                Click Here!
            </button>
        </div>
    );
};

export default Home