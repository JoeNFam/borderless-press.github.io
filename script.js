const apiKey = "152ea3d368214d20bbfacdba74310532"; 
const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${apiKey}`;

async function getNews() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching news: " + response.statusText);
    }

    const data = await response.json();
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.articles.forEach(article => {
      const newsDiv = document.createElement("div");
      newsDiv.className = "news-item";
      newsDiv.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description || "No description available"}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      container.appendChild(newsDiv);
    });

    if (data.articles.length === 0) {
      container.innerHTML = "No news articles found.";
    }

  } catch (error) {
    document.getElementById("news-container").innerText = error.message;
    console.error(error);
  }
}

getNews();
