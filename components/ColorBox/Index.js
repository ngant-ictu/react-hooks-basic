import React, {useState, useEffect} from 'react';


const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'white', 'blue']
    
    //Math.random() return a value: 0 < value < 1
    //Math.trunc return a interger value
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

const ColorBox = () => {
    const [color, setColor] = useState(() => {
        const initColor =  typeof window !== 'undefined' ?localStorage.getItem('box-color') : 'deeppink'
        return initColor;
    });
    
    const handleBoxClick = () => {
        // get random color -> set Color
        const newColor = getRandomColor();
        setColor(newColor);
        
        localStorage.setItem('box-color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
         COLOR BOX
        </div>
    );
};

export default ColorBox;