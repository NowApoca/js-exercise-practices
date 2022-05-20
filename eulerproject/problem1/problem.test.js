const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Test function sum for 3,5 and 10.", async () => {
        await runSolutions(filesPromise, [[3,5], 10], 23);
    })
    it("Test function sum for 3,5 and 1000.", async () => {
        await runSolutions(filesPromise, [[3,5], 1000], 266333);
    })
    it("Test function sum for 10 and 100, test boundary case if near bellow 100.", async () => {
        await runSolutions(filesPromise, [[10], 101], 550);
    })
    it("Test function sum for 10 and 100, test boundary case if near above 100.", async () => {
        await runSolutions(filesPromise, [[10], 99], 450);
    })
    it("Test function sum for 10 and 100, test boundary case if 100.", async () => {
        await runSolutions(filesPromise, [[10], 100], 450);
    })
})