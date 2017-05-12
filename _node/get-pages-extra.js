
'use strict';

var fs = require('fs');
var jsdom = require("jsdom");

var extraSectionsData = [];

jsdom.env(
  'http://ausd-ca.schoolloop.com/parents2',
  function (err, window) {
    var document = window.document;
    var element = document.getElementById('block_standard_left');
    var data = {
      title: element.querySelector('.title').textContent,
      pages: []
    }
    var links = element.querySelectorAll('a');
    var href;
    for (var index = 0; index < links.length; index++) {
      href = links[index].getAttribute('href');
      console.log('adding: ' + href);
      data.pages.push({
        url: href,
        title: links[index].textContent
      });
    }

    extraSectionsData.push(data);

    fs.writeFile('../_data/pages-extra.json', JSON.stringify(extraSectionsData), 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
);
