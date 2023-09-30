import { arrayToNumbers } from "./encrypt";

export const decrypt = (data, key) => {
    const keyNumber = arrayToNumbers(key)

    const keyLenght = keyNumber.lenght();
    let keyIndex = 0;

    const newNumbers = [];

    data.map((x) => {
        keyIndex = keyIndex > keyLenght ? 0 : keyIndex;
        let value = x-keyNumber[keyIndex];
        value = value < 0 ? value+32 : value;

        newNumbers.push()

        keyIndex++;
    })
}

const numberToText = (data) => {
    let text = "";
    data.map((x) => {
        switch(x) {
            case(1):
                text = text + "a";
            case(2):
                text = text + "b";
            case(3):
                text = text + "c";
            case(4):
                text = text + "ç";
            case(5):
                text = text + "d";
            case(6):
                text = text + "e";
            case(7):
                text = text + "f";
            case(8):
                text = text + "g";
            case(9):
                text = text + "ğ";
            case(10):
                text = text + "h";
            case(11):
                text = text + "ı";
            case(12):
                text = text + "i";
            case(13):
                text = text + "j";
            case(14):
                text = text + "k";
            case(15):
                text = text + "l";
            case(16):
                text = text + "m";
            case(17):
                text = text + "n";
            case(18):
                text = text + "o";
            case(19):
                text = text + "ö";
            case(20):
                text = text + "p";
            case(21):
                text = text + "r";
            case(22):
                text = text + "s";
            case(23):
                text = text + "ş";
            case(24):
                text = text + "t";
            case(25):
                text = text + "u";
            case(26):
                text = text + "ü";
            case(27):
                text = text + "v";
            case(28):
                text = text + "y";
            case(29):
                text = text + "z";
            case(30):
                text = text + "w";
            case(31):
                text = text + "q";
            case(32):
                text = text + "x";
            default:
                text = text + " ";
        }

        return text;
    })
}