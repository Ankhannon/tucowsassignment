#!/usr/bin/env node
"use strict";

let connect = require('connect');
let serveStatic = require('serve-static');

let port = 8080;

connect().use(serveStatic('./')).listen(port, function() {
	console.log("Server listening on port: %s", port);						 
});
