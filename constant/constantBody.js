const querystring = require('query-string');


let dataToken = querystring.stringify({
  'grant_type': 'password',
  'username': 'default',
  'password': '1q2w3e' 
});

let data = {
  "widgetType": "statisticTrend",
  "contentParameters": {
    "contentFields": [
      "statistics$executions$total",
      "statistics$executions$passed",
      "statistics$executions$failed",
      "statistics$executions$skipped",
      "statistics$defects$product_bug$pb001",
      "statistics$defects$product_bug$pb_1iv3u3t04zkfn",
      "statistics$defects$product_bug$pb_rhod1iz2r5tf",
      "statistics$defects$product_bug$pb_qxqkluzbfcqb",
      "statistics$defects$product_bug$pb_1jetb5h08jho2",
      "statistics$defects$product_bug$pb_qhqm7ju22rso",
      "statistics$defects$automation_bug$ab001",
      "statistics$defects$automation_bug$ab_vb42ygw94yt1",
      "statistics$defects$system_issue$si001",
      "statistics$defects$no_defect$nd001", 
      "statistics$defects$no_defect$nd_u8570yt8djy1",
      "statistics$defects$no_defect$nd_t8cdzpk55s1e",
      "statistics$defects$to_investigate$ti001"
    ],
    "itemsCount": "50",
    "widgetOptions": {
      "latest": false,
      "viewMode": "panel"
    }
  },
  "filters": [
    {
      "value": "42",
      "name": "test-filter"
    }
  ],
  "name": `${Math.floor(Math.random() * 1000001)}`,
  "description": "",
  "share": true,
  "filterIds": [
    "42"
  ]
}

let incorrectData = {
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
  "description": "",
  "share": true,
  "filterIds": [
    "45"
  ]
}


  let updateWidgetData = {
    "widgetType": "statisticTrend",
    "contentParameters": {
      "contentFields": [
        "statistics$executions$total",
        "statistics$executions$passed",
        "statistics$executions$failed",
        "statistics$executions$skipped",
        "statistics$defects$product_bug$pb001",
        "statistics$defects$product_bug$pb_1iv3u3t04zkfn",
        "statistics$defects$product_bug$pb_rhod1iz2r5tf",
        "statistics$defects$product_bug$pb_qxqkluzbfcqb",
        "statistics$defects$product_bug$pb_1jetb5h08jho2",
        "statistics$defects$product_bug$pb_qhqm7ju22rso",
        "statistics$defects$automation_bug$ab001",
        "statistics$defects$automation_bug$ab_vb42ygw94yt1",
        "statistics$defects$system_issue$si001",
        "statistics$defects$no_defect$nd001", 
        "statistics$defects$no_defect$nd_u8570yt8djy1",
        "statistics$defects$no_defect$nd_t8cdzpk55s1e",
        "statistics$defects$to_investigate$ti001"
      ],
      "itemsCount": "50",
      "widgetOptions": {
        "latest": false,
        "viewMode": "panel"
      }
    },
    "filters": [
      {
        "value": "42",
        "name": "test-filter"
      }
    ],
    "name": `${Math.floor(Math.random() * 1000001)}`,
    "description": "",
    "share": true,
    "filterIds": [
      "42"
    ]
  }


  let dashboardData = {
    "description": "test_dashboard_API",
    "name": `API_dashboard ${Math.floor(Math.random() * 101)}`,
    "share": true
  };

  let incorrectDashboardData = {
    "description": "test_dashboard_API",
    "share": true
  };

  let updateDashboardData = {
    "description": "update_test_dashboard_API",
    "name": `update_API_dashboard ${Math.floor(Math.random() * 101)}`,
    "share": true
  };


module.exports = {
    dataToken,
    data,
    incorrectData,
    updateWidgetData,
    dashboardData,
    incorrectDashboardData,
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