'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
const LOG_FILE_PATH = '/var/log/app.log';

const winston = require('winston');
const format = winston.format;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: LOG_FILE_PATH })
    ]
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/info', (req, res) => {
    logger.info('info logging');
    res.send('info logging');
});

app.get('/warn', (req, res) => {
    logger.warn('warn logging');
    res.send('warn logging');
});

app.get('/error', (req, res) => {
    logger.error('error logging');
    res.send('error logging');
});

app.listen(PORT, () => logger.info('Simple Server start'));
