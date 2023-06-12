const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
});

articles.map((article) => {
    const { title, date, length, snippet } = article
    const usDate = date.toDateString()
    articlesContainer.innerHTML += `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
    <span>${usDate}</span>
    <span>${length} min read</span>
    </div>
<p>
${snippet}
</p>
    </article>`
}).join()
