var url = "https://docs.google.com/spreadsheets/d/1ROmctvKaYj3TlDxbjkNAmF10_C7fI-RRy0nXaH_myJQ/edit#gid=0";

// vid: https://www.youtube.com/watch?v=RRQvySxaCW0&index=1&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l
function doGet(e) {
  
  var tmp = HtmlService.createTemplateFromFile('16 - appsscript - basic webapp/page.html');
  
  //this is where we can pass variables from backend to frontend where <?= title ?> can work
  tmp.title = "My menő pinApp";
  
  //tmp.list = ["gs", "excel"];
  // refactored to get data from Options sheet
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  //var list = ws.getRange(1,1,3 if there are 3 items in the column,1)
  // this will return first column dynamically extending to last row. array of arrays so needs mapping
  // list = [[GS], [Excel], [Fasz]]
  var list = ws.getRange(1,1,ws.getRange("A1").getDataRegion().getLastRow(),1).getValues()
  
//  tmp.list = list.map(function(row){
//    return row[0]; // [GS, Excel, Fasz]
//  })
// Refactored: compile array on server side and pass to front end as list between ? ? 
  
  var htmlArray = list.map(function(row){return ('<option>' + row[0] + '</option>')}).join('')
  
  // this will be passed to frontend as 'list'
  tmp.list = htmlArray;
  
  Logger.log(tmp.list);
  
  //Logger.log(list);
  //Logger.log(tmp.list);
  
  return tmp.evaluate();
}

function userClicked(userInfo){
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);
  
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}