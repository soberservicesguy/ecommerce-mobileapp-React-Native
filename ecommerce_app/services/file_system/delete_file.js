// create a path you want to delete
var path = RNFS.DocumentDirectoryPath + '/test.txt';
 
return RNFS.unlink(path)
.then(() => {
	console.log('FILE DELETED');
})
// `unlink` will throw an error, if the item to unlink does not exist
.catch((err) => {
	console.log(err.message);
});