function updateclock(){
    let today = new Date();
    let hours = today.getHours().toString().padStart(2, 0);
    const ampm = today.getHours() >= 12? 'PM' : 'AM';
    let minutes = today.getMinutes().toString().padStart(2, 0);
    let seconds = today.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timestring;
}
updateclock();
setInterval(updateclock,1000);