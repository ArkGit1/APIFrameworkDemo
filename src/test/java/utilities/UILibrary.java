package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UILibrary {

	public static WebDriver driver;

	public static String readProperty(String filePath, String name) {

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

	public static void launchURL(String url) throws InterruptedException {

		driver.get(url);
		driver.manage().window().maximize();
		Thread.sleep(5000);

	}

	public static void Click(By ele) {

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.presenceOfElementLocated(ele));

		driver.findElement(ele).click();

	}

	public static String getCurrentPageTitle() {

		String pageTitle = driver.getTitle();

		return pageTitle;
	}

	public static void closeBrowser() {

		if (driver != null) {
			driver.close();
		}
	}

}
