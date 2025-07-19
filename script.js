document.addEventListener('DOMContentLoaded', () => {
    // Simulated AI-generated news data (replace with actual API call)
    function fetchAINews() {
        // Placeholder for AI news API call
        return [
            {
                title: "Global Summit Addresses Climate Crisis",
                summary: "World leaders meet to discuss urgent climate action plans.",
                date: new Date().toLocaleString(),
                image: "https://via.placeholder.com/600x400"
            },
            {
                title: "Tech Breakthrough in AI Innovation",
                summary: "New AI model enhances real-time data processing.",
                date: new Date().toLocaleString(),
                image: "https://via.placeholder.com/600x400"
            }
        ];
    }

    // Function to update featured news
    function updateFeaturedNews() {
        const newsContainer = document.getElementById('featured-news');
        newsContainer.innerHTML = ''; // Clear existing content
        const newsItems = fetchAINews();

        newsItems.forEach(item => {
            const article = document.createElement('div');
            article.className = 'bg-white p-4 rounded-lg shadow-md';
            article.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-xl font-semibold">${item.title}</h3>
                <p class="text-gray-600">${item.summary}</p>
                <p class="text-sm text-gray-400">${item.date}</p>
            `;
            newsContainer.appendChild(article);
        });
    }

    // Function to update latest news sidebar
    function updateLatestNews() {
        const latestContainer = document.getElementById('latest-news');
        latestContainer.innerHTML = ''; // Clear existing content
        const newsItems = fetchAINews();

        newsItems.forEach(item => {
            const news = document.createElement('div');
            news.className = 'bg-white p-3 rounded-lg shadow-sm';
            news.innerHTML = `
                <h4 class="text-lg font-medium">${item.title}</h4>
                <p class="text-sm text-gray-500">${item.date}</p>
            `;
            latestContainer.appendChild(news);
        });
    }

    // Initial update
    updateFeaturedNews();
    updateLatestNews();

    // Update every 5 minutes (300,000 ms)
    setInterval(() => {
        updateFeaturedNews();
        updateLatestNews();
        console.log('News updated at: ' + new Date().toLocaleString());
    }, 300000);
});