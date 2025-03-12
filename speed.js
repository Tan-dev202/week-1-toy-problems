// Speed Calculator
function calculateSpeed() {
    // input value of speed, parse it as a number, and assign to 'speed' variable.
    const speed = Number(prompt("Enter speed km/h"));
    let points = 0;
    // check if speed is less than 70 and return "Ok" message.
    if (speed < 70) {
        console.log("Ok");
    } else {
        // the driver gets 1 point for every 5km/h past the 70km/h limit
        points = Math.floor((speed - 70) / 5);
        // if the accumulated points exceed 12, it return "License suspended" message.
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`)
        }
    }
}

console.log(calculateSpeed())