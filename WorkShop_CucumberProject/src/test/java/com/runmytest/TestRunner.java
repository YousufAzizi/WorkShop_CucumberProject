package com.runmytest;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)//this should be used in Junit

@CucumberOptions
(
		
features="C:\\Users\\hamed\\eclipse-workspace\\recovered\\WorkShop_CucumberProject\\src\\test\\resources\\Features\\TestCase.feature",
glue= {"com.StepDefinitions"},
//plugin = {"pretty","junit:target/JUnitReports/report.xml",
plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extentreport.html"},

//dryRun=true,
monochrome=true

		)

public class TestRunner extends AbstractTestNGCucumberTests {//we need abstract package to run our test with testng..

	@AfterClass
	public static void extentReport() {
		Reporter.loadXMLConfig("C:\\Users\\hamed\\eclipse-workspace\\recovered\\WorkShop_CucumberProject\\extend-config.xml");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setTestRunnerOutput("Sample test runner output message");
		
	}
}










