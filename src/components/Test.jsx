import { useState, useEffect, useRef } from "react";

export default () => {
    const foo = "wedfghjikop fghj kf ghj fghjk tyui ghj kh jkgh j";
    const [word, setWord] = useState("");
    const i = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (i.current < foo.length) {
                setWord(prev => prev + foo.charAt(i.current));
                i.current += 1;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <p>{word}</p>
        </>
    );
}