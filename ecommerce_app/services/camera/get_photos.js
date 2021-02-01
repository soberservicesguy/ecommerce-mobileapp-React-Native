import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

async function hasAndroidPermission() {
	const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

	const hasPermission = await PermissionsAndroid.check(permission);
	if (hasPermission) {
		return true;
	}

	const status = await PermissionsAndroid.request(permission);
	return status === 'granted';
}

async function getPhotos() {
	if (Platform.OS === "android" && !(await hasAndroidPermission())) {
		return;
	}

	CameraRoll.getPhotos(params);
	// params
	// first : {number}
	// assetType: 'Photos'
	// https://github.com/react-native-cameraroll/react-native-cameraroll

};



// loading images in REACT
_handleButtonPress = () => {
	CameraRoll.getPhotos({
		first: 20,
		assetType: 'Photos',
	})
	.then(r => {
		this.setState({ photos: r.edges });
	})
	.catch((err) => {
		//Error Loading Images
	});
};

render() {
	return (
		<View>
			<Button title="Load Images" onPress={this._handleButtonPress} />
			<ScrollView>
				{this.state.photos.map((p, i) => {
					return (
						<Image
							key={i}
							style={{
								width: 300,
								height: 100,
							}}
							source={{ uri: p.node.image.uri }}
						/>
					);
				})}
			</ScrollView>
		</View>
);
}