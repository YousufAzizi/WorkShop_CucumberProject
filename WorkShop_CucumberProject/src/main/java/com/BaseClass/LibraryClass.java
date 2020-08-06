package com.BaseClass;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LibraryClass {
	
	public static WebDriver driver;
	public static Properties prop;
	
	public void LaunchApplication() throws IOException {
		FileInputStream file = new FileInputStream("C:\\Users\\hamed\\eclipse-workspace\\recovered\\WorkShop_CucumberProject\\src\\test\\resources\\config properties\\config.properties");
		prop=new Properties();
		prop.load(file);
		
		if(prop.getProperty("browser").equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\hamed\\Desktop\\updateChrome\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(prop.getProperty("browser").equalsIgnoreCase("firefox")) {
			
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\hamed\\eclipse-workspace\\recovered\\WorkShop_CucumberProject\\src\\test\\resources\\Drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
				
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		driver.navigate().to(prop.getProperty("url"));
			
	}
	public void teardown() {
		driver.quit();
			
			
			
			
			
			
			
			
			
			
		}
	}


