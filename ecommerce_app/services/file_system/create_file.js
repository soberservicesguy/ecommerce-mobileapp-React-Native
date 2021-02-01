// require the module
var RNFS = require('react-native-fs');
 
// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
var path = RNFS.DocumentDirectoryPath + '/test.txt';
 
// write the file
RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
.then((success) => {
	console.log('FILE WRITTEN!');
})
.catch((err) => {
	console.log(err.message);
});
 