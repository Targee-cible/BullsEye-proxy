require('newrelic');

const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(proxy('/api/checkout', {target: 'http://ec2-35-160-250-245.us-west-2.compute.amazonaws.com:3002/'}));

app.use(proxy('/api/reviews', {target: 'http://ec2-54-67-11-245.us-west-1.compute.amazonaws.com/'}));
app.use(proxy('/api/product', {target: 'http://ec2-54-67-11-245.us-west-1.compute.amazonaws.com/'}));
app.use(proxy('/api/', {target: 'http://ec2-18-144-8-126.us-west-1.compute.amazonaws.com/'}));

app.listen(port, () => console.log('listening to port 3000'));
