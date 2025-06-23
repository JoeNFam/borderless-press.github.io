const apiKey = "152ea3d368214d20bbfacdba74310532";
const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${apiKey}`;

async function getNews() {
  const container = document.getElementById("news-container");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching news: " + response.statusText);
    }

    const data = await response.json();
    container.innerHTML = "";

    if (data.articles.length === 0) {
      container.innerHTML = "No news articles found.";
      return;
    }

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

  } catch (error) {
    console.error("News API failed. Showing demo news instead.");
    container.innerHTML = "<strong>⚠️ Live news not available. Showing demo news:</strong><br><br>";

    const demoNews = [
      {
        title: "Global Leaders Meet to Discuss Climate Action",
        description: "World leaders gather to push for stronger environmental policies and sustainable growth.",
        url: "https://example.com/demo-news-1"
      },
      {
        title: "AI is Transforming Healthcare Across Borders",
        description: "Doctors and hospitals worldwide are adopting AI to improve diagnoses and treatments.",
        url: "https://example.com/demo-news-2"
      },
      {
        title: "International Sports Events Boost Tourism",
        description: "Countries hosting global tournaments report a significant rise in visitors.",
        url: "https://example.com/demo-news-3"
      }
    ];

    demoNews.forEach(article => {
      const newsDiv = document.createElement("div");
      newsDiv.className = "news-item";
      newsDiv.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      container.appendChild(newsDiv);
    });
  }
}

getNews();
