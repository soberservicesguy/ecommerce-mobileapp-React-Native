const FBSDK = require('react-native-fbsdk');
const {
  ShareApi,
} = FBSDK;

const videoUri = 'file://' + '/path/of/video.mp4'
const shareVideoContent = {
  contentType = 'video',
  video: { localUrl: videoUri },
}

// ...

ShareDialog.show(tmp.state.shareVideoContent);
