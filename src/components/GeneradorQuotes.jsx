import React, {useState, useEffect} from 'react';

const GeneradorQuotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {        
        obtenerQuote()
    }, []);

    const obtenerQuote = async () => {
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
        .then(r => r.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            // console.log(randomQuote);
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })

    } 
        
    const handleClick = () => {
        obtenerQuote();
       
    }
    
    return (
        <div className="container" id="quote-box">
            <div className="text"><p>Cita: </p><p>{quote}</p></div>
            <div className="text"><p>Autor: </p><p>{author}</p></div>        
        
            <button onClick={handleClick} id="new-quote">Click Nueva Quote</button>
        </div>
        
    )
}

export default GeneradorQuotes;