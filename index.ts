
type Employee = { 
  Employee : string
  Employee_id:number
  task:string[]
};


let Employee_Tracker: Employee[] = [
  {
    Employee : "Prateek",
    Employee_id: 568,
    task: ["- Training Project [Ongoing, Working] ","Fixed Bug2"], 
  },
  {
    Employee: "Lavish",
    Employee_id: 569,
    task: ["Training Project [Learning TS, Medium Level]", "Fixed Bug 1"]
  }
];
console.log(Employee_Tracker)

// union / intersection ty[e ]
// union type 
type CouponCode = {
  code: string | number;
};

let X: CouponCode = { code: "ZSACX" };
let Y: CouponCode = { code: 123 };

console.log(X)
console.log(Y)


// 2️ intersection type of exa,

type TypeA = { id: number };
type TypeB = { value: string };

type Combined = TypeA & TypeB;

let something: Combined = { id: 1, value: "Hello" };
console.log(something);

//generic 
type Box<T> = {
  content: T;
};

let stringBox: Box<string> = { content: "Hello TS" };
let numberBox: Box<number> = { content: 42 };

console.log(stringBox)
console.log(numberBox)

//  didn't read Interfaces and Classes yet  
//  demonstartion and excution flow 