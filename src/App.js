import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const getQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const handleNext = () => {
    if (index < quotes.length - 1) {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  console.log(quotes);
  return (
    <div className="App">
      <h3>Get Quotes</h3>
      <p>{quotes[index]?.text}</p>
      <p>{quotes[index]?.author}</p>
      <button onClick={handlePrev}>Previous</button>

      <button onClick={getQuotes}>Get new Quotes</button>
      <button onClick={handleNext}>Next</button>
      <p>
        {index + 1}/ {quotes.length}
      </p>
    </div>
  );
}
