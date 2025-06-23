const apiKey = "YOUR_API_KEY"; // <-- Replace with your API key from newsapi.org
const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${apiKey}`;

async function getNews() {
  const response = await fetch(url);
  const data = await response.json();
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  data.articles.forEach(article => {
    const newsDiv = document.createElement("div");
    newsDiv.className = "news-item";
    newsDiv.innerHTML = \`
      <h3>\${article.title}</h3>
      <p>\${article.description || "No description"}</p>
      <a href="\${article.url}" target="_blank">Read more</a>
    \`;
    container.appendChild(newsDiv);
  });
}

getNews();
