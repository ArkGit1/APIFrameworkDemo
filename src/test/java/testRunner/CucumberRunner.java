package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumberHtmlReport", "json:target/cucumber-report.json"}, 
		features = "features", 
		glue = { "glueCode" },tags={"@Implimented"}
		)

public class CucumberRunner {

}
