// Set the background color with no windows or tabs
Titanium.UI.setBackgroundColor('#000');

// Create the window
var win1 = Titanium.UI.createWindow({  
    title:'Challenge Window',
    backgroundColor:'#fff',
});

// Store the image and its properties
var image = Titanium.UI.createImageView({
	image: "https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif",
	height: 380,
	width: 380,
	center: 512,
	top: -50
});

var tableData;

// Parse our JSON file using onload
var url = "https://raw.githubusercontent.com/JordanAshton/JSONExampleFile/master/JSONtwitterOutput.json";
var json;
var xhr = Ti.Network.createHTTPClient({
	onload: function() {
		json = JSON.parse(this.responseText);
		tableData = json;
	}
});

xhr.open("GET", url);
xhr.send();

// Create the table and insert the JSON data
var table = Titanium.UI.createTableView({
	data: tableData,
    top: 256,
    left: 232
});
		
// Add the image to the window and open the window
win1.add(image);
win1.add(table);
win1.open();