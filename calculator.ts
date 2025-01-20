#!/usr/bin/env ts-node

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display menu options
const displayMenu = (): void => {
  console.log(`\nCLI Calculator (EL15 Style)
==========================
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit`);
};

// Perform calculation based on the operation
const calculate = (num1: number, num2: number, operation: string): string | number => {
  switch (operation) {
    case '1':
      return num1 + num2;
    case '2':
      return num1 - num2;
    case '3':
      return num1 * num2;
    case '4':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Invalid operation';
  }
};

// Get user input
const getInput = (prompt: string): Promise<string> => {
  return new Promise((resolve) => rl.question(prompt, resolve));
};

// Main logic for calculator
const main = async (): Promise<void> => {
  while (true) {
    displayMenu();

    const operation = await getInput('Choose an option (1-5): ');
    if (operation === '5') {
      console.log('Goodbye!');
      rl.close();
      break;
    }

    const firstNum = parseFloat(await getInput('Enter the first number: '));
    if (isNaN(firstNum)) {
      console.log('Error: Please enter a valid number.');
      continue;
    }

    const secondNum = parseFloat(await getInput('Enter the second number: '));
    if (isNaN(secondNum)) {
      console.log('Error: Please enter a valid number.');
      continue;
    }

    const result = calculate(firstNum, secondNum, operation);
    console.log(`Result: ${result}`);
  }
};

// Run the calculator
main();



