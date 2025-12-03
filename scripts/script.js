

function updateDateTime() {
    
    let now = new Date();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const isAmPm = hours >= 12 ? 'PM' : 'AM' 
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes} ${isAmPm}`
    

    // updating html 
    document.querySelector('.meta-day').textContent = dayName;
    document.querySelector('.meta-time').textContent = timeString;

}

updateDateTime();
setInterval(updateDateTime, 2000);