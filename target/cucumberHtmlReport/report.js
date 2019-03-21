$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VechileDetailsTest.feature");
formatter.feature({
  "line": 1,
  "name": "To Test the functionality to retrieving the vehicle data.",
  "description": "",
  "id": "to-test-the-functionality-to-retrieving-the-vehicle-data.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 974295544,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The baseURI for the feature request is configured",
  "keyword": "Given "
});
formatter.match({
  "location": "vehicleDetailsSteps.the_baseURI_for_the_feature_request_is_configured()"
});
formatter.result({
  "duration": 479565324,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user is able to fetch all the correct data of vehicle by POST request using correct\tlicense plate number.",
  "description": "",
  "id": "to-test-the-functionality-to-retrieving-the-vehicle-data.;verify-user-is-able-to-fetch-all-the-correct-data-of-vehicle-by-post-request-using-correct-license-plate-number.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Implimented"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user has prepared the Request body to get the vehicle details with the license plate number \"73SRTX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user initiate post request with baseURI",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Response status code should be \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "response of \"vehicle\" map should be matched with the following",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 13
    },
    {
      "cells": [
        "licensePlate",
        "73SRTX"
      ],
      "line": 14
    },
    {
      "cells": [
        "catalogValueAmount",
        "528662"
      ],
      "line": 15
    },
    {
      "cells": [
        "vehicleMakeCode",
        "0330"
      ],
      "line": 16
    },
    {
      "cells": [
        "vehicleMakeDescription",
        "MAYBACH"
      ],
      "line": 17
    },
    {
      "cells": [
        "vehicleModelCode",
        "01476"
      ],
      "line": 18
    },
    {
      "cells": [
        "vehicleModelDescription",
        "57"
      ],
      "line": 19
    },
    {
      "cells": [
        "vehicleModelTypeCode",
        "50897"
      ],
      "line": 20
    },
    {
      "cells": [
        "vehicleModelTypeDescription",
        "5.5 V12"
      ],
      "line": 21
    },
    {
      "cells": [
        "fuelCode",
        "B"
      ],
      "line": 22
    },
    {
      "cells": [
        "fuelDescription",
        "Benzine"
      ],
      "line": 23
    },
    {
      "cells": [
        "firstAdmissionDate",
        "14-04-2006"
      ],
      "line": 24
    },
    {
      "cells": [
        "vehicleBodyShapeCode",
        "SEDAN"
      ],
      "line": 25
    },
    {
      "cells": [
        "weightInKilos",
        "2635"
      ],
      "line": 26
    },
    {
      "cells": [
        "enginePowerInKW",
        "405"
      ],
      "line": 27
    },
    {
      "cells": [
        "transmissionCode",
        "A"
      ],
      "line": 28
    },
    {
      "cells": [
        "transmissionDescription",
        "Automaat"
      ],
      "line": 29
    },
    {
      "cells": [
        "absCode",
        "J"
      ],
      "line": 30
    },
    {
      "cells": [
        "energyLabel",
        "E"
      ],
      "line": 31
    },
    {
      "cells": [
        "yearOfManufacture",
        "2006"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "73SRTX",
      "offset": 93
    }
  ],
  "location": "vehicleDetailsSteps.user_has_prepared_the_Request_body_to_get_the_vehicle_details_with_the_license_plate_number(String)"
});
formatter.result({
  "duration": 12908884,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.user_initiate_post_request_with_baseURI()"
});
formatter.result({
  "duration": 7544641342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "vehicleDetailsSteps.response_status_code_should_be(String)"
});
formatter.result({
  "duration": 125131733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vehicle",
      "offset": 13
    }
  ],
  "location": "vehicleDetailsSteps.response_of_map_should_be_matched_with_the_following(String,DataTable)"
});
formatter.result({
  "duration": 3667792652,
  "status": "passed"
});
formatter.before({
  "duration": 72744,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The baseURI for the feature request is configured",
  "keyword": "Given "
});
formatter.match({
  "location": "vehicleDetailsSteps.the_baseURI_for_the_feature_request_is_configured()"
});
formatter.result({
  "duration": 996973,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify user is getting response code \"500 Internal Server Error\" and Response Message \"technical error from GVOL\"\twhen initiating POST request using 6 digit Incorrect Interchanged license plate number.",
  "description": "",
  "id": "to-test-the-functionality-to-retrieving-the-vehicle-data.;verify-user-is-getting-response-code-\"500-internal-server-error\"-and-response-message-\"technical-error-from-gvol\"-when-initiating-post-request-using-6-digit-incorrect-interchanged-license-plate-number.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Implimented"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user has prepared the Request body to get the vehicle details with the license plate number \"SR73TX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user initiate post request with baseURI",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Response status code should be \"500\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "error response code and message should be the following",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 55
    },
    {
      "cells": [
        "code",
        "SE-GVOL-TE"
      ],
      "line": 56
    },
    {
      "cells": [
        "message",
        "technical error from GVOL"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SR73TX",
      "offset": 93
    }
  ],
  "location": "vehicleDetailsSteps.user_has_prepared_the_Request_body_to_get_the_vehicle_details_with_the_license_plate_number(String)"
});
formatter.result({
  "duration": 228492,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.user_initiate_post_request_with_baseURI()"
});
formatter.result({
  "duration": 2774010348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 32
    }
  ],
  "location": "vehicleDetailsSteps.response_status_code_should_be(String)"
});
formatter.result({
  "duration": 4485910,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.error_response_code_and_message_should_be_the_following(DataTable)"
});
formatter.result({
  "duration": 160165205,
  "status": "passed"
});
formatter.before({
  "duration": 124038,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The baseURI for the feature request is configured",
  "keyword": "Given "
});
formatter.match({
  "location": "vehicleDetailsSteps.the_baseURI_for_the_feature_request_is_configured()"
});
formatter.result({
  "duration": 1307535,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify user is getting response code \"400 Bad Request\" when initiating POST request using 4 digit",
  "description": "\t\t\tIncorrect license plate number.",
  "id": "to-test-the-functionality-to-retrieving-the-vehicle-data.;verify-user-is-getting-response-code-\"400-bad-request\"-when-initiating-post-request-using-4-digit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@Implimented"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "user has prepared the Request body to get the vehicle details with the license plate number \"SR73\"",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "user initiate post request with baseURI",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "Response status code should be \"400\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "error response code and message should be the following",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 66
    },
    {
      "cells": [
        "code",
        "IE-LP-I"
      ],
      "line": 67
    },
    {
      "cells": [
        "message",
        "invalid licensePlate"
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SR73",
      "offset": 93
    }
  ],
  "location": "vehicleDetailsSteps.user_has_prepared_the_Request_body_to_get_the_vehicle_details_with_the_license_plate_number(String)"
});
formatter.result({
  "duration": 400095,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.user_initiate_post_request_with_baseURI()"
});
formatter.result({
  "duration": 648873486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "vehicleDetailsSteps.response_status_code_should_be(String)"
});
formatter.result({
  "duration": 1439501,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.error_response_code_and_message_should_be_the_following(DataTable)"
});
formatter.result({
  "duration": 86840614,
  "status": "passed"
});
formatter.before({
  "duration": 62020,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The baseURI for the feature request is configured",
  "keyword": "Given "
});
formatter.match({
  "location": "vehicleDetailsSteps.the_baseURI_for_the_feature_request_is_configured()"
});
formatter.result({
  "duration": 792263,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Verify user is getting response code \"400 Bad Request\" when initiating POST request using Blank or whitespace",
  "description": "\t\t\tin license plate number.",
  "id": "to-test-the-functionality-to-retrieving-the-vehicle-data.;verify-user-is-getting-response-code-\"400-bad-request\"-when-initiating-post-request-using-blank-or-whitespace",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@Implimented"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "user has prepared the Request body to get the vehicle details with the license plate number \" \"",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "user initiate post request with baseURI",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Response status code should be \"400\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "error response code and message should be the following",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 77
    },
    {
      "cells": [
        "code",
        "IE-LP-I"
      ],
      "line": 78
    },
    {
      "cells": [
        "message",
        "invalid licensePlate"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 93
    }
  ],
  "location": "vehicleDetailsSteps.user_has_prepared_the_Request_body_to_get_the_vehicle_details_with_the_license_plate_number(String)"
});
formatter.result({
  "duration": 148753,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.user_initiate_post_request_with_baseURI()"
});
formatter.result({
  "duration": 954578054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "vehicleDetailsSteps.response_status_code_should_be(String)"
});
formatter.result({
  "duration": 3516916,
  "status": "passed"
});
formatter.match({
  "location": "vehicleDetailsSteps.error_response_code_and_message_should_be_the_following(DataTable)"
});
formatter.result({
  "duration": 70772472,
  "status": "passed"
});
});