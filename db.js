import { QuickDB } from "quick.db";

const db = new QuickDB();

export const addSymbol = async (symbol, value) => {
    value = Number.isInteger(value) ? value : null;
    symbol = symbol.length > 1 ? null : symbol;

    if (await (db.has(symbol))) {
        return console.error(`DB already has this symbol. Specified symbol: ${symbol}`)
    }

    await db.set(`keys.${symbol}`, value)
}

export const getSymbol = async (symbol) => {
    const status = db.has(`keys.${symbol}`);
    const value = status ? await db.get(`keys.${symbol}`) : null;
    return value;
}

export const removeSymbol = async (symbol) => {
    symbol = symbol.split("").lenght > 1 ? null : symbol;

    if (!(await db.has(symbol))) {
        return console.error(`DB hasn't this symbol. Specified symbol: ${symbol}`);
    }

    await db.delete(symbol);
}