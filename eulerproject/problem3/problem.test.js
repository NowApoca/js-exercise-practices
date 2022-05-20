const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Prime factors of a number 13195.", async () => {
        await runSolutions(filesPromise, [13195], [5,7,13,29]);
    })
    it("Prime factors of a number.", async () => {
        await runSolutions(filesPromise, [5162142], [2,3,860357]);
    })
})