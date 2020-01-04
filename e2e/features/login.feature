Feature: Login feature

@sanity
Scenario: Sample login
Given User will opens the application
When User will login into application with username as "opensourcecms" and password as "opensourcecms"
Then User will verify the logged in user is "Admin"