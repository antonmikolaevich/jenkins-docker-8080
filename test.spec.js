const axios = require('axios');
const { expect } = require('chai');
const querystring = require('query-string');
const { dataToken, data, incorrectData,
    updateWidgetData,
    dashboardData, incorrectDashboardData,
    updateDashboardData } = require('./constant/constantBody');
const { sendingRequest, getToken } = require('./helper/api.helper');    


describe("API tests in ReportPortal", () => {
    let authorizationToken;
    let createdWidgetId;
    let dashboardId;


    it("API test - get token", async () => {
        const authToken = await getToken("post", dataToken);
        expect(typeof authToken.data.access_token).to.equal('string');
        expect(authToken.data.access_token).not.to.empty;
        authorizationToken = authToken.data.access_token;
        expect(authToken.status).to.equal(200);
    })


    it("API tests - create the widget", async() => {
        const createWidget = await sendingRequest("post", "default_personal/widget", data, `${authorizationToken}`);
        createdWidgetId = createWidget.data.id;
        const getWidget = await sendingRequest("get", `default_personal/widget/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(getWidget.data.name).to.equal(data.name);
        expect(getWidget.data.description).to.equal(data.description);
        expect(createWidget.status).to.equal(201);
    })


    it("API tests - update the widget", async() => {
        const updateWidget = await sendingRequest("put", `default_personal/widget/${createdWidgetId}`, updateWidgetData, `${authorizationToken}`);
        const getWidget = await sendingRequest("get", `default_personal/widget/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(getWidget.data.name).to.equal(updateWidgetData.name);
        expect(getWidget.data.description).to.equal(updateWidgetData.description);
        expect(updateWidget.status).to.equal(200);
    })


    it("API tests - delete the widget", async() => {
        const deleteWidget = await sendingRequest("delete", `default_personal/dashboard/16/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(deleteWidget.status).to.equal(200);
        const getWidget = await sendingRequest("get", `default_personal/widget/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(getWidget.status).to.equal(404);
        expect(getWidget.data.message).to.equal(`Widget with ID '${createdWidgetId}' not found on project 'default_personal'. Did you use correct Widget ID?`);
    })


    it("API tests - create the dashboard", async() => {
        const createDashboard = await sendingRequest("post", 'SUPERADMIN_PERSONAL/dashboard', dashboardData, `${authorizationToken}`);
        dashboardId = createDashboard.data.id;
        expect(createDashboard.status).to.equal(201);
        const getDashboard = await sendingRequest("get", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, null, `${authorizationToken}`);
        expect(getDashboard.status).to.equal(200);
        expect(getDashboard.data.description).to.equal(dashboardData.description);
        expect(getDashboard.data.name).to.equal(dashboardData.name);
    })


    it("API tests - update the dashboard", async () => {
        const updateDashboard = await sendingRequest("put", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, updateDashboardData, `${authorizationToken}`);
        expect(updateDashboard.status).to.equal(200);
        const getDashboard = await sendingRequest("get", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, null, `${authorizationToken}`);
        expect(getDashboard.status).to.equal(200);
        expect(getDashboard.data.description).to.equal(updateDashboardData.description);
        expect(getDashboard.data.name).to.equal(updateDashboardData.name);
    })


    it("API tests - delete the dashboard", async() => {
        const updateDashboard = await sendingRequest("delete", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, null, `${authorizationToken}`);
        expect(updateDashboard.status).to.equal(200);
        const getDashboard = await sendingRequest("get", `SUPERADMIN_PERSONAL/dashboard/${dashboardId}`, null, `${authorizationToken}`);
        expect(getDashboard.status).to.equal(404);
        expect(getDashboard.data.message).to.equal(`Dashboard with ID '${dashboardId}' not found on project 'superadmin_personal'. Did you use correct Dashboard ID?`);
    })

    it("API tests - create the widget with incorrect request data", async () => {
        const createWidget = await sendingRequest("post", "superadmin_personal/widget", incorrectData, `${authorizationToken}`);
        expect(createWidget.status).to.equal(400);
        expect(createWidget.data.message).to.contain('Incorrect Request');
    })

    it("API tests - create the dashboard with incorrect request data", async () => {
        const createDashboard = await sendingRequest("post", 'SUPERADMIN_PERSONAL/dashboard', incorrectDashboardData, `${authorizationToken}`);
        expect(createDashboard.status).to.equal(400);
        expect(createDashboard.data.message).to.contain('Incorrect Request');
    })

});