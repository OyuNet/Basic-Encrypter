import { QuickDB } from "quick.db";

const db = new QuickDB();

export const addSymbol = async (symbol, value) => {
    value = value.isInteger() ? value : null;
    symbol = symbol.split("").lenght() > 1 ? null : symbol;

    if (await (db.has(symbol))) {
        return console.error(`DB already has this symbol. Specified symbol: ${symbol}`)
    }

    await db.add(symbol, value)
}

export const removeSymbol = async (symbol) => {
    symbol = symbol.split("").lenght > 1 ? null : symbol;

    if (!(await db.has(symbol))) {
        return console.error(`DB hasn't this symbol. Specified symbol: ${symbol}`);
    }

    await db.delete(symbol);
}