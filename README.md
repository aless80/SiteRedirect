# SiteRedirect

### Description
This script can be added as a TemperMonkey extension to Chrome or Firefox. It can be used as a template to allow you to automatically redirect your browser to some site when you land on some pages. 

### Why
When I access a portal at work I have to click one button to reach the page I am interested in. Using this script allows me to skip having to click the button a hundred times per day.  
Of course, you could set up your webserver to do the same, but I find this a handy script in TamperMonkey. In addition, it gets synchronized on browsers of all my devices. 

### How
This script is active on sites of your choice (refer to Tampermonkey's @match variable). The javascript code replaces the url, effectively switching the browser to a new page.

### Customize it
To customize this to your own needs I suggest changing this line indicating on what sites the script will be active: 
```
// @match        https://www.yoursite.com/path/*
```
and modify the javascript code to your needs.  
Some hints to do this: 

```
if (url.indexOf("https://www.yoursite.com/path/SomePathSkipIt.csp?Param=")>-1) {
        url = url.replace("SomePathSkipIt","SomePath");
        window.location.href = url;
    }
    ...
```
This will redirect the browser 'www.yoursite.com/path/SomePath.csp?Param=123' when you land on 'www.yoursite.com/path/SomePathSkipIt.csp?Param=1234'.  
The first line in the code checks if the URL has a certain patter ('www.yoursite.com/path/SomePathSkipIt.csp?Param=').  
The second line replaces one string of the URL with another. In the example, we replace the "SomePathSkipIt" path in URL with "SomePath".  
The third line uses the modified string as the new url. The browser will switch to that url location. 

You can use more convoluted logic to do this for other URL patters, as I did in my code. 
