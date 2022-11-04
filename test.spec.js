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
        const deleteWidget = await sendingRequest("delete", `default_personal/dashboard/29/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(deleteWidget.status).to.equal(200);
        const getWidget = await sendingRequest("get", `default_personal/widget/${createdWidgetId}`, null, `${authorizationToken}`);
        expect(getWidget.status).to.equal(404);
        expect(getWidget.data.message).to.equal(`Widget with ID '${createdWidgetId}' not found on project 'default_personal'. Did you use correct Widget ID?`);
    })

});