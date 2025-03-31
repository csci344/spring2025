const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaArticle(searchTerm) {
    const response = await fetch(`${ENDPOINT_WIKIPEDIA}/${searchTerm}`);
    const articleData = await response.json();
    return articleData;
}

function dataToHTML(wikiArticle) {
    return `
        <section class="card">
            <img src="${wikiArticle.thumbnail.source}">
            <div>
                <h2>${wikiArticle.title}</h2>
                ${wikiArticle.extract_html}
            </div>
        </section>`;
}

async function testGetWikipediaArticles() {
    const western = await getWikipediaArticle("Western Carolina University");
    const unca = await getWikipediaArticle("UNC Asheville");
    const app = await getWikipediaArticle("Appalachian State");
    const charlotte = await getWikipediaArticle("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testGetWikipediaArticles();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}

// Uncomment to test:
testGetWikipediaArticles(); // Part A
testDisplayArticles(); // Part B
