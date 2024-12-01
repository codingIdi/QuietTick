function updateTime() {
    const now = new Date();

    // Date options for displaying the date

    // Time options for displaying the time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("time").textContent = now.toLocaleTimeString(undefined, timeOptions);

 
}

// Update every second
setInterval(updateTime, 1000);
updateTime();
