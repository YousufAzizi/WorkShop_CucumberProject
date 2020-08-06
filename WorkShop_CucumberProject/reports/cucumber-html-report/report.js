$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hamed/eclipse-workspace/recovered/WorkShop_CucumberProject/src/test/resources/Features/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHRM Website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the login Functionality of OrangeHRM Page",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open browser and Go to Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;;1"
    },
    {
      "cells": [
        "admin",
        "Admin123"
      ],
      "line": 13,
      "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 14,
      "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Validate the login Functionality of OrangeHRM Page",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser and Go to Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter the \"admin\" and \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.open_browser_and_Go_to_Url()"
});
formatter.result({
  "duration": 6979431900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.verify_the_title()"
});
formatter.result({
  "duration": 12713200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "Admin123",
      "offset": 23
    }
  ],
  "location": "OrangeHRM_Login_Steps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 239423199,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.click_the_submit_button()"
});
formatter.result({
  "duration": 3657507099,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.close_the_browser()"
});
formatter.result({
  "duration": 651047599,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate the login Functionality of OrangeHRM Page",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality-of-orangehrm-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OrangeHRM"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser and Go to Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter the \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.open_browser_and_Go_to_Url()"
});
formatter.result({
  "duration": 6076943401,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.verify_the_title()"
});
formatter.result({
  "duration": 7117201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 11
    },
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "OrangeHRM_Login_Steps.enter_the_and(String,String)"
});
formatter.result({
  "duration": 201447500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.click_the_submit_button()"
});
formatter.result({
  "duration": 4186720899,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRM_Login_Steps.close_the_browser()"
});
formatter.result({
  "duration": 664951700,
  "status": "passed"
});
});