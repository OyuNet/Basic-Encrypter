import { checkSymbol, getSymbol } from "./db.js";

export const encrypt = async (data, key) => {
    const keyArray = key.split("");
    const dataArray = data.split("");

    console.log("values splitted")

    const keyNumbers = arrayToNumbers(keyArray);
    const dataNumbers = arrayToNumbers(dataArray);

    console.log("data and key has been converted to number arrays.")

    const finalValue = collectNumbers(dataNumbers, keyNumbers);

    console.log("two array has been merged")

    console.log(finalValue)
    return finalValue;
}

const collectNumbers = async (data, key) => {
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

const shuffleNumbers = (data, key) => {
    if (!(Array.isArray(data) || Array.isArray(key))) {
        return console.log("Data or key is not an array.")
    }

    let newArray = data;

    // Just a reminder. Data is collected number array. So I just use this for shuffling.

    const keyLength = key.length
    const dataLength = data.length
    let indexNum = 0;
    let multiplier = 1;
    if (dataLength < keyLength) {
        console.log("Data is shorter than key. So shuffle operation will be cancelled.")
        return newArray;
    }

    if (isEven(keyLength)) { // Çiftse
        const stopNum = keyLength/2;

        while (indexNum < stopNum) { // Basic swap operation.
            let cache = newArray[indexNum];
            newArray[indexNum] = newArray[keyLength-indexNum];
            newArray[keyLength-indexNum] = cache;

            indexNum++;
        }
    } else {
        const stopNum = keyLength/2 - 0.5;

        while(indexNum >= stopNum) {
            let cache = newArray[indexNum];
            newArray[indexNum] = newArray[keyLength-indexNum];
            newArray[keyLength-indexNum] = cache;

            indexNum++;
        }
    }

}

const isEven = (number) => {
    const status = number % 2 == 0 ? status = true : status = false;
    return status;
}

export const arrayToNumbers = async (data) => {
    let NumberArray = [];

    await data.map((x) => {
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