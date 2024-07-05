interface ICertification {
    title: string;
    date: Date;
    passed: boolean;
    get description(): string;
}

class Certification implements ICertification {
    constructor(public title: string, public date: Date, public passed: boolean){

    }
    
    get description(): string {
        return `${this.title} ${this.passed ? 'passed': 'failed'} on ${this.date}`
    }
}

let certification: ICertification = new Certification("AZ-204", new Date("2024-04-27"), true);

console.log(certification.description);