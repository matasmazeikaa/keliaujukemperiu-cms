'use strict';

/**
 * client-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-request.client-request');
