document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        {
            text: "Не спрашивай, что нужно миру. Спроси себя, что делает тебя живым. Затем пойди и займись этим. Миру нужны живые люди.\n" +
                "\n",
            author: "Говард Турман"
        },
        {
            text: "Логика приведет вас из пункта А в пункт Б. Воображение приведет вас куда угодно.",
            author: "Альберт Эйнштейн"
        },
        {
            text: "Каждый живет, как хочет, и расплачивается за это сам.",
            author: "Оскар Уайльд"
        },
        {
            text: "Чтобы получить от жизни то, чего хочешь, необходимо в первую очередь определить, а чего же ты хочешь.",
            author: "Киану Ривз"
        }
    ];

    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
    }

    newQuoteButton.addEventListener('click', displayQuote);
});
