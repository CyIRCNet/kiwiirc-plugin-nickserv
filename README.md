# KiwiIRC -  Nickserv Plugin

This is a NickServ plugin for KiwiIRC.
It includes a full registration form with
confimation form and login form.

Dependencies

node (https://nodejs.org/)
yarn (https://yarnpkg.com/)

Building the source

`yarn && yarn build`

The plugin will then be built into dist/plugin-nickserv.js

Just create a plugins folder in /static if you don't already have one
then add this plugin into that directory.

An easy way is to use also ln -s if you have the plugin in a different 
folder and just link the file to your plugins folder, than just copying 
and pasting. That way when you upgrade your plugin you will not need to
copy again over into your plugins folder.

example: 

`cd /folder/of/kiwiirc/static/plugins/`

`ln -s /path/of/plugin/dist/plugin-nickserv.js plugin-nickserv.js`

Finally, edit your config.json file like so:

    "plugins": [
      {"name": "nickserv", "url": "./static/plugins/plugin-nickserv.js"}
    ]
