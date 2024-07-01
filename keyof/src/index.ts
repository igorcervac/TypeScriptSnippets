function getPropertyValue<T, U extends keyof T>(obj: T, prop: U){
    return obj[prop];
};

interface ICertification {
    title: string,
    date: Date
};

let az204: ICertification = { title: 'AZ-204', date: new Date("2023-04-27") };

let title = getPropertyValue(az204, 'title');
console.log(title);

let date = getPropertyValue(az204, 'date');
console.log(date);
