// global variables tracking the user's preferences:

let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;

    // Pass the user's preferences into the showData function
    showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
    if (openOnly) {
        return course.Classification.Open;
    }
    return true;
};

// Part 1.1b
const doesTermMatch = (course) => {
    console.log(course.Title.toLowerCase());
    console.log(searchTerm.toLowerCase());
    console.log(course.Title.toLowerCase().includes(searchTerm.toLowerCase()));
    return course.Title.toLowerCase().includes(searchTerm.toLowerCase());
};

// Part 1.2
const dataToHTML = (course) => {
    // modify this
    const seatsAvailable = Math.max(
        0,
        course.EnrollmentMax - course.EnrollmentCurrent
    );
    const instructor =
        course.Instructors.length > 0 ? course.Instructors[0].Name : "--";
    const days = course.Days || "TBD";
    const location =
        course.Location && course.Location.FullLocation
            ? course.Location.FullLocation
            : "TBD";
    return `
        <section class="course">
            <h2>${course.Code}: ${course.Title}</h2>
            <p>
                
                ${
                    course.Classification.Open
                        ? 'Open <i class="fa-solid fa-circle-check"></i>'
                        : 'Closed <i class="fa-solid fa-circle-xmark"></i>'
                }  
                &bull; ${course.CRN} &bull; 
                Seats Available: ${seatsAvailable}
            </p>
            <p>
                ${days} &bull; 
                ${location} &bull; 
                ${course.Hours} credit hour(s)
            </p>
            <p><strong>${instructor}</strong></p>
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
    const container = document.querySelector(".courses");
    // clear
    container.innerHTML = "";

    // first filter:
    const matches = courseList.filter(doesTermMatch).filter(isClassFull);

    // then output:
    matches.forEach((course) => {
        const snippet = dataToHTML(course);
        container.insertAdjacentHTML("beforeend", snippet);
    });
};
