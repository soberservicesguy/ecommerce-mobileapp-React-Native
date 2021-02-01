import { ShareDialog } from 'react-native-fbsdk';

// ...

// Build up a shareable link.
const shareLinkContent = {
  contentType: 'link',
  contentUrl: "https://facebook.com",
  contentDescription: 'Wow, check out this great site!',
};

// ...

// Share the link using the share dialog.
shareLinkWithShareDialog() {
  var tmp = this;
  ShareDialog.canShow(this.state.shareLinkContent).then(
    function(canShow) {
      if (canShow) {
        return ShareDialog.show(tmp.state.shareLinkContent);
      }
    }
  ).then(
    function(result) {
      if (result.isCancelled) {
        console.log('Share cancelled');
      } else {
        console.log('Share success with postId: '
          + result.postId);
      }
    },
    function(error) {
      console.log('Share fail with error: ' + error);
    }
  );
}
