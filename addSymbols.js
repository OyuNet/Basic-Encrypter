import { addSymbol } from "./db.js";

async function kekw() {
    await addSymbol("a", 1);
    await addSymbol("b", 2);
    await addSymbol("c", 3);
    await addSymbol("ç", 4);
    await addSymbol("d", 5);
    await addSymbol("e", 6);
    await addSymbol("f", 7);
    await addSymbol("g", 8);
    await addSymbol("ğ", 9);
    await addSymbol("h", 10);
    await addSymbol("ı", 11);
    await addSymbol("i", 12);
    await addSymbol("j", 13);
    await addSymbol("k", 14);
    await addSymbol("l", 15);
    await addSymbol("m", 16);
    await addSymbol("n", 17);
    await addSymbol("o", 18);
    await addSymbol("ö", 19);
    await addSymbol("p", 20);
    await addSymbol("r", 21);
    await addSymbol("s", 22);
    await addSymbol("ş", 23);
    await addSymbol("t", 24);
    await addSymbol("u", 25);
    await addSymbol("ü", 26);
    await addSymbol("v", 27);
    await addSymbol("y", 28);
    await addSymbol("z", 29);
    await addSymbol("w", 30);
    await addSymbol("q", 31);
    await addSymbol("x", 32);
}

kekw();