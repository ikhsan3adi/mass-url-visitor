import open, { apps } from 'open';
import Visitor from './Visitor.js';

// list of url to open
const urls = [
  'http://localhost:5000',
  'https://google.com',
  'https://x.com',
];

const app = {
  // name: apps.browser,
  name: apps.browserPrivate,
  // name: 'chrome',
  // name: 'firefox',
  // name: 'chromium',
  arguments: [
    // '--new-window', // enable this if you want a new window pop up of each iteration
    // '--disable-extensions',
    // '--v=1'
  ]
};

const visitor = new Visitor(open, urls, app);

visitor.execute(1);
