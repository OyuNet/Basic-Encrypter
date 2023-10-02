import { checkSymbol, getSymbol } from "./db.js";

export const encrypt = (data, key) => {
    const keyArray = key.split("");
    const dataArray = data.split("");

    const keyNumbers = arrayToNumbers(keyArray);
    const dataNumbers = arrayToNumbers(dataArray);

    const finalValue = collectNumbers(dataNumbers, keyNumbers);

    return finalValue;
}

const collectNumbers = (data, key) => {
    if (!(Array.isArray(data) || Array.isArray(key))) {
        return console.log("Data or key is not an array.");
    }

    let keyLenght = key.length;
    let keyIndex = 0;

    let collectedNumbers = [];

    data.map((x) => {
        if (keyLenght === keyIndex) {
            keyIndex = 0;
        }

        const keyValue = key[keyIndex];
        let newValue = keyValue+x;

        const final = newValue > 32 ? newValue-32 : newValue;

        collectedNumbers.push(final);

        keyIndex++;
    })

    return collectedNumbers;
}

export const arrayToNumbers = (data) => {
    let NumberArray = [];

    data.map((x) => {
        if (checkSymbol(x)) {
            const number = getSymbol(x)
            NumberArray.push(number)
        } else {
            console.log("Symbol not found.")
            NumberArray.push(0)
        }
    })

    return NumberArray;
}