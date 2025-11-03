var Employee_Tracker = [
    {
        Employee: "Prateek",
        Employee_id: 568,
        task: ["- Training Project [Ongoing, Working] ", "Fixed Bug2"],
    },
    {
        Employee: "Lavish",
        Employee_id: 569,
        task: ["Training Project [Learning TS, Medium Level]", "Fixed Bug 1"]
    }
];
console.log(Employee_Tracker);
function addEmployee(newEmployee) {
    Employee_Tracker.push(newEmployee);
}
addEmployee({
    Employee: "Aarav",
    Employee_id: 570,
    task: ["New Onboarding", "Setup Dev Environment"]
});
console.log(Employee_Tracker);
var X = { code: "ZSACX" };
var Y = { code: 123 };
console.log(X);
console.log(Y);
var something = { id: 1, value: "Hello" };
console.log(something);
var stringBox = { content: "Hello TS" };
var numberBox = { content: 42 };
console.log(stringBox);
console.log(numberBox);
//  didn't read Interfaces and Classes yet  
//  demonstartion and excution flow 
