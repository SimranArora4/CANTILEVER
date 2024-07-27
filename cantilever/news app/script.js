
const API_KEY = "LetHym1bnE703e1MUVVgS9uAFszmrYKWxNZFH6Qf";
const url = "https://api.thenewsapi.com/v1/news/";
let category = null;


window.addEventListener("load", () => fetchNews());

async function fetchNews() {
    try {
        const res = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=LetHym1bnE703e1MUVVgS9uAFszmrYKWxNZFH6Qf&language=en&limit=3`)
       // const res = await fetch(`${url}${query}?locale=us&language=en&api_token=${API_KEY}&categories=${category}`);
        const data = await res.json();
        console.log(data);
        bindData(data);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

async function fetchNewsByCategory(cat) {
    try {
        const res = await fetch(`${url}all?locale=us&language=en&api_token=${API_KEY}&categories=${cat}`);
        const data = await res.json();
        console.log(data);
        bindData(data);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(data) {
    const cardsContainer = document.getElementById("cards-container");
    const templateNewsCard = document.getElementById("template-news-card");
    cardsContainer.innerHTML = "";
    console.log(data);

    data.data.forEach(article => {
        console.log(article);
        console.log(article.image_url);
        if (!article.image_url) {
            return;
        }
        const cardClone = templateNewsCard.content.cloneNode(true);
        fillData(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillData(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.image_url;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    const date = new Date(article.published_at).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    newsSource.innerHTML = `${article.source.name} • ${date}`;
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let CurSelectedNav = null;

function onNavItemClick(id) {
    try {
        category = id;
        fetchNewsByCategory(id);
        const NavItem = document.getElementById(id);
        CurSelectedNav?.classList.remove('active');
        CurSelectedNav = NavItem;
        CurSelectedNav.classList.add('active');
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

const SearchBtn = document.getElementById('search-button');
const SearchText = document.getElementById('search-text');
SearchBtn.addEventListener("click", () => {
    const query = SearchText.value;
    if (!query) return;

    fetchNewsByCategory(query);
    CurSelectedNav?.classList.remove("active");
    CurSelectedNav = null;
});

function reload() {
    window.location.reload();
}
