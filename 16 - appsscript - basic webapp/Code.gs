// vid: https://www.youtube.com/watch?v=RRQvySxaCW0&index=1&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l
function doGet(e) {
  
  return HtmlService.createTemplateFromFile('16 - appsscript - basic webapp/page.html').evaluate();
}

function userClicked(userInfo){
  var url = "https://docs.google.com/spreadsheets/d/1ROmctvKaYj3TlDxbjkNAmF10_C7fI-RRy0nXaH_myJQ/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);
  
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}