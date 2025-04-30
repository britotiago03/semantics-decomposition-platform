// This file contains intentional ESLint errors for testing

// Unused variable - should trigger an ESLint error
const unusedVariable = "This will trigger an error";

// Missing semicolon - might trigger an error depending on your config
const missingsemicolon = "Test"

// Function with unused parameter
function testFunction(unusedParam: string) {
    console.log("This function doesn't use its parameter");
}