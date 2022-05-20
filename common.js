const fs = require('fs');

async function runSolutions(filesPromises, excersisesArguments, expectedResult){
    const solutionsFiles = await filesPromises;
    const results = [];
    let failedResults = 0;
    Object.keys(solutionsFiles).forEach(exerciseFile => {
        const solutions = solutionsFiles[exerciseFile]
        for(const solutionName in solutions){
            try {
                const result = solutions[solutionName](...excersisesArguments);
                let match = Array.isArray(result)? deepEquals(result, expectedResult) :  result === expectedResult;
                results.push(getMessage(exerciseFile, solutionName, result, expectedResult, match))
                if(!match){
                    failedResults++;
                }
            }catch(err){
                results.push(err)
                failedResults++;
            }
        }
    })
    if(process.env.LOG_RESULTS){
        results.forEach(result => console.log(result));
    }
    expect(failedResults).toEqual(0);
}

function getMessage(exerciseFile, solutionName, result, expectedResult, match){
    let message = `Result of file '${exerciseFile}' and function '${solutionName}': {${result}}, expected: {${expectedResult}}`;
    if(match){
        return colorize(message, GREEN);
    }
    return colorize(message, RED);
}

const GREEN = 32;
const RED = 31;

function colorize(message, color){
    return `\x1b[${color}m${message}\x1b[0m`;
}

function getFilesPromise(dirname){
    return new Promise(async(resolve, reject) => {
        try{
            const files = await fs.promises.readdir(dirname);
            let exerciseSolutions = {};
            for(const file of files){
                if(file.includes("test")){
                    continue
                }
                exerciseSolutions[file] = {...require(dirname + "/" + file)};
            }
            resolve(exerciseSolutions)
        }catch(e){
            reject(e)
        }
    })
}

const STRICT_EQUALITY_NO_NAN = (a,b)=> {
    if (typeof a=='number' && typeof b=='number' && ''+a=='NaN' && ''+b=='NaN')
        // isNaN does not do what you think; see +/-Infinity
        return true;
    else
        return a===b;
};
function deepEquals(a,b, areEqual=STRICT_EQUALITY_NO_NAN, setElementsAreEqual=STRICT_EQUALITY_NO_NAN) {
    /* compares objects hierarchically using the provided 
       notion of equality (defaulting to ===);
       supports Arrays, Objects, Maps, ArrayBuffers */
    if (a instanceof Array && b instanceof Array)
        return arraysEqual(a,b, areEqual);
    if (Object.getPrototypeOf(a)===Object.prototype && Object.getPrototypeOf(b)===Object.prototype)
        return objectsEqual(a,b, areEqual);
    if (a instanceof Map && b instanceof Map)
        return mapsEqual(a,b, areEqual);        
    if (a instanceof Set && b instanceof Set) {
        if (setElementsAreEqual===STRICT_EQUALITY_NO_NAN)
            return setsEqual(a,b);
        else
            throw "Error: set equality by hashing not implemented because cannot guarantee custom notion of equality is transitive without programmer intervention."
    }
    if ((a instanceof ArrayBuffer || ArrayBuffer.isView(a)) && (b instanceof ArrayBuffer || ArrayBuffer.isView(b)))
        return typedArraysEqual(a,b);
    return areEqual(a,b);  // see note[1] -- IMPORTANT
}

function arraysEqual(a,b, areEqual) {
    if (a.length!=b.length)
        return false;
    for(var i=0; i<a.length; i++)
        if (!deepEquals(a[i],b[i], areEqual))
            return false;
    return true;
}
function objectsEqual(a,b, areEqual) {
    var aKeys = Object.getOwnPropertyNames(a);
    var bKeys = Object.getOwnPropertyNames(b);
    if (aKeys.length!=bKeys.length)
        return false;
    aKeys.sort();
    bKeys.sort();
    for(var i=0; i<aKeys.length; i++)
        if (!areEqual(aKeys[i],bKeys[i])) // keys must be strings
            return false;
    return deepEquals(aKeys.map(k=>a[k]), aKeys.map(k=>b[k]), areEqual);
}
function mapsEqual(a,b, areEqual) { // assumes Map's keys use the '===' notion of equality, which is also the assumption of .has and .get methods in the spec; however, Map's values use our notion of the areEqual parameter
    if (a.size!=b.size)
        return false;
    return [...a.keys()].every(k=> 
        b.has(k) && deepEquals(a.get(k), b.get(k), areEqual)
    );
}
function setsEqual(a,b) {
    // see discussion in below rest of StackOverflow answer
    return a.size==b.size && [...a.keys()].every(k=> 
        b.has(k)
    );
}
function typedArraysEqual(a,b) {
    // we use the obvious notion of equality for binary data
    a = new Uint8Array(a);
    b = new Uint8Array(b);
    if (a.length != b.length)
        return false;
    for(var i=0; i<a.length; i++)
        if (a[i]!=b[i])
            return false;
    return true;
}

module.exports = {
    runSolutions,
    getFilesPromise
}