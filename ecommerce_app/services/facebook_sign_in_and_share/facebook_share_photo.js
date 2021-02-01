const FBSDK = require('react-native-fbsdk');
const {
  ShareApi,
} = FBSDK;

const photoUri = 'file://' + '/path/of/photo.png'
const sharePhotoContent = {
  contentType = 'photo',
  photos: [{ imageUrl: photoUri }],
}

// ...

ShareDialog.show(tmp.state.sharePhotoContent);
