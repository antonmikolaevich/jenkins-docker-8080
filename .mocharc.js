module.exports = {
    spec: "./test.spec.js",
    //require: "chai/register-expect.js",
    reporter: ["spec"],
    reporterOptions: {
        mochaFile: "src/report/reports.xml"
    }
}