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

async function deletePhotos() {
	if (Platform.OS === "android" && !(await hasAndroidPermission())) {
		return;
	}

	CameraRoll.deletePhotos([uri])
	// On Android, the uri must be a local image or video URI, such as "file:///sdcard/img.png".
};