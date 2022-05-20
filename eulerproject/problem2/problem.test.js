const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Test fibonacci evens for limit 14.", async () => {
        await runSolutions(filesPromise, [14, 'even'], 10);
    })
    it("Test fibonacci odds for limit 14.", async () => {
        await runSolutions(filesPromise, [14, 'odd'], 23);
    })
    it("Test fibonacci all for limit 14.", async () => {
        await runSolutions(filesPromise, [14], 33);
    })
})