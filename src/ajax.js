"use strict"

import Fixture from 'can-fixture/'; //mock JSON calls

/**
 * Mock Ajax calls used for this assignment
 * This file and all it's calls should not be modified in any way
 **/

Fixture("GET /api/call1", function() {
	return {
		object_data: [
			"one",
			"five",
			"seven"
		]
	}
})
Fixture("GET /api/call2", function() {
	return {
		object_data: [
			"two",
			"five",
			"nine",
			"ten"
		]
	}
})
Fixture("GET /api/call3", function() {
	return {
		object_data: [
			"one",
			"three",
			"eight",
			"ten"
		]
	}
})
