/**
 * Created by brett.hadley on 10/10/2016.
 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const JSDOM = require('jsdom').JSDOM;
const exposedProperties = ['window', 'navigator', 'document'];

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

chai.use(chaiEnzyme());

XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
