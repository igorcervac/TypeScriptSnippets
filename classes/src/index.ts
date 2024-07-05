class Certificaton{
    constructor(private title: string, private date: Date, private passed: boolean){

    }
    
    get description(){
        return `${this.title} ${this.passed ? 'passed': 'failed'} on ${this.date}`
    }
}

let certification = new Certificaton("AZ-204", new Date("2024-04-27"), true);

console.log(certification.description);