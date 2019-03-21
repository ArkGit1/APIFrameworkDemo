package glueCode;

import java.util.List;
import java.util.Map;

import org.assertj.core.api.SoftAssertions;
import org.json.simple.JSONObject;
import static org.hamcrest.Matchers.equalTo;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;
import utilities.JsonPaths;
import utilities.ApiLibrary;
import utilities.PostReqVehicleDetails;

public class vehicleDetailsSteps {

	private Response response;
	private RequestSpecification request;
	private JSONObject requestParams;
	PostReqVehicleDetails PostReqVehicleDetailsPayload;

	@Before
	public void setUp() {
		RestAssured.baseURI = "https://www.rabobank.nl/diensten/aiep/vehicle/license";

	}

	@Given("^The baseURI for the feature request is configured$")
	public void the_baseURI_for_the_feature_request_is_configured() throws Throwable {
		request = RestAssured.given();
	}

	@Given("^user has prepared the Request body to get the vehicle details with the license plate number \"([^\"]*)\"$")
	public void user_has_prepared_the_Request_body_to_get_the_vehicle_details_with_the_license_plate_number(
			String licensePlate) throws Throwable {
		
		PostReqVehicleDetailsPayload= new PostReqVehicleDetails();
		PostReqVehicleDetailsPayload.setLicensePlate(licensePlate);
		requestParams = new JSONObject();
		requestParams.put("licensePlate", licensePlate);

	}

	@When("^user initiate post request with baseURI$")
	public void user_initiate_post_request_with_baseURI() throws Throwable {

		// Add a header stating the Request body is a JSON
		request.header("Content-Type", "application/json");

		// Add the Json to the body of the request
		//request.body(requestParams.toJSONString());
		
		request.body(PostReqVehicleDetailsPayload);

		// Post the request and check the response
		response = request.post();

	}

	@Then("^Response status code should be \"([^\"]*)\"$")
	public void response_status_code_should_be(String responseCode) throws Throwable {

		response.then().statusCode(Integer.parseInt(responseCode));	
		
	}

	@Then("^response of \"([^\"]*)\" map should be matched with the following$")
	public void response_of_map_should_be_matched_with_the_following(String node, DataTable table) throws Throwable {

		ApiLibrary.responseMapValidator(node, table, response);
	}
	
	@Then("^error response code and message should be the following$")
	public void error_response_code_and_message_should_be_the_following(DataTable table) throws Throwable {
		
		List<List<String>> data = table.raw();		
		JsonPath jsonPathEvaluator = response.jsonPath();
		// Get specific element from JSON document 
		String code = jsonPathEvaluator.get(JsonPaths.errorCode);
		String message = jsonPathEvaluator.get(JsonPaths.errorMessage);		
		SoftAssertions softAssert=new SoftAssertions();
		softAssert.assertThat(code).isEqualTo(data.get(1).get(1));
		softAssert.assertThat(message).isEqualTo(data.get(2).get(1));
		
	}

	@When("^user initiate get request with baseURI$")
	public void user_initiate_get_request_with_baseURI() throws Throwable {

	}

	@Then("^the Response body should be blank$")
	public void the_Response_body_should_be_blank() throws Throwable {

	}

	
	@When("^user initiate post request with Incorrect baseURI$")
	public void user_initiate_post_request_with_Incorrect_baseURI() throws Throwable {

	}

}
