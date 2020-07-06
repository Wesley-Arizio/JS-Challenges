// Description
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const time = "06:05:40PM";

const getType = (type) => {
    return type.substring(8);
}


const convertToPM = (hour, minute, second) => {
    return `${parseInt(hour) + 12}:${minute}:${second}`;
};
const convertToAM = (hour, minute, second) => {
    return `0${parseInt(hour) - 12}:${minute}:${second}`;
};

const type = (getType(time));

const setConvertionType = (time, type) => {
    const [ hour, minute, second ] = time.split(':');

    if(type == "PM"){
        if(hour < 12){
            return convertToPM(hour, minute, second);
        }else if( hour >= 12){
            return `${hour}:${minute}:${second}`
        }
     }

     if(type == "AM"){
         if(hour >= 12){
            return convertToAM(hour, minute, second);
         }else if(hour < 12){
            return `${hour}:${minute}:${second}`;
         }
     }
};

console.log(setConvertionType(time.substring(8, -8), type));


