function calculateArea(length, width) {
    if (typeof length !== "number" || typeof width !== "number"){
        throw new Error(" can you pass both value will be a number");
    }
    return length * width;
}
try {
    console.log(calculateArea(10, "5"));
} catch (error) {
    console.log(error)
}


