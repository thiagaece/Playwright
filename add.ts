// Sample TypeScript Program

// Function to add two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Class representing a User
class User {
  private username: string;
  private age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.username} and I am ${this.age} years old.`);
  }
}

// Main program
const result = addNumbers(10, 20);
console.log("Sum:", result);

const user1 = new User("Thiaga", 35);
user1.greet();
