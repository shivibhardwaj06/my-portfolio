let skills = ["Python", "DBMS", "SQL", "HTML", "CSS", "JavaScript"];

let container = document.getElementById("skillsContainer");

for (let i = 0; i < skills.length; i++) {
    container.innerHTML += "<div class='skill-box'>" + skills[i] + "</div>";
}

async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    
    document.getElementById("userCard").innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
    `;
}

getUser();

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("nameField").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;
    
    if (name === "") {
        alert("Please enter your name!");
    } else if (email === "") {
        alert("Please enter your email!");
    } else if (message === "") {
        alert("Please enter your message!");
    } else {
        alert(`Thank you, ${name}! Your form has been submitted.`);
    }
});
