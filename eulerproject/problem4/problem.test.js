const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Biggest palindrome for 2 digits.", async () => {
        await runSolutions(filesPromise, [2], 9009);
    })
    it("Biggest palindrome for 3 digits.", async () => {
        await runSolutions(filesPromise, [3], 906609);
    })
})