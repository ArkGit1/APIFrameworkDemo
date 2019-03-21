package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import io.restassured.response.Response;
import junit.framework.Assert;

public class ApiLibrary {
	
	public static WebDriver driver;
	
	public static void responseMapValidator(String node,DataTable table,Response response){
				
		List<List<String>> data = table.raw();
		Map<String,String> map=response.jsonPath().getMap(node);
		SoftAssertions softAssert = new SoftAssertions();
		for (int i = 1; i < data.size(); i++) {				
				
			softAssert.assertThat(map.get(data.get(i).get(0))).isEqualTo(data.get(i).get(1));			
		}
		softAssert.assertAll();
	}	
	
	public static String readProperty(String filePath,String name) {

		String value = null;

		File file = new File(filePath);

		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();

		// load properties file
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}

		value = prop.getProperty(name);

		return value;

	}
	
	public static void launchBrowser() {
		
		System.setProperty("webdriver.chrome.driver", Constants.CHROMEDRIVER_PATH);
		driver = new ChromeDriver();

	}
	
	public static void launchURL(String url) throws InterruptedException{
		
		driver.get(url);
		driver.manage().window().maximize();
		Thread.sleep(5000);
		
	}
	
	public static void Click(By ele) {
		
		 WebDriverWait wait = new WebDriverWait(driver,20);
		    wait.until(ExpectedConditions.presenceOfElementLocated(ele));   

		driver.findElement(ele).click();

	}
	
	public static String getCurrentPageTitle(){
		
		String pageTitle=driver.getTitle();
		
		return pageTitle;
	}
	
	public static void closeBrowser(){
		
		if (driver!=null){
			driver.close();
		}
	}
	

}
