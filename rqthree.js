var quotes = [{
  author: "Albert Einstein",
  quote: "Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity"
}, {
  author: "Bob Marley",
  quote: "Some people feel the rain, others just get wet."
}, {
  author: "T-Shirt",
  quote: "If at first you don't succeed; call it version 1.0"
}, {
  author: "Unknown",
  quote: "My software never has bugs. It just develops random features."
}, {
  author: "Microsoft",
  quote: "You've got questions. We've got dancing paperclips."
}, {
  author: "Unknown",
  quote: "I would love to change the world, but they won't give me the source code"
}, {
  author: "Maya Angelou",
  quote: "Do the best you can until you know better. Then when you know better, do better."
}, {
  author: "Marcus Aurelius",
  quote: "Waste no more time arguing about what a good man should be, be one."
}, {
  author: "Darrel W. Ray",
  quote: "Being alive today is the only thing you or I know. We are the product of an amazing biological process in which one sperm out of millions met one egg. This event will never happen again. Make the most of it."
}, {
  author: "Ben Zander",
  quote: "Remember rule number 6: don't take yourself so damn seriously!"
}, {
  author: "Unknown",
  quote: "The things you own end up owning you."
}, {
  author: "Thomas Paine",
  quote: "A body of men holding themselves accountable to nobody ought not to be trusted by anybody."
}, {
  author: "Five Regrets of the Dying",
  quote: "I wish I'd had the courage to live a life true to myself, not the life others expected of me."
}, {
  author: "Five Regrets of the Dying",
  quote: "I wish I hadn't worked so hard."
}, {
  author: "Five Regrets of the Dying",
  quote: "I wish I'd had the courage to express my feelings."
}, {
  author: "Five Regrets of the Dying",
  quote: "I wish I had stayed in touch with my friends."
}, {
  author: "Five Regrets of the Dying",
  quote: "I wish that I had let myself be happier."
}, {
  author: "The Buddha",
  quote: "You will not be punished for your anger. You will be punished by your anger."
}, {
  author: "Ralph Waldo Emerson",
  quote: "We are always getting ready to live, but never living."
}, {
  author: "Oscar Wilde",
  quote: "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live."
}, {
  author: "Susan Ertz",
  quote: "Millions long for immortality who do not know what to do with themselves on a rainy Sunday afternoon."
}, {
  author: "Gertrude Stein",
  quote: "There ain’t no answer. There isn’t going to be any answer. There never has been an answer. That’s the answer."
}, {
  author: "Haitian proverb",
  quote: "If work were good for you, the rich would leave none for the poor."
}, {
  author: "Frans Hiddema",
  quote: "Working yourself to death is a highly regarded form of suicide."
}, {
  author: "Ellen Goodman",
  quote: "Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for, in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it."
}, {
  author: "Mark Twain",
  quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect."
}, {
  author: "Abraham Lincoln",
  quote: "I don’t like that man. I must get to know him better."
}, {
  author: "Albert Einstein",
  quote: "A person who never made a mistake never tried anything new."
}, {
  author: "Confucius",
  quote: "Our greatest glory is not in never failing, but in rising every time we fail."
}, {
  author: "Wayne Dyer",
  quote: "You cannot be lonely if you like the person you're alone with."
}, {
  author: "Robert Frost",
  quote: "Never be bullied into silence, never allow yourself to be made a victim. Accept no one's definition of your life, define yourself."
}, {
  author: "Benjamin Franklin",
  quote: "Some people die at 25 and aren't buried until 75."
}, {
  author: "Mahatma Gandhi",
  quote: "A man is but the product of his thoughts. What he thinks, he becomes."
}, {
  author: "Ralph Waldo Emerson",
  quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
}, {
  author: "George Bernard Shaw",
  quote: "Life isn't about finding yourself. Life is about creating yourself."
}, {
  author: "Socrates",
  quote: "I am the wisest man alive, for I know one thing, and that is that I know nothing."
}, {
  author: "Homer J. Simpson",
  quote: "To alcohol! The cause of, and solution to, all of life's problems."
}];

(function() {
  var randomQuoteButton = document.querySelector('#getMessage')
  var quoteContainer = document.querySelector('.quote-text')
  var Author = document.querySelector('.quote-author')
  
  newRandomQuote(quotes, quoteContainer, Author);

  randomQuoteButton.addEventListener('click', function() {
    newRandomQuote(quotes, quoteContainer, Author);
  });

  
  
  /*var twitterQuote = 'https://twitter.com/intent/tweet?text=' + quoteContainer.innerText + "  Author: " + Author.innerText;
  $(".twitter-share-button").attr("href", twitterQuote);*/

  function newRandomQuote(quoteArray, quoteElement, authorElement) {
    
    var newQuote = quoteArray[randomGen(0, quoteArray.length - 1)];
    quoteElement.innerText = newQuote.quote;
    authorElement.innerText = newQuote.author;

    function randomGen(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var twitterQuote = 'https://twitter.com/intent/tweet?text=' + quoteContainer.innerText + "  Author: " + Author.innerText;
    $(".twitter-share-button").attr("href", twitterQuote);
    
  }
})();