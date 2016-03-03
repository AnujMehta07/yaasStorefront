/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

angular.module('ds.confirmation')
    .factory('OrderREST', ['Restangular', 'SiteConfigSvc', function(Restangular, siteConfig){

        return {
            Orders: Restangular.withConfig(function(RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(siteConfig.apis.orders.baseUrl);
            })
        };

    }]);