const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Get prime in position 6.", async () => {
        await runSolutions(filesPromise, [6], 13);
    })
    it("Get prime in position 3.", async () => {
        await runSolutions(filesPromise, [3], 5);
    })
    it("Get prime in position 8.", async () => {
        await runSolutions(filesPromise, [8], 19);
    })
    it("Get prime in position 10001.", async () => {
        await runSolutions(filesPromise, [10001], 104743);
    })
})
