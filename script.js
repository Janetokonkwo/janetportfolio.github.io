document.addEventListener("DOMContentLoaded", function() {
    function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
    }

    function updateUTCTime() {
        const currentDate = new Date();
        const utcTime = currentDate.getTime();
        document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
    }

    updateDayOfWeek();
    updateUTCTime();

    setInterval(updateDayOfWeek, 1000);
    setInterval(updateUTCTime, 1000);
});
