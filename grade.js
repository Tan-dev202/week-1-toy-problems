// calculateGrade uses ternary operator to determine the grade based on the value of the .
function calculateGrade() {
    let marks = Number(prompt("Enter student marks (between 0 and 100):"));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input (please enter a number between 0 and 100).";
    }
    return marks > 79
    ? grade = "A"
    : marks >= 60 && marks <= 79
    ? grade = "B"
    : marks >= 50 && marks <= 59
    ? grade = "C"
    : marks >= 40 && marks <= 49
    ? grade = "D"
    : grade = "E"
}

console.log(calculateGrade());