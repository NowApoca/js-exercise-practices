const {runSolutions, getFilesPromise} = require("../../common")

const filesPromise = getFilesPromise(__dirname)

describe('problem1', () => {
    it("Given a number 12, return the multiplication of the Pythagorean triplet", async () => {
        await runSolutions(filesPromise, [12], 60);
    })
    it("Given a number 1000, return the multiplication of the Pythagorean triplet", async () => {
        await runSolutions(filesPromise, [1000], 31875000);
    })
})
