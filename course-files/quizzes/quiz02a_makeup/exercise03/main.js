async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/fall/`;
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data);
}

function displayResults(courses) {
    // your code here.
    console.log(courses);
}
