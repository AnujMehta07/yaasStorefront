angular.module('ds.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/app/home/templates/home.html',
    "<div class=\"homepageContainer\" match-background>\n" +
    "    <div class=\"homepageCarouselContainer\">\n" +
    "        <!-- Top Images Carousel - Large -->\n" +
    "        <carousel interval=\"carouselInterval\" class=\"visible-lg\">\n" +
    "            <slide ng-repeat=\"slide in slidesLarge\" active=\"slide.active\">\n" +
    "                <site-content-image image=\"slide.image\" image-id=\"{{slide.id}}\"></site-content-image>\n" +
    "            </slide>\n" +
    "        </carousel>\n" +
    "\n" +
    "        <!-- Top Images Carousel - Small -->\n" +
    "        <carousel interval=\"carouselInterval\" class=\"hidden-lg\">\n" +
    "            <slide ng-repeat=\"slide in slidesSmall\" active=\"slide.active\">\n" +
    "                <site-content-image image=\"slide.image\" image-id=\"{{slide.id}}\"></site-content-image>\n" +
    "            </slide>\n" +
    "        </carousel>\n" +
    "        <div class=\"carouselImages\">\n" +
    "            <div class=\"content-container clearfix\">\n" +
    "\n" +
    "                <!-- Banner 1 -->\n" +
    "                <div class=\"hidden-xs col-sm-6 col-md-6 col-lg-6\">\n" +
    "                    <site-content-image image=\"banner1.large\" image-id=\"banner1\"></site-content-image>\n" +
    "                </div>\n" +
    "                <div class=\"hidden-xs col-sm-6 col-md-6 col-lg-6\">\n" +
    "                    <site-content-image image=\"banner2.large\" image-id=\"banner2\"></site-content-image>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- Banner 2 -->\n" +
    "                <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg\">\n" +
    "                    <site-content-image image=\"banner1.small\" image-id=\"banner1\"></site-content-image>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg\">\n" +
    "                    <site-content-image image=\"banner2.small\" image-id=\"banner2\"></site-content-image>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/shared/templates/top-navigation.html',
    "<div class=\"mobileNav hidden-lg hidden-md visible-sm visible-xs\">\n" +
    "    <nav class=\"top-navigation row\" ng-cloak>\n" +
    "        <div class=\"col-xs-4 \">\n" +
    "            <button type=\"button\" class=\"btn btn-link navbar-btn menu\" ng-click=\"toggleOffCanvas()\">\n" +
    "                <span class=\"hyicon hyicon-menu\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-4 text-center\">\n" +
    "            <a class=\"logo\" ui-sref=\"base.home\"><img ng-src=\"{{GlobalData.store.logo || 'img/logo.png'}}\" alt=\"\"></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-4 text-right\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <site-selector id=\"siteSelectorSmall\"></site-selector>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6 text-center\">\n" +
    "                    <button type=\"button\" ng-if=\"isShowCartButton()\" id=\"mobile-cart-btn\" class=\"btn btn-link navbar-btn cart-button\"\n" +
    "                            ng-click=\"toggleCart()\">\n" +
    "                        <span class=\"shopping-bag\">\n" +
    "                            <span class=\"quantity\">{{ cart.totalUnitsCount || 0 }}</span>\n" +
    "                        </span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"desktopNav hidden-xs hidden-sm visible-md visible-lg\">\n" +
    "    <div class=\"row info\">\n" +
    "        <div class=\"content-container\">\n" +
    "            <div class=\"col-xs-2 logo\">\n" +
    "                <a ui-sref=\"base.home\" class=\"logo\">\n" +
    "                    <img ng-src=\"{{GlobalData.store.logo || 'img/logo.png'}}\" height=\"46\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-7 search\">\n" +
    "                <ysearch></ysearch>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-3 cart\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6 col-md-7\">\n" +
    "                        <div class=\"text-center\">\n" +
    "                            <a id=\"login-btn\" ng-if=\"!user.isAuthenticated\" class=\" signin\" ng-click=\"login({windowClass:'mobileLoginModal'})\">\n" +
    "                                <img src=\"./img/user-icon_small_active.png\" class=\"user-avatar\">\n" +
    "                                {{'SIGN_IN' | translate}}\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"user.isAuthenticated\">\n" +
    "                            <div class=\"signin-container \">\n" +
    "                                <div class=\"text-center dropdown\">\n" +
    "                                    <a class=\"my-profile dropdown-toggle\" title=\"{{'MY_ACCOUNT' | translate}}\">\n" +
    "                                        <img id=\"my-account-dropdown\" src=\"./img/user-icon_small_active.png\" class=\"user-avatar\">\n" +
    "                                    </a>\n" +
    "                                    <ul class=\"dropdown-menu\">\n" +
    "                                        <li id=\"my-account\" role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-click=\"myAccount()\">{{'MY_ACCOUNT' | translate}}</a></li>\n" +
    "                                        <li class=\"divider\"></li>\n" +
    "                                        <li id=\"logout-btn\" role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-click=\"logout()\">{{'SIGN_OUT' | translate}}</a></li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-3 col-md-3 text-center\">\n" +
    "                        <site-selector id=\"siteSelectorLarge\"></site-selector>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-3 col-md-2 text-center checkout-btn-container\">\n" +
    "                        <button ng-if=\"isShowCartButton()\" type=\"button\" class=\"btn btn-link navbar-btn\" id=\"full-cart-btn\" ng-click=\"toggleCart()\" ng-cloak>\n" +
    "                            <span class=\"shopping-bag\">\n" +
    "                                <span class=\"quantity\">{{ cart.totalUnitsCount || 0 }}</span>\n" +
    "                            </span>\n" +
    "                        </button>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"cart-and-account-container\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"clr\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row nav js-mainNav\">\n" +
    "        <div class=\"content-container\">\n" +
    "            <div class=\"navbar yamm navbar-default\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li ng-repeat=\"top_category in categories\" class=\"dropdown yamm-fw\">\n" +
    "                        <!-- class=\"has-sub\" -->\n" +
    "                        <a ui-sref=\"base.category( {catName: top_category.slug} )\" class=\"js-megamenutoggle mainCategory categoryLevel\">\n" +
    "                            {{ top_category.name  }}\n" +
    "                            <ul class=\"dropdown-menu js-flyoutMenu\" ng-if=\"top_category.subcategories\">\n" +
    "                                <div ng-repeat=\"sub2 in top_category.subcategories\" class=\"col-xs-2\">\n" +
    "\n" +
    "                                    <a data-ui-sref=\"base.category( {catName: sub2.slug} )\" class=\"secondaryCategory categoryLevel\" ng-class=\"{'noSubCategories': sub2.subcategories == undefined}\">\n" +
    "                                        {{sub2.name }}\n" +
    "                                        <div class=\"tertiaryCategory\">\n" +
    "                                            <ul>\n" +
    "                                                <li ng-repeat=\"sub3 in sub2.subcategories\">\n" +
    "                                                    <a class=\"tertiaryLevel categoryLevel\" ui-sref=\"base.category( {catName: sub3.slug} )\">{{ sub3.name }}</a>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </div>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                            </ul>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/shared/templates/sidebar-navigation.html',
    "<ysearch></ysearch>\n" +
    "<div ng-cloak id=\"menu\">\n" +
    "    <ul class=\"navi\">\n" +
    "        <li ng-repeat=\"category in categories\" > <!-- class=\"has-sub\" -->\n" +
    "            <a ui-sref=\"base.category( {catName: category.slug} )\" class=\"mainCategory categoryLevel\" ng-click=\"hideMobileNav()\">\n" +
    "                {{ category.name  }}\n" +
    "            </a>\n" +
    "            <label for=\"secondarycategory{{$index}}\" class=\"toggle-sub\" onclick=\"\" ng-if=\"category.subcategories\">\n" +
    "                <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "            </label>\n" +
    "            <input type=\"checkbox\" id=\"secondarycategory{{$index}}\" class=\"sub-nav-check\" ng-if=\"category.subcategories\">\n" +
    "            <ul id=\"secondarycategory{{$index}}-sub\" class=\"sub-nav\" ng-if=\"category.subcategories\">\n" +
    "                <li class=\"sub-heading\">\n" +
    "                    <label for=\"secondarycategory{{$index}}\" class=\"toggle\" onclick=\"\" title=\"{{'BACK' | translate}}\"><span class=\"hyicon hyicon-chevron-thin-left\"></span></label>\n" +
    "                    {{category.name}}\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"sub2 in category.subcategories\" >\n" +
    "                    <a data-ui-sref=\"base.category( {catName: sub2.slug} )\" class=\"secondaryCategory categoryLevel\" ng-class=\"{'noSubCategories': sub2.subcategories == undefined}\" ng-click=\"hideMobileNav()\">\n" +
    "                        {{sub2.name }}\n" +
    "                    </a>\n" +
    "                    <label for=\"tertiarycategory{{$index}}\" class=\"toggle-sub\" onclick=\"\" ng-if=\"sub2.subcategories\">\n" +
    "                        <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "                    </label>\n" +
    "                    <input type=\"checkbox\" id=\"tertiarycategory{{$index}}\" class=\"sub-nav-check\" ng-if=\"sub2.subcategories\">\n" +
    "                    <ul class=\"sub-nav\" id=\"tertiarycategory{{$index}}-sub\">\n" +
    "                        <li class=\"sub-heading\">\n" +
    "                            <label for=\"tertiarycategory{{$index}}\" class=\"toggle\" onclick=\"\" title=\"{{'BACK' | translate}}\"><span class=\"hyicon hyicon-chevron-thin-left\"></span></label>\n" +
    "                            {{sub2.name}}\n" +
    "                        </li>\n" +
    "                        <!-- more NG loops would happen here -->\n" +
    "                        <li ng-repeat=\"sub3 in sub2.subcategories\">\n" +
    "                            <a class=\"tertiaryLevel categoryLevel\" ui-sref=\"base.category( {catName: sub3.slug} )\" ng-click=\"hideMobileNav()\">{{ sub3.name }}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"authentication-cnt\">\n" +
    "    <div ng-if=\"user.isAuthenticated\" >\n" +
    "        <div class=\"signinContainer\">\n" +
    "            <div class=\"col-xs-3 text-right\">\n" +
    "                <a><img src=\"./img/user-icon_small_active.png\" class=\"user-avatar\" ng-click=\"myAccount()\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-9 my-account-link\">\n" +
    "                <a href=\"\" class=\"my-profile\" ng-click=\"myAccount()\" title=\"{{'MY_ACCOUNT' | translate}}\">\n" +
    "                    {{'MY_ACCOUNT' | translate}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-offset-3 col-xs-9 logout-link text-left\">\n" +
    "                <a ng-click=\"logout()\" id=\"logout-btn\" class=\"signout\">{{'SIGN_OUT' | translate}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!user.isAuthenticated\">\n" +
    "        <div class=\"signinContainer\">\n" +
    "            <div class=\"col-xs-3 text-right\">\n" +
    "                <img src=\"./img/user-icon_small_active.png\" class=\"user-avatar loggedin\">\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-9 my-account-link\">\n" +
    "                <a class=\"btn btn-link navbar-btn signin\" ng-click=\"login({windowClass:'mobileLoginModal'})\">\n" +
    "                    {{'SIGN_IN' | translate}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"dropdown \">\n" +
    "            <a data-toggle=\"dropdown\" href=\"#\" class=\"btn btn-link navbar-btn signin pull-right\" ng-if=\"user.isAuthenticated\" >\n" +
    "                <img src=\"./img/user-icon_small_active.png\" class=\"user-avatar loggedin\">\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu\" class=\"pull-right\">\n" +
    "                <li><a href=\"\" class=\"logout\" ng-click=\"logout()\">{{'SIGN_OUT' | translate}}</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"\" class=\"my-profile\" ng-click=\"myAccount()\">{{'MY_ACCOUNT' | translate}}</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "        \n" +
    "\n"
  );


  $templateCache.put('js/app/cart/templates/cart.html',
    "<!--\n" +
    "  ~ [y] hybris Platform\n" +
    "  ~\n" +
    "  ~ Copyright (c) 2000-2014 hybris AG\n" +
    "  ~ All rights reserved.\n" +
    "  ~\n" +
    "  ~ This software is the confidential and proprietary information of hybris\n" +
    "  ~ (\"Confidential Information\"). You shall not disclose such Confidential\n" +
    "  ~ Information and shall use it only in accordance with the terms of the\n" +
    "  ~ license agreement you entered into with hybris.\n" +
    "  -->\n" +
    "<div cart-auto-toggle class=\"cartContainer\" ng-mouseenter=\"cartHover()\" ng-mouseleave=\"cartUnHover()\">\n" +
    "    <div class=\"btn-group btn-group-justified\">\n" +
    "        <div class=\"btn-group continue\">\n" +
    "            <button id=\"continue-shopping\" ng-click=\"toggleCart()\" class=\"btn  btn-default continue\">\n" +
    "                <span class=\"hyicon hyicon-chevron-thin-left\"></span>\n" +
    "                <span class=\"hidden-xs\">{{'CONTINUE_SHOPPING' | translate}}</span>\n" +
    "                <span class=\"hidden-sm hidden-md hidden-lg\">{{'SHOP' | translate}}</span>\n" +
    "\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group checkout\">\n" +
    "            <button ng-if=\"cart.items.length\" ng-click=\"toCheckoutDetails()\" class=\"btn  btn-primary \">{{'CHECKOUT' | translate}} <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "            </button>\n" +
    "            <button ng-if=\"!cart.items.length\" ng-class=\"{ disabled: !cart.items.length }\" class=\"btn\">{{'CHECKOUT' | translate}}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!cart.error && !cart.items.length\" class=\"empty-cart-text text-center\">\n" +
    "        {{'CART_EMPTY' | translate}}\n" +
    "    </div>\n" +
    "    <div ng-if=\"cart.error\" class=\"error text-center\">\n" +
    "        {{'CART_UNAVAILABLE' | translate}}\n" +
    "    </div>\n" +
    "\t<div ng-if=\"cart.items.length\">\n" +
    "\t\t\t<section class=\"summary\">\n" +
    "\n" +
    "\t\t\t\t<!-- Apply Coupon -->\n" +
    "\t\t\t\t<div ng-include=\"'./js/app/cart/templates/cart-costs.html'\"></div>\n" +
    "\t\t\t\t<div ng-include=\"'./js/app/coupons/templates/coupon-apply.html'\" ng-controller=\"CouponCtrl\"></div>\n" +
    "\n" +
    "\t\t\t</section>\n" +
    "\t\t\t<section>\n" +
    "\t\t\t\t<!-- Cart Item -->\n" +
    "\t\t\t\t<div ng-repeat=\"item in cart.items\">\n" +
    "                    <div ng-if=\"item.error\" class=\"error col-xs-12 col-md-12\">\n" +
    "                        <span class=\"error\">{{'CART_ITEM_UPDATE_ERROR' | translate}}</span>\n" +
    "                    </div>\n" +
    "\t\t\t\t\t<div class=\"cart-item row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-4 col-md-4 text-center img-col\">\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{ item && item.product.images[0].url || ''}}\" class=\"img-responsive\"/>\n" +
    "                        </div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-8 col-md-8  detail-col\">\n" +
    "                            <div class=\"row\">\n" +
    "\t\t\t\t\t\t\t    <div class=\"col-xs-10\">\n" +
    "                                    <div class=\"name\">{{item.product.name}}</div>\n" +
    "                                    <div class=\"price item-attr\">{{'ITEM_PRICE' | translate}}: <span> {{item.price.effectiveAmount | currency: currencySymbol}}</span> </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"input-group pull-left\" ng-class=\"{error: item.error}\">\n" +
    "                                            <label class=\"input-group-addon\" for=\"qtyCart\">{{'QTY' | translate}}:</label>\n" +
    "                                            <form ng-submit=\"updateCartItemQty(item, item.quantity,{opencartAfterEdit: false})\">\n" +
    "                                                <input quantity-input type=\"number\" min=\"0\" step=\"1\" pattern=\"\\d*\" class=\"form-control\" id=\"qtyCart\" ng-model=\"item.quantity\"\n" +
    "                                                       ng-blur=\"updateCartItemQty(item, item.quantity,{opencartAfterEdit: false})\"/>\n" +
    "                                            </form>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"price-total item-attr\">{{'TOTAL_PRICE' | translate}}: <span>{{ item.itemPrice.amount || 0 | currency: currencySymbol}}</span></div>\n" +
    "                                    \n" +
    "\t\t\t\t\t\t\t    </div>\n" +
    "                                <div class=\"col-xs-2 text-right\">\n" +
    "                                    <button id=\"remove-product\" ng-click=\"removeProductFromCart(item.id)\" class=\"btn delete btn-link    \"><span class=\"hyicon hyicon-remove\"></span></button>\n" +
    "                                </div>\n" +
    "\t\t\t\t\t\t\t\n" +
    "                            </div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!-- /Cart Item -->\n" +
    "\t\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/auth/templates/signup.html',
    "<form name=\"singupForm\" ng-submit=\"signup(user.signup, singupForm)\">\n" +
    "  <div class=\"form-group input-group\">\n" +
    "    <label class=\"input-group-addon control-label\" for=\"emailInput\">{{'EMAIL' | translate}}</label>\n" +
    "      <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"email\"\n" +
    "             ng-model=\"user.signup.email\" required ng-focus=\"clearErrors()\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group input-group\">\n" +
    "    <label class=\"input-group-addon control-label\" for=\"newPasswordInput\">{{'PASSWORD' | translate}}</label>\n" +
    "      <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"newPasswordInput\" placeholder=\"{{'PASSWORD_MINCHAR'| translate}}\" name=\"password\"\n" +
    "             ng-model=\"user.signup.password\" required ng-focus=\"clearErrors()\">\n" +
    "  </div>\n" +
    "    <ul ng-if=\"errors && errors.signup.length\" class=\"text-danger list-unstyled\">\n" +
    "        <li ng-repeat=\"error in errors.signup\">{{error.message | translate}}</li>\n" +
    "    </ul>\n" +
    "  <button type=\"submit\" id=\"create-acct-btn\" class=\"btn btn-primary btn-lg btn-block\">{{'CREATE_ACCOUNT' | translate}}</button>\n" +
    "</form>"
  );


  $templateCache.put('js/app/auth/templates/signin.html',
    "<form name=\"singinForm\" ng-submit=\"signin(user.signin, singinForm)\">\n" +
    "    <div class=\"form-group input-group\" ng-class=\"{ 'has-error': singinForm.username.$invalid && singinForm.username.$dirty }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"usernameInput\">{{'EMAIL' | translate}}</label>\n" +
    "        <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"usernameInput\" name=\"username\"\n" +
    "               ng-model=\"user.signin.email\" required ng-focus=\"clearErrors()\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group input-group\" ng-class=\"{ 'has-error': singinForm.password.$invalid && singinForm.password.$dirty }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"passwordInput\">{{'PASSWORD' | translate}}</label>\n" +
    "        <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"passwordInput\" name=\"password\"\n" +
    "               ng-model=\"user.signin.password\" required ng-focus=\"clearErrors()\">\n" +
    "    </div>\n" +
    "    <ul ng-if=\"errors && errors.signin.length\" class=\"list-unstyled text-danger\">\n" +
    "        <li ng-repeat=\"error in errors.signin\">{{error.message | translate}}</li>\n" +
    "    </ul>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"sign-in-button\">{{'SIGN_IN' | translate}}</button>\n" +
    "    <a ng-click=\"showResetPassword()\" class=\"forgot-password-btn pull-right\">{{'FORGOT_PASSWORD' | translate }}</a>\n" +
    "    <div class=\"clr\"><!-- --></div>\n" +
    "</form>\n"
  );

}]);
