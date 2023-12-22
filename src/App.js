import { useState } from "react";
import "./App.css";

const quotes = [
  {
    quote:
      "Teamwork is the beauty of our sport, where you have five acting as one.",
    author: "Mike Krzyzewski",
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "All the successful teams I’ve ever seen have three characteristics: They play unselfish, they play together, and they play hard.",
    author: "Larry Brown",
  },
  {
    quote:
      "Everyone is born with a certain potential. You may never achieve your full potential, but how close you come depends on how much you want to pay the price.",
    author: "Red Auerbach",
  },
  {
    quote:
      "Ask not what your teammates can do for you. Ask what you can do for your teammates.",
    author: "Magic Johnson",
  },
  {
    quote:
      "Everything negative — pressure, challenges — are all an opportunity for me to rise.",
    author: "Kobe Bryant",
  },
  {
    quote:
      "I’ve got a theory that if you give 100 percent all of the time, somehow things will work out in the end.",
    author: "Larry Bird",
  },
  {
    quote:
      "Good, better, best. Never let it rest. Until your good is better and your better is best.",
    author: "Tim Duncan",
  },
  {
    quote:
      "When I walked into the gym, I fell in love with the game. I didn’t fall in love with it just because it was me playing. I fell in love with it because I’ve got guys like this – like these guys every single day that push me to be the best that I can be.",
    author: "Kevin Durant",
  },
  {
    quote:
      "Admit to and make yourself accountable for mistakes. How can you improve if you’re never wrong?",
    author: "Pat Summitt",
  },
];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  function handleClick() {
    let randomIndex;
    while (true) {
      randomIndex = Math.floor(Math.random() * quotes.length);
      if (randomIndex !== quoteIndex) {
        break;
      }
    }
    setQuoteIndex(randomIndex);
  }

  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <wrapper id="quote-box" className="border p-5 col-6">
        <p id="text">{quotes[quoteIndex].quote}</p>
        <p id="author">{quotes[quoteIndex].author}</p>
        <button
          id="new-quote"
          onClick={handleClick}
          className="btn btn-success btn-space"
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          target="_blank"
          className="btn btn-info"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=" +
            quotes[quoteIndex].quote.replace(/ /g, "%20") +
            quotes[quoteIndex].author.replace(/ /g, "%20")
          }
        >
          Tweet Quote
        </a>
      </wrapper>
    </div>
  );
}

export default App;
