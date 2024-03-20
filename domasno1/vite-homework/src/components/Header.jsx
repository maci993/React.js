import React from "react";
import Button from "./button";

const Header = () => {
    return (
        <div>
            {/* props */}
            <Button title='My Profile' />
            <Button title='Followers' />
            <Button title='Contact' />
        </div>
    )
};

export default Header;