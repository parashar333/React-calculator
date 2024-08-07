import React, { useState } from 'react';
import Display from './display';
import Button from './button';
import './calculator.css';

export function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [showExpression, setShowExpression] = useState(true);
    const [lastActionWasEquals, setLastActionWasEquals] = useState(false);


    const handleButtonClick = (value) => {
        if (lastActionWasEquals && !isNaN(value)) {
            // If last action was '=' and current value is a number, reset the expression
            setExpression(value);
            setResult(value);
            setShowExpression(true);
            setLastActionWasEquals(false);
        } else if (lastActionWasEquals && ['+', '-', '*', '/'].includes(value)) {
            // If last action was '=' and current value is an operator, start with the result
            setExpression(result + value);
            setShowExpression(true);
            setLastActionWasEquals(false);
        } else {
            // Continue appending characters to the expression
            setExpression((prev) => {
                const newExpression = prev + value;
                updateResult(newExpression);
                return newExpression;
            });
        }
    };

    const evaluateExpression = (expr) => {
        const cleanExpr = expr.replace(/[^-()\d/*+.]/g, '');
        if (!cleanExpr) return 'Invalid expression';
        const tokens = [];
        let numberBuffer = [];
    
        for (let i = 0; i < cleanExpr.length; i++) {
            const char = cleanExpr[i];
    
            if (!isNaN(char) || char === '.') {
                numberBuffer.push(char);
            } else {
                if (numberBuffer.length) {
                    tokens.push(numberBuffer.join(''));
                    numberBuffer = [];
                }
                if (char === '-' && (i === 0 || cleanExpr[i - 1] === '(')) {
                    // Handle negative numbers
                    numberBuffer.push(char);
                } else {
                    tokens.push(char);
                }
            }
        }
    
        if (numberBuffer.length) {
            tokens.push(numberBuffer.join(''));
        }
    
        let stack = [];
        let postfix = [];
    
        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };
    
        const isOperator = (char) => ['+', '-', '*', '/'].includes(char);
    
        tokens.forEach((token) => {
            if (!isNaN(token)) {
                postfix.push(Number(token));
            } else if (isOperator(token)) {
                while (
                    stack.length &&
                    precedence[stack[stack.length - 1]] >= precedence[token]
                ) {
                    postfix.push(stack.pop());
                }
                stack.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    postfix.push(stack.pop());
                }
                stack.pop();
            }
        });
    
        while (stack.length) {
            postfix.push(stack.pop());
        }
    
        const evaluatePostfix = (postfix) => {
            const stack = [];
            postfix.forEach((token) => {
                if (typeof token === 'number') {
                    stack.push(token);
                } else {
                    const b = stack.pop();
                    const a = stack.pop();
                    if (a === undefined || b === undefined) {
                        return 'Invalid expression';
                    }
                    switch (token) {
                        case '+':
                            stack.push(a + b);
                            break;
                        case '-':
                            stack.push(a - b);
                            break;
                        case '*':
                            stack.push(a * b);
                            break;
                        case '/':
                            if (b === 0) return 'Error: Division by zero'; // Handle division by zero
                            stack.push(a / b);
                            break;
                        default:
                            return 'Unknown operator'; // Handle unknown operators
                    }
                }
            });
            return stack[0] || 'Invalid expression';
        };
    
        return evaluatePostfix(postfix);
    };
    

    const updateResult = (exp) => {
        const operators = ['*', '/', '+', '-'];
        if(!operators.includes(exp.slice(-1))) {
            const res = evaluateExpression(exp)
            setResult(res);
        }
      };
    
    const handleEquals = () => {
        const finalResult = evaluateExpression(expression);
        setResult(finalResult.toString())
        setShowExpression(false); 
        setLastActionWasEquals(true);
    };

    const handleClear = () => {
        setExpression('');
        setResult('');
        setShowExpression(true);
        setLastActionWasEquals(false);
    }

    const handleBack = () => {
        setShowExpression(true);
        setExpression((prev) => {
            const newExpression = prev.slice(0, -1);
            updateResult(newExpression);
            return newExpression;
        });

    }

    return(
        <div className='calculator'>
            <Display expression = {expression} result={result} showExpression={ showExpression } />
            <div className="button-container">
        {['7', '8', '9', '/'].map((btn) => (
          <Button key={btn} value={btn} onClick={() =>  handleButtonClick(btn)} />
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <Button key={btn} value={btn} onClick={() =>  handleButtonClick(btn)} />
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <Button key={btn} value={btn} onClick={() =>  handleButtonClick(btn)} />
        ))}
        {['0', '.', '=', '+'].map((btn) => (
          <Button key={btn} value={btn} onClick={btn === '=' ? handleEquals : () => handleButtonClick(btn)} />
        ))}
        <Button value="C" onClick={handleClear} />
        <Button value="⌫" onClick={handleBack} />
      </div>
        </div>
    );
}