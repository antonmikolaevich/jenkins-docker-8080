const axios = require('axios');
const { expect } = require('chai');
const querystring = require('query-string');
const { dataToken, data,
    updateWidgetData,
    dashboardData,
    updateDashboardData } = require('./constant/constantBody');
const { sendingRequest, getToken } = require('./helper/api.helper');    


describe("API tests in ReportPortal", () => {
    let authorizationToken;
    let createdWidgetId;
    let dashboardId;


    it("API test - get token", async () => {
        const authToken = await getToken("post", dataToken);
        authorizationToken = authToken.data.access_token;
        expect(authToken.status).to.equal(200);
    })


    it("API tests - create the widget", async() => {
        const createWidget = await sendingRequest("post", "superadmin_personal/widget", data, `${authorizationToken}`);
        createdWidgetId = createWidget.data.id;
        expect(createWidget.status).to.equal(201);
    })


    it("API tests - update the widget", async() => {
        const updateWidget = await sendingRequest("put", `superadmin_personal/widget/${createdWidgetId}`, updateWidgetData, `${authorizationToken}`);
        expect(updateWidget.status).to.equal(200);
    })


    it("API tests - delete the widget", async() => {
        const deleteWidget = await sendingRequest("delete", `superadmin_personal/dashboard/58/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(deleteWidget.status).to.equal(200);
    })


    it("API tests - create the dashboard", async() => {
        const createDashboard = await sendingRequest("post", 'SUPERADMIN_PERSONAL/dashboard', dashboardData, `${authorizationToken}`);
        dashboardId = createDashboard.data.id;
        expect(createDashboard.status).to.equal(201);
    })


    it("API tests - update the dashboard", async () => {
        const updateDashboard = await sendingRequest("put", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, updateDashboardData, `${authorizationToken}`);
        expect(updateDashboard.status).to.equal(200);
    })


    it("API tests - delete the dashboard", async() => {
        const updateDashboard = await sendingRequest("delete", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, null, `${authorizationToken}`);
        expect(updateDashboard.status).to.equal(200);
    })

});