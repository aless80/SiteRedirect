# IS-ports

###What
This script can be added as a TemperMonkey extension to Chrome or Firefox. It can be used as a template to allow you to automatically redirect your browser to some site when you land on some pages. 


###Why
When I access a portal at work I have to click one button to reach the page I am interested in. Using this script allows me to skip having to click the button a hundred times per day.

###How
This script is active on sites of your choice (refer to Tampermonkey's @match variable). The javascript code replaces the url, effectively switching the browser to a new page.

###Customize it
To customize this to your own needs I suggest changing this line indicating on what sites the script will be active: 
```
// @match        https://wrc.intersystems.com/wrc/*
```
and modify the javascript code. Some hints to do this: 

```
if (url.indexOf("https://wrc.intersystems.com/wrc/ProblemView.csp?OBJID=")>-1) {
        url = url.replace("ProblemView","Problem");
        window.location.href = url;
    }
    ...
```

