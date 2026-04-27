// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
    // Get data from localStorage
    const name = localStorage.getItem("name");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const guests = localStorage.getItem("guests");
    const requests = localStorage.getItem("requests");
    const confirmation = localStorage.getItem("confirmation");
    const tableNumber = localStorage.getItem("tableNumber");
    // Put data into page
    document.getElementById("confNum").textContent = confirmation;
    document.getElementById("confName").textContent = name;
    document.getElementById("confDate").textContent = date;
    document.getElementById("confTime").textContent = time;
    document.getElementById("confGuests").textContent = guests;
    document.getElementById("confRequests").textContent = requests || "None";
    document.getElementById("confTable").textContent = tableNumber;
});