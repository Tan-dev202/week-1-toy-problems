// Net Salary Calculator
function calculateNetSalary() {
    // input values of basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter basic salary amount"));
    let benefits = parseFloat(prompt("Enter benefits amount"));
    // calculate payee (i.e. Tax)
    let payee = Math.floor((basicSalary + benefits) * 0.25);
    // calculate NSSF deductions
    let NSSFDeductions = Math.floor(basicSalary * 0.12);
    // calculate NHIF deductions
    let grossSalary = Math.floor(basicSalary + benefits);
    // calculate net salary
    let NHIFDeductions = Math.floor(grossSalary * 0.0275);
    // calculate gross salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
    // output the net salary
    return netSalary
}

/* console.log(`P.A.Y.E.: ${payee}`)
console.log(`Gross Salary: ${grossSalary}`)
console.log(`NSSF Deduction: ${NSSFDeductions}`)
console.log(`NHIF Deduction: ${NHIFDeductions}`)
console.log(`Net Salary: ${netSalary}`) */

console.log(calculateNetSalary())
