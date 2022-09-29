import express from "express";//var express = require('express');
import path from "path";//var path = require('path');
import open from "open"; //var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

//Integrate webpack with express
app.use(require('webpack-dev-middleware')(compiler, {
   /*noInfo: true,*/
   publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
});
