var RNFS = require('react-native-fs');

// SELECT FILE FROM FILE PICKER FIRST, IE OTHER MODULES, THEN UPLOAD USING BELOW
let url = 'file://whatever/com.bla.bla/file.ext'; //The url you received from the DocumentPicker
 
// I STRONGLY RECOMMEND ADDING A SMALL SETTIMEOUT before uploading the url you just got.
const split = url.split('/');
const name = split.pop();
const inbox = split.pop();
const realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`;
 
const uploadBegin = (response) => {
	const jobId = response.jobId;
	console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
};
 
const uploadProgress = (response) => {
	const percentage = Math.floor(
		(response.totalBytesSent / response.totalBytesExpectedToSend) * 100
	);
	console.log('UPLOAD IS ' + percentage + '% DONE!');
};
 
RNFS.uploadFiles({
	toUrl: uploadUrl,
	files: [
		{
			name,
			filename: name,
			filepath: realPath,
		},
	],
	method: 'POST',
	headers: {
		Accept: 'application/json',
	},
	begin: uploadBegin,
	beginCallback: uploadBegin, // Don't ask me, only way I made it work as of 1.5.1
	progressCallback: uploadProgress,
	progress: uploadProgress,
})
	.then((response) => {
		console.log(response, '<<< Response');
		if (response.statusCode == 200) {
			//You might not be getting a statusCode at all. Check
			console.log('FILES UPLOADED!');
		} else {
			console.log('SERVER ERROR');
		}
	})
	.catch((err) => {
		if (err.description) {
			switch (err.description) {
				case 'cancelled':
					console.log('Upload cancelled');
					break;
				case 'empty':
					console.log('Empty file');
				default:
				//Unknown
			}
		} else {
			//Weird
		}
		console.log(err);
	});