import React from "react";

const Display = ({expression, result, showExpression}) =>{
    return(
        <div className="display">
            <div className="expression">
                {showExpression ? expression : ''}
            </div>
            <div className="result">
                {result}
            </div>
        </div>
    )
}

export default Display;