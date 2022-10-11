const querystring = require('query-string');


let dataToken = querystring.stringify({
  'grant_type': 'password',
  'username': 'superadmin',
  'password': 'erebus' 
});



let data = JSON.stringify({
    "widgetType": "statisticTrend",
    "contentParameters": {
      "contentFields": [
        "statistics$executions$total",
        "statistics$executions$passed",
        "statistics$executions$failed",
        "statistics$executions$skipped",
        "statistics$defects$product_bug$pb001",
        "statistics$defects$automation_bug$ab001",
        "statistics$defects$system_issue$si001",
        "statistics$defects$no_defect$nd001",
        "statistics$defects$to_investigate$ti001"
      ],
      "itemsCount": "50",
      "widgetOptions": {
        "zoom": false,
        "timeline": "launch",
        "viewMode": "area-spline"
      }
    },
    "filters": [
      {
        "value": "45",
        "name": "DEMO_FILTER"
      }
    ],
    "name": `${Math.floor(Math.random() * 1000001)}`,
    "description": "",
    "share": true,
    "filterIds": [
      "45"
    ]
  });


  let updateWidgetData = JSON.stringify({
    "contentParameters": {
      "contentFields": [
        "statistics$executions$total",
        "statistics$executions$passed",
        "statistics$executions$failed",
        "statistics$executions$skipped",
        "statistics$defects$product_bug$pb001",
        "statistics$defects$automation_bug$ab001",
        "statistics$defects$system_issue$si001",
        "statistics$defects$no_defect$nd001",
        "statistics$defects$to_investigate$ti001"
      ],
      "itemsCount": "100",
      "widgetOptions": {
        "zoom": false,
        "timeline": "launch",
        "viewMode": "area-spline"
      }
    },
    "description": "updated_test_widget_description",
    "owner": "superadmin",
    "share": true,
    "name": `${Math.floor(Math.random() * 1000001)}`,
    "widgetType": "statisticTrend",
    "filters": [
      {
        "value": "45",
        "name": "DEMO_FILTER"
      }
    ],
    "filterIds": [
      "45"
    ]
  });


  let dashboardData = JSON.stringify({
    "description": "test_dashboard_API",
    "name": `API_dashboard ${Math.floor(Math.random() * 101)}`,
    "share": true
  });

  let updateDashboardData = JSON.stringify({
    "description": "update_test_dashboard_API",
    "name": `update_API_dashboard ${Math.floor(Math.random() * 101)}`,
    "share": true
  });


module.exports = {
    dataToken,
    data,
    updateWidgetData,
    dashboardData,
    updateDashboardData
}



          
           









// axios.post('http://localhost:8080/uat/sso/oauth/token',
//     querystring.stringify({
//        grant_type: 'password',
//        username: 'superadmin',
//        password: 'erebus'
//     }), {
//        headers: {
//            "Content-Type": "application/x-www-form-urlencoded",
//            'Authorization': 'Basic dWk6dWltYW4='
//        }
//     }).then(response => {
//        return response.data.access_token
//     })
//     .catch(error => {
//        return error});    