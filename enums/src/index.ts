interface Certification{
    title: string,
    year: Date,
    company: string,
    renewable?: boolean,
    status: CertificationStatus
};

enum CertificationStatus {
    NotTaken = "not taken",
    Failed = "failed",
    Passed = "passed"
};

let az204: Certification = {
    title: "AZ-204",
    year: new Date("27-04-2023"),
    company: "Microsoft",
    status: CertificationStatus.Passed
};

let ai900: Certification = {
    title: "AI-900",
    year: new Date("27-09-2024"),
    company: "Microsoft",
    status: CertificationStatus.NotTaken
}; 