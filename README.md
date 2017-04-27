# jQuery.mailChimpSubscribe
Small jQuery plugin that lets you create your custom subscribe forms for MailChimp.

## how to use

1) Include source file

```
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.mailChimpSubscribe.min.js"></script>
```

2) Inser subscribe form to your HTML

```
<form>
    <input class="input" type="text" name="EMAIL|MERGE1" placeholder="Email address">
    <input type="submit" value="Subscribe" name="submit">
</form>
```

3) Call jQuery plugin in your script

```
$(function () {
    $("form").mailChimpSubscribe({
        list: "listname.us13.list-manage.com",
        id: "idParameterFromUrl",
        u: "uParameterFromUrl",
        success: function (data) {
            if(data.result === "success")
                alert("Subscribed!");
            else
                alert(data.msg);
        },
        error: function () {
            alert("Could not connect to the MailChimp server!");
        }
    });
});
```

## license

jQuery.mailChimpSubscribe is licensed under the MIT license. (http://opensource.org/licenses/MIT)
