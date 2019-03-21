Feature: To Test the functionality to retrieving the vehicle data.

  Background: 
    Given The baseURI for the feature request is configured

	@Implimented
  Scenario: Verify user is able to fetch all the correct data of vehicle by POST request using correct	license plate number.

    Given user has prepared the Request body to get the vehicle details with the license plate number "73SRTX"
    When user initiate post request with baseURI
    Then Response status code should be "200"
    And response of "vehicle" map should be matched with the following
      | key                         | value      |
      | licensePlate                | 73SRTX     |
      | catalogValueAmount          |     528662 |
      | vehicleMakeCode             |       0330 |
      | vehicleMakeDescription      | MAYBACH    |
      | vehicleModelCode            |      01476 |
      | vehicleModelDescription     |         57 |
      | vehicleModelTypeCode        |      50897 |
      | vehicleModelTypeDescription | 5.5 V12    |
      | fuelCode                    | B          |
      | fuelDescription             | Benzine    |
      | firstAdmissionDate          | 14-04-2006 |
      | vehicleBodyShapeCode        | SEDAN      |
      | weightInKilos               |       2635 |
      | enginePowerInKW             |        405 |
      | transmissionCode            | A          |
      | transmissionDescription     | Automaat   |
      | absCode                     | J          |
      | energyLabel                 | E          |
      | yearOfManufacture           |       2006 |

  Scenario: Verify user is getting response code "405 Method Not Allowed" when initiating GET request using correct
    				license plate number.

    Given user has prepared the Request body to get the vehicle details with the license plate number "73SRTX"
    When user initiate get request with baseURI
    Then Response status code should be "405"
    And the Response body should be blank

  Scenario: Verify user is getting response code "404 Not Found" when initiating POST request using correct 
  					license plate number but with Incorrect End point URL.
    Given user has prepared the Request body to get the vehicle details with the license plate number "73SRTX"
    When user initiate post request with Incorrect baseURI
    Then Response status code should be "404"
    And the Response body should be blank

	@Implimented
  Scenario: Verify user is getting response code "500 Internal Server Error" and Response Message "technical error from GVOL"	when initiating POST request using 6 digit Incorrect Interchanged license plate number.
    Given user has prepared the Request body to get the vehicle details with the license plate number "SR73TX"
    When user initiate post request with baseURI
    Then Response status code should be "500"
    And error response code and message should be the following
      | key     | value                     |
      | code    | SE-GVOL-TE                |
      | message | technical error from GVOL |
      
	@Implimented
  Scenario: Verify user is getting response code "400 Bad Request" when initiating POST request using 4 digit 
  					Incorrect license plate number.
    Given user has prepared the Request body to get the vehicle details with the license plate number "SR73"
    When user initiate post request with baseURI
    Then Response status code should be "400"
    And error response code and message should be the following
      | key     | value                |
      | code    | IE-LP-I              |
      | message | invalid licensePlate |
      
	@Implimented
  Scenario: Verify user is getting response code "400 Bad Request" when initiating POST request using Blank or whitespace 
  					in license plate number.
    Given user has prepared the Request body to get the vehicle details with the license plate number " "
    When user initiate post request with baseURI
    Then Response status code should be "400"
    And error response code and message should be the following
      | key     | value                |
      | code    | IE-LP-I              |
      | message | invalid licensePlate |
