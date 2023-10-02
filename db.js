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

export const checkSymbol = async (symbol) => {
    const status = await db.has(`keys.${symbol}`);
    return status;
}

export const getSymbol = async (symbol) => {
    const status = await db.has(`keys.${symbol}`);
    const value = status ? await db.get(`keys.${symbol}`) : null;
    return value;
}

export const removeSymbol = async (symbol) => { // i dunno why i wrote this. but this feature is here and ready, dear ladies and gentlemans. i didnt even check this func status. so use wisely. thanks.
    symbol = symbol.split("").lenght > 1 ? null : symbol;

    if (!(await db.has(symbol))) {
        return console.error(`DB hasn't this symbol. Specified symbol: ${symbol}`);
    }

    await db.delete(symbol);
}