import React, {useEffect, useState} from "react"
import "./index.css"

function FetchQuote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteBg = {
        position: 'relative', textAlign: 'center', width: '70%', height: '150%', left: '15%'
    };

    const quoteOTD = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
        padding: '5px',
    };

    function getQuote() {
        fetch("http://api.quotable.io/random?tags=Inspirational|Motivational|Work?maxLength=130")
            .then(res => res.json())
            .then((quote) => {
                setQuote(quote.content);
                setAuthor(quote.author);
            })
    }

    //database

    useEffect(() => {
        getQuote();
        const intervalID = setInterval(() => {
            getQuote()
            // }, 24 * 60 * 60 * 1000);
        }, 60 * 60 * 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, [])

    return (<div className="image-container" style={quoteBg}>
            <img
                src="./images/quote.png"
                alt="Quote Background"
                className="img-fluid"/>
            <div className="text-overlay" style={quoteOTD}>
                <h3 className="text-center">{quote}</h3>
                <p className="text-center">-{author}-</p>
            </div>
        </div>

    )
}

export default FetchQuote
