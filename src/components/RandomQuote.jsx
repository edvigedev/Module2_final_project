import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="tarantino-agrees">
      <h3>It sounds like Tarantino:</h3>
      <p>"{quote || "Loading..."}"</p>
    </div>
  );
};

export default RandomQuote;
