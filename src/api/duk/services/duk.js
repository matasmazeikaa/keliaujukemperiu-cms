'use strict';

/**
 * duk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::duk.duk');
