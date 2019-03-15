// vid: https://www.youtube.com/watch?v=RRQvySxaCW0&index=1&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l
function doGet(e) {
  
  return HtmlService.createHtmlOutputFromFile('16 - appsscript - basic webapp/page');
}

function userClicked(name){
  var url = "https://docs.google.com/spreadsheets/d/1ROmctvKaYj3TlDxbjkNAmF10_C7fI-RRy0nXaH_myJQ/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([name, new Date()]);
  Logger.log( name + 'clicked button');
}