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
	
	
	
	public static void responseMapValidator(String node,DataTable table,Response response){
				
		List<List<String>> data = table.raw();
		Map<String,String> map=response.jsonPath().getMap(node);
		SoftAssertions softAssert = new SoftAssertions();
		for (int i = 1; i < data.size(); i++) {				
				
			softAssert.assertThat(map.get(data.get(i).get(0))).isEqualTo(data.get(i).get(1));			
		}
		softAssert.assertAll();
	}	
	
	
	

}
