"use strict";

module.exports = {
routes: [
	{
		method: "POST",
		path: "/create-mail",
		handler: "custom-controller.createMail",
	}
]};