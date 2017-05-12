var jsdom = require("jsdom");

var dom = new jsdom.JSDOM("<!DOCTYPE html><html><body><div id='app'></div></body></html>");
var window = dom.window;

global.window = window.document.defaultView;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;
global.navigator = {
  userAgent: 'node.js'
};