module.exports = {
    spec: "./test.spec.js",
    //require: "chai/register-expect.js",
    reporter: ["mocha-junit-reporter"],
    reporterOptions: {
        mochaFile: "./report/reports.xml"
    }
}