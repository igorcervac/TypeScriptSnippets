function getTuple(): readonly [string, number]{
    return ["AZ-204", 2024];
}

function getOptionalTuple(): readonly [string, number?]{
    return ["AZ-204"];
}

let tuple = getTuple();
console.log(tuple[0], tuple[1]);

var optionalTuple = getOptionalTuple();
console.log(optionalTuple[0]);

