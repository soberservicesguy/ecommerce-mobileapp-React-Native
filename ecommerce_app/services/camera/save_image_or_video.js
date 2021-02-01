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

async function savePicture() {
	if (Platform.OS === "android" && !(await hasAndroidPermission())) {
		return;
	}

	CameraRoll.save(tag, { type, album })
	// On Android, the tag must be a local image or video URI, such as "file:///sdcard/img.png", REQUIRED
	// type: ('photo', 'video'), NOT REQUIRED
	// album: album name to save to, NOT REQUIRED
};