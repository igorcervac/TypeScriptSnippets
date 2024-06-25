interface Certification{
    title: string,
    year: Date,
    company: string,
    renewable?: boolean
}

var az204: Certification = {
    title: "AZ-204",
    year: new Date("27-04-2023"),
    company: "Microsoft"
}