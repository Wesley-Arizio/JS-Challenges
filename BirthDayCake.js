// Description: 
// You are in charge of the cake for your niece's birthday
// and have decided the cake will have one candle for each
// year of her total age. When she blows out the candles,
// she’ll only be able to blow out the tallest ones. Your task
// is to find out how many candles she can successfully blow out.


const birthdayCandle = [];
let hightCandle = 0;
const hightCandleLength = []


const getCandles = (candle) => {
    for(let i = 1; i< candle; i++){
        birthdayCandle.push(candle - i);
    }
}

getCandles(4);

const getHightCandle = (birthdayCandle) => {
    birthdayCandle.forEach( candle => {
        if(hightCandle < candle) return hightCandle = candle;
    }); 
};

getHightCandle(birthdayCandle);
birthdayCandle.push(hightCandle);

const getHightCandleLength = (birthdayCandle) => {
    birthdayCandle.forEach(candle => {
        if(hightCandle == candle) return hightCandleLength.push(candle);
    })
};

getHightCandleLength(birthdayCandle);
console.log(hightCandleLength.length);




