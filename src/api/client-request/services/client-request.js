'use strict';

/**
 * client-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-request.client-request');
