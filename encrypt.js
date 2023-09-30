export const encrypt = (data, key) => {
    const keyArray = key.split("");
    const dataArray = data.split("");

    const keyNumbers = arrayToNumbers(keyArray);
    const dataNumbers = arrayToNumbers(dataArray);

    const finalValue = collectNumbers(dataNumbers, keyNumbers);

    return finalValue;
}

const collectNumbers = (data, key) => {
    let keyLenght = key.lenght();
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
        switch(x) {
            case("a"):
                NumberArray.push(1);
            case("b"):
                NumberArray.push(2);
            case("c"):
                NumberArray.push(3);
            case("ç"):
                NumberArray.push(4);
            case("d"):
                NumberArray.push(5);
            case("e"):
                NumberArray.push(6);
            case("f"):
                NumberArray.push(7);
            case("g"):
                NumberArray.push(8);
            case("ğ"):
                NumberArray.push(9);
            case("h"):
                NumberArray.push(10);
            case("ı"):
                NumberArray.push(11);
            case("i"):
                NumberArray.push(12);
            case("j"):
                NumberArray.push(13);
            case("k"):
                NumberArray.push(14);
            case("l"):
                NumberArray.push(15);
            case("m"):
                NumberArray.push(16);
            case("n"):
                NumberArray.push(17);
            case("o"):
                NumberArray.push(18);
            case("ö"):
                NumberArray.push(19);
            case("p"):
                NumberArray.push(20);
            case("r"):
                NumberArray.push(21);
            case("s"):
                NumberArray.push(22);
            case("ş"):
                NumberArray.push(23);
            case("t"):
                NumberArray.push(24);
            case("u"):
                NumberArray.push(25);
            case("ü"):
                NumberArray.push(26);
            case("v"):
                NumberArray.push(27);
            case("y"):
                NumberArray.push(28);
            case("z"):
                NumberArray.push(29);
            case("w"):
                NumberArray.push(30);
            case("q"):
                NumberArray.push(31);
            case("x"):
                NumberArray.push(32);
            default:
                NumberArray.push(0);
        }
    })

    return NumberArray;
}