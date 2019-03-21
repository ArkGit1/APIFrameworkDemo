package utilities;

import java.util.List;
import java.util.Map;

import org.assertj.core.api.SoftAssertions;

import cucumber.api.DataTable;
import io.restassured.response.Response;
import junit.framework.Assert;

public class Library {
	
	public static void responseMapValidator(String node,DataTable table,Response response){
				
		List<List<String>> data = table.raw();
		Map<String,String> map=response.jsonPath().getMap(node);
		SoftAssertions softAssert = new SoftAssertions();
		for (int i = 1; i < data.size(); i++) {				
				
			softAssert.assertThat(map.get(data.get(i).get(0))).isEqualTo(data.get(i).get(1));
					
			//Assert.assertEquals(data.get(i).get(1),map.get(data.get(i).get(0)));			
		}
		softAssert.assertAll();
	}	
	

}
