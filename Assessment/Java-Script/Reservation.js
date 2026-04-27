// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop normal form submit
        // Get values from inputs
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;
        const requests = document.getElementById("requests").value;
        // Generate confirmation number and table number
        const confirmation = "#R" + Math.floor(Math.random() * 1000000000);
        const tableNumber = Math.floor(Math.random() * 55) + 1; // Random table number between 1 and 55
        // Store data in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("date", date);
        localStorage.setItem("time", time);
        localStorage.setItem("guests", guests);
        localStorage.setItem("requests", requests);
        localStorage.setItem("confirmation", confirmation);
        localStorage.setItem("tableNumber", tableNumber);
        // Redirect to confirmation page
        window.location.href = "Reservationconfirmation.html";
    });
});