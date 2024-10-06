let statuses = [
    "em",
    "is",
    "my",
    "fav",
    "poop🙄"
];

let index = 0;

function changeStatus() {
    if (index >= statuses.length) {
        index = 0; // Reset to the first status
    }

    // Update the Discord status
    DiscordAPI.setStatus(statuses[index]);
    index++;
}

// Start changing status every second
setInterval(changeStatus, 1000);
