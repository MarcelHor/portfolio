'use strict';

/**
 * ahoj service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ahoj.ahoj');
