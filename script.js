// A list of notifications to display.
const notifications = [
    "✅ olivia.cash completed 3 app trials and requested $312.00 via Venmo ~ 2 hours ago",
    "💸 GR4CE completed a bonus loop and requested $422.14 via PayPal ~ 2 hours ago",
    "⚡ Mike_83 upgraded his storage barn in Family Island and earned $260 ~ 32 minutes ago",
    "💰 DANI3L.g earned $84.22 by testing games on his iPad ~ 14 minutes ago",
    "✅ olivia.cash completed 3 app trials and requested $312.00 via Venmo ~ 2 hours ago",
    "⚡ Mike_83 upgraded his storage barn in Family Island and earned $260 ~ 32 minutes ago",
    "💰 DANI3L.g earned $84.22 by testing games on his iPad ~ 14 minutes ago",
];

const notificationElement = document.querySelector('#floating-notification');
let notificationIndex = 0;
let isAnimating = false;

function showNotification(message) {
    if (isAnimating) return;
    isAnimating = true;

    notificationElement.querySelector('.floating-notification-text').textContent = message;
    notificationElement.classList.add('show');

    setTimeout(() => {
        notificationElement.classList.remove('show');
        setTimeout(() => {
            isAnimating = false;
        }, 350);
    }, 4000);
}

function cycleNotifications() {
    showNotification(notifications[notificationIndex]);
    notificationIndex = (notificationIndex + 1) % notifications.length;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        cycleNotifications();
        setInterval(cycleNotifications, 7000);
    }, 1500);
});