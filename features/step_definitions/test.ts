import {Given, Then, When} from "@cucumber/cucumber";

Given(/^today is Sunday$/, function () {
    return true;
});
When(/^I ask whether it's Friday yet$/, function () {
return true;
});
Then(/^I should be told$/, function () {
return true;
});