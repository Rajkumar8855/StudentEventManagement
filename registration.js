cat > registration.js <<'EOF'
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("student-name").value.trim();
    const studentEmail = document.getElementById("student-email").value.trim();
    const eventName = document.getElementById("event-name").value.trim();

    if (!studentName || !studentEmail || !eventName) {
        return;
    }

    document.getElementById("registration-message").textContent =
        "Registration successful for " + studentName +
        " in " + eventName + "!";

    registrationForm.reset();
});
EOF