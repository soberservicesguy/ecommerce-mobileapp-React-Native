import DocumentPicker from 'react-native-document-picker';
 
// Pick a single file
try {
	const res = await DocumentPicker.pick({
		type: [DocumentPicker.types.images], // all image files
		// type: [DocumentPicker.types.allFiles], 
		// type: [DocumentPicker.types.plainText], // .txt or text files
		// type: [DocumentPicker.types.audio], // All audio types (audio/* or public.audio)
		// type: [DocumentPicker.types.pdf], // PDF documents (application/pdf or com.adobe.pdf)
		// type: [DocumentPicker.types.zip], // Zip files (application/zip or public.zip-archive)
		// type: [DocumentPicker.types.csv], // Csv files (text/csv or public.comma-separated-values-text)
	});
	console.log(
		res.uri,
		res.type, // mime type
		res.name,
		res.size
	);
} catch (err) {
	if (DocumentPicker.isCancel(err)) {
		// User cancelled the picker, exit any dialogs or menus and move on
	} else {
		throw err;
	}
}