cat > events.js <<'EOF'
const events = [
    { name: "Technical Fest", date: "2026-11-10", location: "Main Auditorium" },
    { name: "Coding Competition", date: "2026-11-15", location: "Computer Lab" },
    { name: "Cultural Day", date: "2026-11-20", location: "College Ground" }
];

function renderEvents() {
    const container = document.getElementById("event-list");
    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("article");
        card.className = "event-card";

        const title = document.createElement("h3");
        title.textContent = event.name;

        const date = document.createElement("p");
        date.textContent = "Date: " + event.date;

        const location = document.createElement("p");
        location.textContent = "Location: " + event.location;

        const button = document.createElement("button");
        button.textContent = "Register for Event";
        button.addEventListener("click", () => {
            document.getElementById("event-name").value = event.name;
            document.getElementById("registration").scrollIntoView();
        });

        card.append(title, date, location, button);
        container.appendChild(card);
    });
}

renderEvents();
EOF