'use strict';

/**
 * camper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::camper.camper');
