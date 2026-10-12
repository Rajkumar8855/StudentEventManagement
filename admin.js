cat > admin.js <<'EOF'
const eventForm = document.getElementById("event-form");

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("new-event").value.trim();
    const date = document.getElementById("event-date").value;
    const location = document.getElementById("event-location").value.trim();

    if (!name || !date || !location) {
        return;
    }

    events.push({ name, date, location });
    renderEvents();

    document.getElementById("admin-message").textContent =
        "New event added successfully: " + name;

    eventForm.reset();
});
EOF