'use strict';

/**
 * client-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-request.client-request', ({ strapi }) => ({
	async createMail(ctx) {
		const { data: { email, name, message } } = ctx.request.body;

		await strapi.plugin('email').service('email').send({
				to: 'info@keliaujukemperiu.lt',
				from: 'contact@bythosapi.shop',
				subject: 'Gavote naują užklausą!',
				text: 'Hello world',
				html: `<h>Vardas: ${name}</h> <br /> <h4>El. paštas: ${email}</h4> <br /> <h4>Žinutė: ${message}</h4>`,
			});

			return { message: 'Success' };
		}
}));
