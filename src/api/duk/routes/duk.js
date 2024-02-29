'use strict';

/**
 * duk router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::duk.duk');
