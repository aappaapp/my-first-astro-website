import { Component, createSignal } from "solid-js";

const Interactive: Component = () => {
    const [input, setInput] = createSignal("asd");
    return (
        <input
            type="text"
            value={input()}
            onChange={(e) => {
                console.log((e.target as any).value);
                setInput((e.target as any).value);
            }}
        />
    );
};

export default Interactive;
