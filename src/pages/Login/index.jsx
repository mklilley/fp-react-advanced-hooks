import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const goTo = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const { setUser } = useAuth();
    const inputRef = useRef();

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await setUser(inputValue);
        goTo("/");
    }

    useEffect(() => {
        inputRef.current.focus();
      }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleInput}
                value={inputValue}
                placeholder="username"
                autoComplete="off"
                ref={inputRef}
            />
            <br />
            <input type="submit" />
        </form>
    );
}
