const getBusinesses = async (location, term, limit) => {
    const request = await fetch(
        `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${term}&limit=${limit}`
    );
    const data = await request.json();
    console.log(data);
    return data;
};

const businessToHTML = (business) => {
    const template = `
        <section class="card">
            <h2>${business.name}</h2>
            <p>${business.display_address}</p>
            <p>Rating: <strong>${business.rating}</strong>
            <p>Price: <strong>${business.price || ""}</strong>
            <p># of Reviews: <strong>${business.review_count}</strong>
            <img src="${business.image_url}" alt="restaurant image" />
        </section>
    `;
    return template;
};

const search = async () => {
    console.log();
    const term = document.querySelector("#term").value;
    const location = document.querySelector("#location").value;
    console.log(term, location);
    const businesses = await getBusinesses(location, term, 5);
    showRestaurant(businesses);
};

const showRestaurant = (businesses) => {
    const html = businesses.map(businessToHTML).join("");
    document.querySelector("#results").innerHTML = html;
};
