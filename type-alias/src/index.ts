interface Certification{
    title: string,
    year: Date,
    company: string,
    renewable?: boolean,
    status: CertificationStatus
};

type CertificationStatus = "not taken" | "failed" | "passed";

let az204: Certification = {
    title: "AZ-204",
    year: new Date("27-04-2023"),
    company: "Microsoft",
    status: "passed"
};

let ai900: Certification = {
    title: "AI-900",
    year: new Date("27-09-2024"),
    company: "Microsoft",
    status: "not taken"
}; 