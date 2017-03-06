#### Bower

[Bower](https://bower.io) is a command line utility, 
a package manager for the web requires node, npm and git.
Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. 
Bower to the rescue!

##### Dependencies:

    > sudo apt-get install nodejs
    > sudo apt-get install npm


Maybe a problem with the execution:

    > ln -s /usr/bin/nodejs /usr/bin/node

##### Install

Install it with npm.

    > npm install -g bower

##### Use
 
To install the project dependencies listed in bower.json

    > bower install
    
To install specific library:
    
    > bower install highcharts
    
but if we want to save in our bower.json at the same time:

    > bower install highcharts --save