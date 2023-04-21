// לא עובד

const disableKeys = function () {
    if (key === 65 || key === 68 || key === 83 || key === 87) {
        event.preventDefault();
    }
};