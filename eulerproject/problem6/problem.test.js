const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Sum of squares vs square of sums for first 10 natural numbers.", async () => {
        await runSolutions(filesPromise, [10], 2640);
    })
    it("Sum of squares vs square of sums for first 100 natural numbers.", async () => {
        await runSolutions(filesPromise, [100], 25164150);
    })
})
