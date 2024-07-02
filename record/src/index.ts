let certification: Record<string, string | Date | boolean> = { title: "AZ-204" };
console.log(certification.title);

certification.date = new Date("2023-04-27");
console.log(certification.date);

certification.passed = true;
console.log(certification.passed);