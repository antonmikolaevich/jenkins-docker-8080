module.exports = {
    spec: "./test.spec.js",
    //require: "chai/register-expect.js",
    reporter: ["spec"],
    reporterOptions: {
        mochaFile: "./report/reports.xml"
    }
}