/*
jQuery.mailChimpSubscribe
Licensed under the MIT license

Copyright (c) 2017 Jan Holinka

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function ($) {
    "use strict";

    $.fn.mailChimpSubscribe = function (options) {
        var settings = $.extend({
            list: null,
            u: null,
            id: null,
            success: null,
            error: null
        }, options);

        var url = "https://" + settings.list;
        url += "/subscribe/post-json?id=" + settings.id;
        url += "&u=" + settings.u + "&c=?";

        $(this).each(function (i, element) {
            var $form = $(element);
            $form.submit(function () {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $form.serialize(),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        if (typeof settings.success === "function")
                            settings.success(data);
                    },
                    error: function (error) {
                        if (typeof settings.error === "function")
                            settings.error(error);
                    }
                });

                return false;
            });
        });
    };
})(jQuery);
