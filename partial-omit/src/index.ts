interface ICertification {
    title: string,
    date: Date,
    company: string 
}

let certification: ICertification = { title: 'AZ-204', company: "Microsoft", date: new Date("2024-07-03") }
console.log("certification: ", certification);

type ICertificationWithOptionalProperties = Partial<ICertification>;
let certificationWithOptionalProperties: ICertificationWithOptionalProperties = { title: 'AZ-204', date: new Date("2024-07-03") }
console.log("certificationWithOptionalProperties: ", certificationWithOptionalProperties);

type ICertificationWithNoDateProperty = Omit<ICertification, "date">;
let certificationWithNoDate: ICertificationWithNoDateProperty = { title: "AZ-204", company: "Microsoft" }
console.log("certificationWithNoDate: ", certificationWithNoDate);

type ICertificationWithTitlePropertyOnly = Pick<ICertification, "title">
let certificationWithTitlePropertyOnly: ICertificationWithTitlePropertyOnly = { title: "AZ-204" }
console.log("certificationWithTitlePropertyOnly: ", certificationWithTitlePropertyOnly);

type ICertificationWithRequiredProperties = Required<ICertificationWithOptionalProperties>
let certificationWithRequiredProperties: ICertificationWithRequiredProperties = { title:"AZ-204", company: "Microsoft", date: new Date("2024-07-03") }
console.log("certificationWithRequiredProperties: ", certificationWithRequiredProperties);

