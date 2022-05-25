const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Get sum of primes below 17", async () => {
        await runSolutions(filesPromise, [10], 17);
    })
    it("Get sum of primes below 2.000.000", async () => {
        await runSolutions(filesPromise, [2000000], 142_913_828_922);
    })
})
