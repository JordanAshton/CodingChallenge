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

var table = Ti.UI.createTableView();
var tableData = [];
var json, line1, city, state, zip, appfile_id, id, body;

// Parse our JSON file using onload
var url = "https://raw.githubusercontent.com/JordanAshton/JSONExampleFile/master/JSONtwitterOutput.txt";
var xhr = Ti.Network.createHTTPClient({
	onload: function() {
		json = JSON.parse(this.responseText);
		for (var i = 0; i < json.things.length; i++){
			var row = Ti.UI.createTableViewRow({
				className: 'row',
				objectName: 'row',
				rowID: i,
				height: 100,
				borderColor: accentColor,
				borderWidth: 1,
				borderRadius: 5,
				backgroundImage:'../images/opbg.png',
				filter:json.data[i].line1 + "\n" + json.data[i].city + "," + json.data[i].state + " " + json.data[i].zip,
				appfile_id: json.data[i].appfile_id,
				message_id: json.data[i].id,
				messagebody: json.data[i].body
			});
			tableData.push(row);
		}
		table.setData(tableData);
	},
	
	onerror: function(e) {
		Ti.API.debug("STATUS: " + this.status);
		Ti.API.debug("TEXT: " + this.responseText);
		Ti.API.debug("ERROR: " + e.error);
		alert('There was an error retrieving the remote data. Try again.');
	},
	timeout:50000
});

xhr.open("GET", url);
xhr.send();

// Add the image to the window and open the window
win1.add(image);
win1.add(table);
win1.open();
