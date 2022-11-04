module.exports = {
    spec: "./test.spec.js",
    reporter: ["mocha-junit-reporter"],
    reporterOptions: {
       mochaFile: "./reporter01/reports.xml"
    }
}