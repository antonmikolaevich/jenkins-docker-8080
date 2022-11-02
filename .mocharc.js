module.exports = {
    spec: "./test.spec.js",
    //require: "chai/register-expect.js",
    reporter: ["spec", "mocha-simple-html-reporter"],
    reporterOptions: {
        mochaFile: "src/report/reports.xml"
    }
}