# React Calculator

This is a simple calculator application built with React. It supports basic arithmetic operations, displays the current expression and result, and handles complex expressions with proper operator precedence.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Real-time display of the current expression and result.
- Clear (`C`) button to reset the calculator.
- Backspace (`⌫`) button to remove the last character of the expression.
- Continues the expression when an operator is clicked after pressing `=`.
- Supports negative numbers.
- Modern, visually appealing UI with a dark theme and accent colors.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/parashar333/React-calculator.git
    ```

2. Navigate to the project directory:
    ```sh
    cd calculator
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to see the calculator in action.

## File Structure

- `src/`
  - `components/`
    - `Calculator.js` - Main calculator component.
    - `Display.js` - Component to display the expression and result.
    - `Button.js` - Component for calculator buttons.
  - `styles/`
    - `calculator.css` - Styles for the calculator.

## Styling

The calculator uses a dark theme with cyan and orange accent colors. You can customize the colors in `src/styles/calculator.css`.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License
MIT License

Copyright (c) 2024 Parashar Chilukuri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
