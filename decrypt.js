import { arrayToNumbers } from "./encrypt.js";
import { checkSymbol, getSymbol } from "./db.js";

export const decrypt = (data, key) => {
    const keyNumber = arrayToNumbers(key)

    const keyLenght = keyNumber.lenght();
    let keyIndex = 0;

    const newNumbers = [];

    data.map((x) => {
        keyIndex = keyIndex > keyLenght ? 0 : keyIndex;
        
        let value = x-keyNumber[keyIndex];
        value = value < 0 ? value+32 : value;

        newNumbers.push(numberToText(value))

        keyIndex++;
    })
}

const numberToText = (data) => {
    let text = "";
    data.map((x) => {
        if (checkSymbol(x)) {
            const letter = getSymbol(x);
            text = text + letter;
        } else {
            text = text + " ";
        }
    })

    return text;
}