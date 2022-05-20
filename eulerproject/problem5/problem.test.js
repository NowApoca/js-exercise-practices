const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Is divisible by all between 1 and limit where limit is 10.", async () => {
        await runSolutions(filesPromise, [10], 2520);
    })
    it("Is divisible by all between 1 and limit where limit is 20.", async () => {
        await runSolutions(filesPromise, [20], 232792560);
    })
})
