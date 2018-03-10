var readline = require('readline');
const {google} = require('googleapis');
const googleAuth = require('google-auth-library');
var archieml = require('archieml');
var fs = require('fs');
var data = "";
var folder;
module.exports = exports;

// Edit the file ID for the Google Doc. Be sure it's set to the "Share" preferences to "anyone on the internet"
//var fileId = '1eXbE48sI_6qaGeU6gCE3gv3Pw1L5xFapiiKRCKxqX0c';
var fileIds = {
    "sample-story": "1nY3TYMC_FOIvKTL-8wBY4kuvKuowSrP5LxElL_QMw40",
    "sample-storyespanol": "1nY3TYMC_FOIvKTL-8wBY4kuvKuowSrP5LxElL_QMw40",
    "water": "1A6umzXWEGbOOsuFd5JHvgcmrsusKhKZJGzFjutwj-PQ"
}

module.exports.sendIds = function(){
  return fileIds;
}

// Overall varibales
var SCOPES = ['https://www.googleapis.com/auth/drive'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-api-quickstart.json';

// Load client secrets from a local file.
var oauth2Client;
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Drive API.
  authorize(JSON.parse(content), getExportLink);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Get the actual file contents as plain text
 *
 * @param {String} The URL to request the content from
 */
function getFileContents(exportLink, currentTopic){

  oauth2Client.request({
      method: 'GET',
      uri: exportLink
  }, function(err, body) {
      if (err) {
          console.log('Getting file contents failed.', err);
          return;
      }
     data = archieml.load(body);
	 //fs.writeFile("~"+count+".txt", JSON.stringify(data)); count++; 	//write 'data' to a file
	 data.text.forEach(function(el, index, arr){
		 if (el.type !== "text" ) return;
		 el.value = el.value.replace(/\[a\]/gm, "");	//remove "[a]"
		 el.value = el.value.replace(/\*\*([^*]+)\*\*/gm, "<span class='italic'>$1</span>");	//add italics class to **text**
	 });
     sendIt(data, currentTopic);
  });
}


function sendIt(data, currentTopic){

  var fileLocation = './public/data/' + currentTopic + '.json';

  fs.writeFileSync(fileLocation, JSON.stringify(data,null,2));

}
/**
 * Get the download link, also called the export link, from the file response
 *
 * @param {Object} Google Drive authorization
 */
function getExportLink(auth){
  for (i in fileIds){
  (function(i){
    var currentTopic = i;
    var service = google.drive('v2');
    var request = service.files.get({
      auth: auth,
      fileId: fileIds[i]
    },function(err,response){
      if(err){
        console.log('Getting export link failed.', err);
        return;
      }

      var exportLink = response['exportLinks']['text/plain'];

      getFileContents(exportLink, currentTopic);
    });
  })(i);
}
}
