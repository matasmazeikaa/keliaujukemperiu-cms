'use strict';

/**
 * camper router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::camper.camper');
