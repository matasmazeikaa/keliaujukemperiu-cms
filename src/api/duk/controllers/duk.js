'use strict';

/**
 * duk controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::duk.duk');
