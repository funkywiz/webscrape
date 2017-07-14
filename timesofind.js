var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var controls= require('./controllers/scrapecontrollers');
const news = [];

request("http://timesofindia.indiatimes.com/", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " +response.statusCode);
    var $ = cheerio.load(body);
if(response.statusCode==200)
{
    console.log('The content is');
    $('li', '.top-story').each(function (i, elem) {
        news[i] = $(this).text();
    });
    var obj = news.join(',');
    console.log(obj);
    console.log('The given is a ~');
    console.log(typeof(obj));
    fs.appendFileSync('timesofindia.txt',obj);
}
else
{
    console.log('Enter a proper Internet connection');
    res.sendStatus(404);
}
    /*
  $('div#siteTable > div.link').each(function( index ) {
    var topstory = $(this).find('top-story.list8').text().trim();
    //var score = $(this).find('div.score.unvoted').text().trim();
    //var user = $(this).find('a.author').text().trim();
    console.log("Title: " + topstory);
    //console.log("Score: " + score);
    //console.log("User: " + user);
    fs.appendFileSync('timesofindia.txt', topstory + '\n' );
  });*/

});