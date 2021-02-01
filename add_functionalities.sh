#!/bin/bash

# app_name='webrtc'
maps_key="AIzaSyDLLtxHdeGU7pQ8ZAqtdYVoK8uugk1t12s" # ${1} # maps key is used while configuring maps
facebookAppID="741842329794282"

app_name="${PWD##*/}"
echo $app_name

failedFunctionalities=()
succeededFunctionalities=()
failedFileConfigurationEdits=()
succeededFileConfigurationEdits=()

# creating new errors_from_last_log.txt file
rm -rf errors_from_last_log.txt
touch errors_from_last_log.txt


# dropdown / picker
function add_dropdown() {
	# npm install --save prop-types      npm install @react-native-community/picker
	echo " "
	echo "LOG: --------------- attempting to install prop-types"
	if 	npm install --save @react-native-picker/picker ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-picker/picker installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-picker/picker')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-picker/picker installation ,add_dropdown() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-picker/picker')
	    npm install --save @react-native-picker/picker 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save @react-native-picker/picker"
	fi


	echo " "
	echo "LOG: --------------- attempting to link @react-native-picker/picker"
	if 	npx react-native link @react-native-picker/picker ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ link @react-native-picker/picker linking SUCCEEDED"
	    succeededFunctionalities+=('link @react-native-picker/picker linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx link @react-native-picker/picker linking,  FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('link @react-native-picker/picker linking')
	    npx react-native link @react-native-picker/picker 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npx react-native link @react-native-picker/picker"
	fi


}



# prop-types
function add_proptypes() {
	# npm install --save prop-types
	echo " "
	echo "LOG: --------------- attempting to install prop-types"
	if 	npm install --save prop-types ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ prop-types installation SUCCEEDED"
	    succeededFunctionalities+=('prop-types')
	else
	    echo "LOG: xxxxxxxxxxxxxxx prop-types installation ,add_proptypes() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('prop-types')
	    npm install --save prop-types 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save prop-types"
	fi
}


# progress-bar-android
function add_progressbar_android() {
	# npm install @react-native-community/progress-bar-android --save	
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/progress-bar-android"
	if 	npm install @react-native-community/progress-bar-android --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/progress-bar-android installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/progress-bar-android')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/progress-bar-android, add_progressbar_android() installation FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/progress-bar-android')
	    npm install @react-native-community/progress-bar-android --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-native-community/progress-bar-android --save"
	fi

}

# redux
function add_redux() {
	# npm install redux --save
	echo " "
	echo "LOG: --------------- attempting to install redux"
	if 	npm install redux --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ redux installation SUCCEEDED"
	    succeededFunctionalities+=('redux')
	else
	    echo "LOG: xxxxxxxxxxxxxxx redux installation, add_redux() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('redux')
	    npm install redux --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install redux --save "
	fi

	# npm install react-redux --save
	echo " "
	echo "LOG: --------------- attempting to install react-redux"
	if 	npm install react-redux --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-redux installation SUCCEEDED"
	    succeededFunctionalities+=('react-redux')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-redux installation, add_redux() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-redux')
	    npm install react-redux --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-redux --save"
	fi

	# npm install --save redux-saga
	# echo " "
	# echo "LOG: --------------- attempting to install redux-saga"
	# if 	npm install --save redux-saga ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ redux-saga installation SUCCEEDED"
	#     succeededFunctionalities+=('redux-saga')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx redux-saga installation, add_redux() FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('redux-saga')
	#     npm install --save redux-saga 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save redux-saga"
	# fi


	echo " "
	echo "LOG: --------------- attempting to install redux-persist"
	if 	npm install --save redux-persist ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ redux-persist installation SUCCEEDED"
	    succeededFunctionalities+=('redux-persist')
	else
	    echo "LOG: xxxxxxxxxxxxxxx redux-persist installation, add_redux() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('redux-persist')
	    npm install --save redux-persist 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save redux-persist"
	fi


}

# axios
function add_axios() {
	# npm install axios --save
	echo " "
	echo "LOG: --------------- attempting to install axios"
	if 	npm install axios --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ axios installation SUCCEEDED"
	    succeededFunctionalities+=('axios')
	else
	    echo "LOG: xxxxxxxxxxxxxxx axios installation, add_axios() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('axios')
	    npm install axios --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install axios --save"
	fi

}

# firebase
function add_firebase() {
	# npm install firebase --save
	echo " "
	echo "LOG: --------------- attempting to install firebase"
	if 	npm install --save @react-native-firebase/app ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ firebase installation SUCCEEDED"
	    succeededFunctionalities+=('firebase')
	else
	    echo "LOG: xxxxxxxxxxxxxxx firebase installation, add_firebase() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('firebase')
	    npm install --save @react-native-firebase/app 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save @react-native-firebase/app"
	fi


	echo " "
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line     dependencies {"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: ---------------	classpath 'com.google.gms:google-services:4.3.3'"
	if 	node ~/resources/add_react_native_funcitionalities/firebase_conf_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/build.gradle AFTER line     ext { SUCCEEDED"
	    succeededFileConfigurationEdits+=('firebase_conf_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/build.gradle AFTER line     dependencies {, node ~/resources/add_react_native_funcitionalities/firebase_conf_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('firebase_conf_1')
	    node ~/resources/add_react_native_funcitionalities/firebase_conf_1 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/firebase_conf_1"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line apply plugin: 'com.android.application'"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: ---------------	apply plugin: 'com.google.gms.google-services'"
	if 	node ~/resources/add_react_native_funcitionalities/firebase_conf_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/build.gradle AFTER line     ext { SUCCEEDED"
	    succeededFileConfigurationEdits+=('firebase_conf_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line apply plugin: 'com.android.application', node ~/resources/add_react_native_funcitionalities/firebase_conf_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('firebase_conf_2')
	    node ~/resources/add_react_native_funcitionalities/firebase_conf_2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/firebase_conf_2"
	fi



}

# screens, navigations
function add_navigations() {
	# npm install --save react-native-reanimated react-native-screens
	echo " "
	echo "LOG: --------------- attempting to install react-native-reanimated and react-native-screens"
	if 	npm install --save react-native-reanimated react-native-screens ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-reanimated and react-native-screens installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-reanimated' 'react-native-screens')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-reanimated and react-native-screens installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-reanimated' 'react-native-screens')
	    npm install --save react-native-reanimated react-native-screens 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-reanimated react-native-screens"
	fi

	npm i @react-native-community/masked-view --save
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/masked-view"
	if 	npm i @react-native-community/masked-view --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/masked-view installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/masked-view')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/masked-view installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/masked-view')
	    npm i @react-native-community/masked-view --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i @react-native-community/masked-view --save"
	fi

	# npm i react-native-safe-area-context --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-safe-area-context"
	if 	npm i react-native-safe-area-context --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-safe-area-context installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-safe-area-context')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-safe-area-context installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-safe-area-context')
	    npm i react-native-safe-area-context --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i react-native-safe-area-context --save"
	fi

				# npm i react-native-gesture-handler --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-gesture-handler"
	if 	npm i react-native-gesture-handler --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-gesture-handler installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-gesture-handler')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-gesture-handler installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-gesture-handler')
	    npm i react-native-gesture-handler --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i react-native-gesture-handler --save"
	fi


	# npm install @react-navigation/native --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/native"
	if 	npm install @react-navigation/native --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/native installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/native')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/native installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/native')
	    npm install @react-navigation/native --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/native --save"
	fi


	# npm install @react-navigation/stack --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/stack"
	if 	npm install @react-navigation/stack --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/stack installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/stack')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/stack installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/stack')
	    npm install @react-navigation/stack --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/stack --save"
	fi


	# npm install @react-navigation/drawer --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/drawer"
	if 	npm install @react-navigation/drawer --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/drawer installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/drawer')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/drawer installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/drawer')
	    npm install @react-navigation/drawer --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/drawer --save"
	fi


	# npm install @react-navigation/bottom-tabs --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/bottom-tabs"
	if 	npm install @react-navigation/bottom-tabs --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/bottom-tabs installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/bottom-tabs')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/bottom-tabs installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/bottom-tabs')
	    npm install @react-navigation/bottom-tabs --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/bottom-tabs --save"
	fi


	# npm install @react-navigation/material-bottom-tabs react-native-paper --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/material-bottom-tabs and react-native-paper"
	if 	npm install @react-navigation/material-bottom-tabs react-native-paper --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/material-bottom-tabs and react-native-paper installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/material-bottom-tabs' 'react-native-paper')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/material-bottom-tabs and react-native-paper installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/material-bottom-tabs' 'react-native-paper')
	    npm install @react-navigation/material-bottom-tabs react-native-paper --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/material-bottom-tabs react-native-paper --save"
	fi


	# npm install @react-navigation/material-top-tabs react-native-tab-view --save
	echo " "
	echo "LOG: --------------- attempting to install @react-navigation/material-top-tabs and react-native-tab-view"
	if 	npm install @react-navigation/material-top-tabs react-native-tab-view --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-navigation/material-top-tabs and react-native-tab-view installation SUCCEEDED"
	    succeededFunctionalities+=('@react-navigation/material-top-tabs' 'react-native-tab-view')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-navigation/material-top-tabs and react-native-tab-view installation, add_navigations() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-navigation/material-top-tabs' 'react-native-tab-view')
	    npm install @react-navigation/material-top-tabs react-native-tab-view --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-navigation/material-top-tabs react-native-tab-view --save"
	fi


}

# svg
function add_svg() {
	# npm install react-native-svg --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-svg"
	if 	npm install react-native-svg --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-svg installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-svg')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-svg installation, add_svg() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-svg')
	    npm install react-native-svg --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-svg --save"
	fi

}

# charts and graphs
function add_chart() {
	# npm install react-native-chart-kit --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-chart-kit"
	if 	npm install react-native-chart-kit --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-chart-kit installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-chart-kit')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-chart-kit installation, add_chart() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-chart-kit')
	    npm install react-native-chart-kit --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-chart-kit --save"
	fi

}

# icons etc
function add_native_elements_like_icons() {
	# npm install react-native-elements --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-elements"
	if 	npm install react-native-elements --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-elements installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-elements')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-elements installation, add_native_elements_like_icons() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-elements')
	    npm install react-native-elements --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-elements --save"
	fi


	# npm install --save react-native-vector-icons
	echo " "
	echo "LOG: --------------- attempting to install react-native-vector-icons"
	if 	npm install --save react-native-vector-icons ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-vector-icons installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-vector-icons')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-vector-icons installation, add_native_elements_like_icons() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-vector-icons')
	    npm install --save react-native-vector-icons 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-vector-icons"
	fi


	# npx react-native link react-native-vector-icons
	echo " "
	echo "LOG: --------------- attempting to install react-native-vector-icons"
	if 	npx react-native link react-native-vector-icons ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-vector-icons installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-vector-icons linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-vector-icons installation, add_native_elements_like_icons() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-vector-icons linking')
	    npx react-native link react-native-vector-icons 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npx react-native link react-native-vector-icons"
	fi


}

# progress
function add_progress_bars() {
	# npm install react-native-progress --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-progress"
	if 	npm install react-native-progress --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-progress installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-progress')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-progress installation, add_progress_bars() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-progress')
	    npm install react-native-progress --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-progress --save"
	fi


	# npm i --save react-native-circular-progress react-native-svg
	echo " "
	echo "LOG: --------------- attempting to install react-native-circular-progress and react-native-svg"
	if 	npm i --save react-native-circular-progress react-native-svg ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-circular-progress and react-native-svg installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-circular-progress' 'react-native-svg')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-circular-progress and react-native-svg installation, add_progress_bars() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-circular-progress' 'react-native-svg')
	    npm i --save react-native-circular-progress react-native-svg 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i --save react-native-circular-progress react-native-svg"
	fi


}

# async-storage
function add_asyncstorage() {

	# npm i @react-native-community/async-storage --save
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/async-storage"
	if 	npm i @react-native-community/async-storage --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/async-storage installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/async-storage')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/async-storage installation, add_asyncstorage() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/async-storage')
	    npm i @react-native-community/async-storage --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i @react-native-community/async-storage --save"
	fi


	echo " "
	echo "LOG: --------------- attempting to link @react-native-community/async-storage"
	if 	npx react-native link @react-native-community/async-storage ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ link @react-native-community/async-storage linking SUCCEEDED"
	    succeededFunctionalities+=('link @react-native-community/async-storage linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx link @react-native-community/async-storage linking,  FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('link @react-native-community/async-storage linking')
	    npx react-native link @react-native-community/async-storage 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npx react-native link @react-native-community/async-storage"
	fi

# COMMENTING OUT IN FAVOR OF LINKING
# 	# node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1
# 	echo " "
# 	echo "LOG: --------------- attempting to edit ./android/settings.gradle AFTER line include ':app'"
# 	echo "LOG: ---------------	attempting to write"
# 	echo "LOG: ------------- include ':@react-native-community_async-storage'
# project(':@react-native-community_async-storage').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/async-storage/android')"
# 	if 	node ~/resources/add_react_native_funcitionalities/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1 ; then
# 	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle editing AFTER line include ':app' SUCCEEDED"
# 	    succeededFileConfigurationEdits+=('asyncstorage_android_conf_editing_1')
# 	else
# 	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle editing AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1 FAILED" >> errors_from_last_log.txt
# 	    failedFileConfigurationEdits+=('asyncstorage_android_conf_editing_1')
# 	    node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1 2>> errors_from_last_log.txt 
# 	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1"
# 	fi


# 	# node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_2
# 	echo " "
# 	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
# 	echo "LOG: ---------------	attempting to write"
# 	echo "LOG: ---------------	implementation project(':@react-native-community_async-storage')"
# 	if 	node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_2 ; then
# 	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
# 	    succeededFileConfigurationEdits+=('asyncstorage_android_conf_editing_2')
# 	else
# 	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_2 FAILED" >> errors_from_last_log.txt
# 	    failedFileConfigurationEdits+=('asyncstorage_android_conf_editing_2')
# 	    node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_2 2>> errors_from_last_log.txt 
# 	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_2"
# 	fi


# 	# node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_3 app_name
# 	echo " "
# 	echo "LOG: --------------- attempting to edit android/app/src/main/java/com/${app_name}/ AFTER line package com.$\{app_name};"
# 	# COMMENTED OUT DUE TO NO APPARENT NEED
# 	# echo "LOG: ------------- --------------- attempting to edit android/app/src/main/java/com/${app_name}/ AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages();"
# 	echo "LOG: ---------------	attempting to write"
# 	echo "LOG: --------------- 1 import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;"
# 	# COMMENTED OUT DUE TO NO APPARENT NEED
# 	# echo "LOG: ------------- 2 new AsyncStoragePackage()"
# 	if 	node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_3 $app_name ; then
# 	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File android/app/src/main/java/com/${app_name} AFTER line package com.$\{app_name}; SUCCEEDED"
# 	    # COMMENTED OUT DUE TO NO APPARENT NEED
# 	    # echo "LOG: ------------- 2 File android/app/src/main/java/com/${app_name} AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages(); SUCCEEDED"
# 	    succeededFileConfigurationEdits+=('asyncstorage_android_conf_editing_3')
# 	else
# 	    echo "LOG: xxxxxxxxxxxxxxx 1 File android/app/src/main/java/com/${app_name} AFTER line package com.$\{app_name};, node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_3 $app_name FAILED" >> errors_from_last_log.txt
# 	    # COMMENTED OUT DUE TO NO APPARENT NEED
# 	    # echo "LOG: ------------- 2 File android/app/src/main/java/com/${app_name} AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages();, node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_1 FAILED"
# 	    failedFileConfigurationEdits+=('asyncstorage_android_conf_editing_3')
# 	    node ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_3 $app_name 2>> errors_from_last_log.txt 
# 	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/asyncstorage_android_conf_editing_3 $app_name"
# 	fi


}

# react-native-maps
function add_react_native_maps() {

	# npm install git://github.com/xDemon200/react-native-maps --save
	echo " "
	echo "LOG: --------------- attempting to install git://github.com/xDemon200/react-native-maps"
	if 	npm install git://github.com/xDemon200/react-native-maps --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ git://github.com/xDemon200/react-native-maps installation SUCCEEDED"
	    succeededFunctionalities+=('git://github.com/xDemon200/react-native-maps')
	else
	    echo "LOG: xxxxxxxxxxxxxxx git://github.com/xDemon200/react-native-maps, add_react_native_maps() installation FAILED"
	    failedFunctionalities+=('git://github.com/xDemon200/react-native-maps') >> errors_from_last_log.txt
	    npm install git://github.com/xDemon200/react-native-maps --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install git://github.com/xDemon200/react-native-maps --save"
	fi


	# npm install react-native-maps --save-exact
	echo " "
	echo "LOG: --------------- attempting to install react-native-maps"
	if 	npm install react-native-maps --save-exact ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-maps installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-maps')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-maps installation, add_react_native_maps() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-maps')
	    npm install react-native-maps --save-exact 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-maps --save-exact"
	fi


	# node ~/resources/add_react_native_funcitionalities/maps_conf_editing_1
	echo " "
	echo "LOG: --------------- attempting to ./android/settings.gradle AFTER line include ':app'"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: ------------- include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')"
	if 	node ~/resources/add_react_native_funcitionalities/maps_conf_editing_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle AFTER line include ':app' SUCCEEDED"
	    succeededFileConfigurationEdits+=('maps_conf_editing_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/maps_conf_editing_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('maps_conf_editing_1')
	    node ~/resources/add_react_native_funcitionalities/maps_conf_editing_1 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/maps_conf_editing_1"
	fi


	# node ~/resources/add_react_native_funcitionalities/maps_conf_editing_2
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 	implementation project(':react-native-maps')"
	if 	node ~/resources/add_react_native_funcitionalities/maps_conf_editing_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
	    succeededFileConfigurationEdits+=('maps_conf_editing_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/maps_conf_editing_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('maps_conf_editing_2')
	    node ~/resources/add_react_native_funcitionalities/maps_conf_editing_2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/maps_conf_editing_2"
	fi


	# node ~/resources/add_react_native_funcitionalities/maps_conf_editing_3
	echo " "
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line     ext {"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: ---------------	googlePlayServicesVersion = \"11.8.0\"
	androidMapsUtilsVersion = \"0.5+\""
	if 	node ~/resources/add_react_native_funcitionalities/maps_conf_editing_3 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/build.gradle AFTER line     ext { SUCCEEDED"
	    succeededFileConfigurationEdits+=('maps_conf_editing_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/build.gradle AFTER line     ext {, node ~/resources/add_react_native_funcitionalities/maps_conf_editing_3 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('maps_conf_editing_3')
	    node ~/resources/add_react_native_funcitionalities/maps_conf_editing_3 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/maps_conf_editing_3"
	fi


	# node ~/resources/add_react_native_funcitionalities/give_key_to_maps maps_key # 'AIzaSyDLLtxHdeGU7pQ8ZAqtdYVoK8uugk1t12s'
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER       android:theme=\"@style/AppTheme\">"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 	<meta-data
	   android:name=\"com.google.android.geo.API_KEY\"
	   android:value=\"${maps_key}\"/>"
	if 	node ~/resources/add_react_native_funcitionalities/give_key_to_maps $maps_key ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER       android:theme=\"@style/AppTheme\"> SUCCEEDED"
	    succeededFileConfigurationEdits+=('give_key_to_maps')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER       android:theme=\"@style/AppTheme\">, node ~/resources/add_react_native_funcitionalities/give_key_to_maps maps_key FAILED" >> errors_from_last_log.txt
		failedFileConfigurationEdits+=('give_key_to_maps')
		npm node ~/resources/add_react_native_funcitionalities/give_key_to_maps $maps_key 2>> errors_from_last_log.txt
		echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/give_key_to_maps $maps_key" 
	fi


	# node ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 app_name
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line package com.${app_name};"
	# COMMENTED OUT AS IT SEEMS NOT TO BE NEEDED 
	# echo "LOG: ------------- --------------- attempting to edit ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line           // Packages that cannot be autolinked yet can be added manually here, for example:"	
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 import com.airbnb.android.react.maps.MapsPackage;"
	# COMMENTED OUT AS IT SEEMS NOT TO BE NEEDED 
	# echo "LOG: ------------- 2
          # packages.add(new MapsPackage());"
	if 	node ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 $app_name ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line package com.${app_name}; SUCCEEDED"
	    # COMMENTED OUT AS IT SEEMS NOT TO BE NEEDED 
	    # echo "LOG: ------------- 2 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line            // Packages that cannot be autolinked yet can be added manually here, for example: SUCCEEDED"
	    succeededFileConfigurationEdits+=('maps_conf_editing_4')

	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line package com.${app_name};, node ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 app_name FAILED" >> errors_from_last_log.txt
	    # COMMENTED OUT AS IT SEEMS NOT TO BE NEEDED 
	    # echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line        Packages that cannot be autolinked yet can be added manually here, for example:, node ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 app_name FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('maps_conf_editing_4')
	    node ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 $app_name 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/maps_conf_editing_4 $app_name"
	fi


}

# push notifications
function add_push_notification() {
	# npm install --save react-native-push-notification
	echo " "
	echo "LOG: --------------- attempting to install react-native-push-notification"
	if 	npm install --save react-native-push-notification ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-push-notification installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-push-notification')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-push-notification installation, add_push_notification() FAILED"
	    failedFunctionalities+=('react-native-push-notification') >> errors_from_last_log.txt
	    npm install --save react-native-push-notification 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-push-notification"
	fi



	# --------APPEARS TO BE BREAKING THE APP AND MAKE IT ASK WHETHER ITS AN ANDROID PROJECT--------
	# npx react-native link react-native-push-notification
	# echo " "
	# echo "LOG: --------------- attempting to link react-native-push-notification"
	# if 	npx react-native link react-native-push-notification ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-push-notification linking SUCCEEDED"
	#     succeededFunctionalities+=('react-native-push-notification linking')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx react-native-push-notification linking FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('react-native-push-notification linking')
	#     npx react-native link react-native-push-notification 2>> errors_from_last_log.txt 
	# fi


	# node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_1
	echo " "
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line     ext {"
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line     dependencies {"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 		googlePlayServicesVersion = \"16.1.0\" // default: \"+\"
        firebaseVersion = \"17.3.4\" // default: \"+\""
	echo "LOG: --------------- 2 		classpath 'com.google.gms:google-services:4.3.2'"        
	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/build.gradle AFTER line     ext { SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/build.gradle AFTER line     dependencies { SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/build.gradle AFTER line     ext { FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/build.gradle AFTER line     dependencies {, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_1 FAILED"
	    failedFileConfigurationEdits+=('push_notifications_conf_editing_1')
	    node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_1 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_1" 
	fi


	# node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_2
	echo " "
	echo "LOG: --------------- attempting to edit ./android/settings.gradle AFTER line include ':app'"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- include ':react-native-push-notification'
project(':react-native-push-notification').projectDir = file('../node_modules/react-native-push-notification/android')
"
	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle AFTER line include ':app' SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('push_notifications_conf_editing_2')
	    node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_2"
	fi





# STABLE
	# --------APPEARS TO BE BREAKING THE APP AND MAKE IT ASK WHETHER ITS AN ANDROID PROJECT-------- 
	# # node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line       android:theme=\"@style/AppTheme\">"
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line             android:theme=\"@style/AppTheme\">"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 	<uses-permission android:name=\"android.permission.WAKE_LOCK\" />
    <permission
        android:name=\"$\{applicationId}.permission.C2D_MESSAGE\"
        android:protectionLevel=\"signature\" />
    <uses-permission android:name=\"$\{applicationId}.permission.C2D_MESSAGE\" />
    <!-- < Only if you're using GCM or localNotificationSchedule() > -->
    <uses-permission android:name=\"android.permission.VIBRATE\" />
    <uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\"/>"
	echo "LOG: --------------- 2 	<meta-data  android:name=\"com.dieam.reactnativepushnotification.notification_channel_name\"
        android:value=\"YOUR NOTIFICATION CHANNEL NAME\"/>
	<meta-data  android:name=\"com.dieam.reactnativepushnotification.notification_channel_description\"
        android:value=\"YOUR NOTIFICATION CHANNEL DESCRIPTION\"/>
	<!-- Change the resource name to your App's accent color - or any other color you want -->
	<meta-data  android:name=\"com.dieam.reactnativepushnotification.notification_color\"
        android:resource=\"@android:color/white\"/><!-- < Only if you're using GCM or localNotificationSchedule() > -->
	<receiver
	    android:name=\"com.google.android.gms.gcm.GcmReceiver\"
	    android:exported=\"true\"
	    android:permission=\"com.google.android.c2dm.permission.SEND\" >
	    <intent-filter>
	        <action android:name=\"com.google.android.c2dm.intent.RECEIVE\" />
	        <category android:name=\"$\{applicationId}\" />
	    </intent-filter>
	</receiver>
	<!-- < Only if you're using GCM or localNotificationSchedule() > --><receiver android:name=\"com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher\" />
	<receiver android:name=\"com.dieam.reactnativepushnotification.modules.RNPushNotificationBootEventReceiver\">
	    <intent-filter>
	        <action android:name=\"android.intent.action.BOOT_COMPLETED\" />
	    </intent-filter>
	</receiver>
	<service android:name=\"com.dieam.reactnativepushnotification.modules.RNPushNotificationRegistrationService\"/><!-- < Only if you're using GCM or localNotificationSchedule() > -->
	<service
	    android:name=\"com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerServiceGcm\"
	    android:exported=\"false\" >
	    <intent-filter>
	        <action android:name=\"com.google.android.c2dm.intent.RECEIVE\" />
	    </intent-filter>
	</service>
	<!-- </ Only if you're using GCM or localNotificationSchedule() > --><!-- < Else > -->
	<service
	    android:name=\"com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService\"
	    android:exported=\"false\" >
	    <intent-filter>
	        <action android:name=\"com.google.firebase.MESSAGING_EVENT\" />
	    </intent-filter>
	</service>"

	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/app/src/main/AndroidManifest.xml AFTER line       android:theme=\"@style/AppTheme\"> SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/app/src/main/AndroidManifest.xml AFTER line             android:theme=\"@style/AppTheme\"> SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/app/src/main/AndroidManifest.xml AFTER line       android:theme=\"@style/AppTheme\">, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3 FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/app/src/main/AndroidManifest.xml AFTER line             android:theme=\"@style/AppTheme\", node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3 FAILED>" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('push_notifications_conf_editing_3')
	    node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_3"
	fi


	# touch ./android/app/src/res/values/colors.xml
	echo " "
	echo "LOG: --------------- attempting to create file ./android/app/src/main/res/values/colors.xml"
	if 	touch ./android/app/src/main/res/values/colors.xml ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File creation ./android/app/src/main/res/values/colors.xml SUCCEEDED"
	    succeededFileConfigurationEdits+=('touch ./android/app/src/main/res/values/colors.xml')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File creation ./android/app/src/main/res/values/colors.xml, touch ./android/app/src/res/values/colors.xml FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('touch ./android/app/src/main/res/values/colors.xml')
	    touch ./android/app/src/res/values/colors.xml 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE CREATION ./android/app/src/res/values/colors.xml"
	fi


	# node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_4
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/res/values/colors.xml"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- <resources>
	<color name=\"white\">#FFF</color>
</resources>"
	# touch ./android/app/src/res/values/colors.xml
	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_4 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/res/values/colors.xml SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_4')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/res/values/colors.xml, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_4 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('push_notifications_conf_editing_4')
	    node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_4 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_4" 
	fi


	# cp ~/Downloads/google-services.json ./android/app/
	echo " "
	echo "LOG: --------------- attempting to move ~/Downloads/google-services.json ./android/app/"
	if 	mv ~/Downloads/google-services.json ./android/app/ ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File moving ~/Downloads/google-services.json ./android/app/ SUCCEEDED"
	    succeededFileConfigurationEdits+=('mv ~/Downloads/google-services.json ./android/app/')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File moving ~/Downloads/google-services.json ./android/app/, mv ~/Downloads/google-services.json ./android/app/ FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('mv ~/Downloads/google-services.json ./android/app/')
	    mv ./google-services.json ./android/app/ 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE MOVEMENT mv ./google-services.json ./android/app/"
	fi




	# node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_5
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line apply plugin: 'com.google.gms.google-services'"	
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 	implementation project(':react-native-push-notification')"
	echo "LOG: --------------- 2 apply plugin: 'com.google.gms.google-services'"
	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_5 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/app/build.gradle AFTER line apply plugin: 'com.google.gms.google-services' SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_5')
	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_5 FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/app/build.gradle AFTER line apply plugin: 'com.google.gms.google-services' FAILED" >> errors_from_last_log.txt
		failedFileConfigurationEdits+=('push_notifications_conf_editing_5')
		node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_5 2>> errors_from_last_log.txt 
		echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_5" 
	fi


	# node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6
	echo " "
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line buildscript { \n \t repositories {"
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line dependencies {"	
	echo "LOG: --------------- attempting to edit ./android/build.gradle AFTER line allprojects { \n \t repositories {"	

	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 	google()  // Google's Maven repository"
	echo "LOG: --------------- 2 classpath 'com.google.gms:google-services:4.3.3'"
	echo "LOG: --------------- 3 	google()  // Google's Maven repository"	
	if 	node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/build.gradle AFTER line buildscript { \n \t repositories { SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/build.gradle AFTER line dependencies { SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 3 File ./android/build.gradle AFTER line allprojects { \n \t repositories { SUCCEEDED"
	    succeededFileConfigurationEdits+=('push_notifications_conf_editing_6')
	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/build.gradle AFTER line buildscript { \n \t repositories {, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6 FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6 FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 3 File ./android/build.gradle AFTER line allprojects { \n \t repositories {, node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6 FAILED" >> errors_from_last_log.txt
		failedFileConfigurationEdits+=('push_notifications_conf_editing_6')
		node ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6 2>> errors_from_last_log.txt 
		echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/push_notifications_conf_editing_6" 
	fi

}

# camera
function add_camera() {

	# npm install react-native-camera --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-camera"
	if 	npm install react-native-camera --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-camera installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-camera')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-camera installation, add_camera() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-camera')
	    npm install react-native-camera --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-camera --save"
	fi


	# node ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 app_name
	echo " "
	echo "LOG: --------------- attempting to ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line import java.util.List;"
	# echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ --------------- attempting to ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages();"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 import org.reactnative.camera.RNCameraPackage;"
	# echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 			packages.add(new RNCameraPackage());"	
	if 	node ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 $app_name ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line import java.util.List; SUCCEEDED"
	    # echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages(); SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_conf_editing_1')

	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line import java.util.Lxxxxxxxxxxxxxxx;, node ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 app_name FAILED" >> errors_from_last_log.txt
	    # echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/app/src/main/java/com/${app_name}/MainApplication.java AFTER line           List<ReactPackagxxxxxxxxxxxxxxx> packages = new PackageList(this).getPackages();,node ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 app_name FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_conf_editing_1')
	    node ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 $app_name 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_conf_editing_1 $app_name" 

	fi


	# node ~/resources/add_react_native_funcitionalities/camera_conf_editing_2
	echo " "
	echo "LOG: --------------- attempting to edit ./android/settings.gradle AFTER line include ':app'"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-camera/android')"
	if 	node ~/resources/add_react_native_funcitionalities/camera_conf_editing_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle AFTER line include ':app' SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_conf_editing_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/camera_conf_editing_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_conf_editing_2')
	    node ~/resources/add_react_native_funcitionalities/camera_conf_editing_2 2>> errors_from_last_log.txt
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_conf_editing_2" 
	fi


	# node ~/resources/add_react_native_funcitionalities/camera_conf_editing_3
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages();"	
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 1 implementation project(':react-native-camera')"
	echo "LOG: --------------- 2 			packages.add(new RNCameraPackage());"
	if 	node ~/resources/add_react_native_funcitionalities/camera_conf_editing_3 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 1 File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ 2 File ./android/app/build.gradle AFTER line           List<ReactPackage> packages = new PackageList(this).getPackages(); SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_conf_editing_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx 1 File ./android/app/build.gradle AFTER line dependencies { , node ~/resources/add_react_native_funcitionalities/camera_conf_editing_3FAILED" >> errors_from_last_log.txt
	    echo "LOG: xxxxxxxxxxxxxxx 2 File ./android/app/build.gradle AFTER line           List<ReactPackage> packages = new PackageListxxxxxxxxxxxxxxx).getPackages();, node ~/resources/add_react_native_funcitionalities/camera_conf_editing_3 FAILED"  >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_conf_editing_3')
	    node ~/resources/add_react_native_funcitionalities/camera_conf_editing_3 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_conf_editing_3"
	fi


	# node ~/resources/add_react_native_funcitionalities/camera_conf_editing_4
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line     <uses-permission android:name=\"android.permission.INTERNET\" />"
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- 	<!-- Required -->
	<uses-permission android:name=\"android.permission.CAMERA\" />

	<!-- Include this only if you are planning to use the camera roll -->
	<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />
	<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />

	<!-- Include this only if you are planning to use the microphone for video recording -->
	<uses-permission android:name=\"android.permission.RECORD_AUDIO\"/>"
	if 	node ~/resources/add_react_native_funcitionalities/camera_conf_editing_4 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER line     <uses-permission android:name=\"android.permission.INTERNET\" /> SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_conf_editing_4')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER line     <uses-permission android:name=\"android.pxxxxxxxxxxxxxxx.INTERNET\" />, node ~/resources/add_react_native_funcitionalities/camera_conf_editing_4 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_conf_editing_4')
	    node ~/resources/add_react_native_funcitionalities/camera_conf_editing_4 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_conf_editing_4"
	fi


	# node ~/resources/add_react_native_funcitionalities/camera_conf_editing_5
	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line         versionName \"1.0\""
	echo "LOG: ---------------	attempting to write"
	echo "LOG: --------------- missingDimensionStrategy 'react-native-camera', 'general'"
	if 	node ~/resources/add_react_native_funcitionalities/camera_conf_editing_5 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line         versionName \"1.0\" SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_conf_editing_5')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line         versionName \"1.0\", node ~/resources/add_react_native_funcitionalities/camera_conf_editing_5 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_conf_editing_5')
	    node ~/resources/add_react_native_funcitionalities/camera_conf_editing_5 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_conf_editing_5"
	fi


}





function add_progress_bars() {
	# npm install react-native-progress --save
	echo " "
	echo "LOG: --------------- attempting to install react-native-progress"
	if 	npm install react-native-progress --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-progress installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-progress')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-progress installation, add_progress_bars() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-progress')
	    npm install react-native-progress --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-progress --save"
	fi


	# npm i --save react-native-circular-progress react-native-svg
	echo " "
	echo "LOG: --------------- attempting to install react-native-circular-progress and react-native-svg"
	if 	npm i --save react-native-circular-progress react-native-svg ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-circular-progress and react-native-svg installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-circular-progress' 'react-native-svg')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-circular-progress and react-native-svg installation, add_progress_bars() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-circular-progress' 'react-native-svg')
	    npm i --save react-native-circular-progress react-native-svg 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm i --save react-native-circular-progress react-native-svg"
	fi


}


# geolocation
function add_geolocation() {
	
	echo " "
	echo "LOG: --------------- attempting to install geolocation"
	if 	npm install @react-native-community/geolocation --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/geolocation installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/geolocation')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/geolocation installation, add_geolocation() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/geolocation')
	    npm install @react-native-community/geolocation --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-native-community/geolocation --save"
	fi

	echo " "
	echo "LOG: --------------- attempting to link geolocation"
	if 	npx react-native link @react-native-community/geolocation ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ linking geolocation SUCCEEDED"
	    succeededFunctionalities+=('linking geolocation')
	else
	    echo "LOG: xxxxxxxxxxxxxxx linking geolocation FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('linking geolocation')
	    npx react-native link @react-native-community/geolocation 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npx react-native link @react-native-community/geolocation"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- <uses-permission android:name='android.permission.ACCESS_FINE_LOCATION' />"
	if 	node ~/resources/add_react_native_funcitionalities/geolocation_conf ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' /> SUCCEEDED"
	    succeededFileConfigurationEdits+=('geolocation_conf')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />, node ~/resources/add_react_native_funcitionalities/geolocation_conf FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('geolocation_conf')
	    node ~/resources/add_react_native_funcitionalities/geolocation_conf 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/geolocation_conf"
	fi

}

function add_react_native_document_picker () {
	echo " "
	echo "LOG: --------------- attempting to install react-native-document-picker"
	if 	npm install react-native-document-picker --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-document-picker installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-document-picker')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-document-picker installation FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-document-picker')
	    npm install react-native-document-picker --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-document-picker --save"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />"
	if 	node ~/resources/add_react_native_funcitionalities/document_picker ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' /> SUCCEEDED"
	    succeededFileConfigurationEdits+=('document_picker')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />, node ~/resources/add_react_native_funcitionalities/file_system_conf_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('document_picker')
	    node ~/resources/add_react_native_funcitionalities/document_picker 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/document_picker"
	fi
}

function add_camera_roll () {
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/cameraroll"
	if 	npm install @react-native-community/cameraroll --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/cameraroll installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/cameraroll')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/cameraroll installation FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/cameraroll')
	    npm install @react-native-community/cameraroll --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install @react-native-community/cameraroll --save"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />"
	echo "LOG: --------------- 	<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
	if 	node ~/resources/add_react_native_funcitionalities/camera_roll_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' /> SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_roll_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />, node ~/resources/add_react_native_funcitionalities/camera_roll_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_roll_1')
	    node ~/resources/add_react_native_funcitionalities/camera_roll_1 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_roll_1"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/settings.gradle AFTER line include ':app'"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	include ':@react-native-community_cameraroll'"
	echo "LOG: --------------- 	project(':@react-native-community_cameraroll').projectDir = new File(rootProject.projectDir, 	'../node_modules/@react-native-community/cameraroll/android')"
	if 	node ~/resources/add_react_native_funcitionalities/camera_roll_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle AFTER line include ':app' SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_roll_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/camera_roll_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_roll_2')
	    node ~/resources/add_react_native_funcitionalities/camera_roll_2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_roll_2"
	fi	

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	compile project(':@react-native-community_cameraroll')"
	if 	node ~/resources/add_react_native_funcitionalities/camera_roll_3 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
	    succeededFileConfigurationEdits+=('camera_roll_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/camera_roll_3 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('camera_roll_3')
	    node ~/resources/add_react_native_funcitionalities/camera_roll_3 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/camera_roll_3"
	fi	

}


function add_fs_file_system () {
	echo " "
	echo "LOG: --------------- attempting to install react-native-fs"
	if 	npm install react-native-fs --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-fs installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-fs')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-fs installation FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-fs')
	    npm install react-native-fs --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install react-native-fs --save"
	fi

	echo " "
	echo "LOG: --------------- attempting to link react-native-fs"
	if 	npx react-native link react-native-fs ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ linking react-native-fs SUCCEEDED"
	    succeededFunctionalities+=('linking react-native-fs')
	else
	    echo "LOG: xxxxxxxxxxxxxxx linking react-native-fs FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('linking react-native-fs')
	    npx react-native link react-native-fs 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npx react-native link react-native-fs"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/settings.gradle AFTER line include ':app'"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- include ':react-native-fs'"
	echo "LOG: --------------- project(':react-native-fs').projectDir = new File(settingsDir, '../node_modules/react-native-fs/android')"
	if 	node ~/resources/add_react_native_funcitionalities/file_system_conf_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle AFTER line include ':app' SUCCEEDED"
	    succeededFileConfigurationEdits+=('file_system_conf_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle AFTER line include ':app', node ~/resources/add_react_native_funcitionalities/file_system_conf_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('file_system_conf_1')
	    node ~/resources/add_react_native_funcitionalities/file_system_conf_1 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/file_system_conf_1"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	compile project(':react-native-fs')"
	if 	node ~/resources/add_react_native_funcitionalities/file_system_conf_2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line line dependencies { SUCCEEDED"
	    succeededFileConfigurationEdits+=('file_system_conf_2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/file_system_conf_2 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('file_system_conf_2')
	    node ~/resources/add_react_native_funcitionalities/file_system_conf_2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/file_system_conf_2"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	echo "LOG: --------------- attempting to write"
	echo "LOG: --------------- 	<uses-permission android:name=\"android.permission.READ_EXTERNAL_STORAGE\" />"
	echo "LOG: --------------- 	<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
	if 	node ~/resources/add_react_native_funcitionalities/file_system_conf_3 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' /> SUCCEEDED"
	    succeededFileConfigurationEdits+=('file_system_conf_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx File ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />, node ~/resources/add_react_native_funcitionalities/file_system_conf_1 FAILED" >> errors_from_last_log.txt
	    failedFileConfigurationEdits+=('file_system_conf_3')
	    node ~/resources/add_react_native_funcitionalities/file_system_conf_3 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/file_system_conf_3"
	fi
}

# DEPRECATED IN FAVOR OF document picker
# function add_image_picker() {
# 	echo " "
# 	echo "LOG: --------------- attempting to install react-native-swipe-gestures"
# 	if 	npm install --save react-native-image-picker ; then
# 	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-image-picker installation SUCCEEDED"
# 	    succeededFunctionalities+=('react-native-image-picker')
# 	else
# 	    echo "LOG: xxxxxxxxxxxxxxx react-native-image-picker installation, add_image_picker() FAILED" >> errors_from_last_log.txt
# 	    failedFunctionalities+=('react-native-image-picker')
# 	    npm install --save react-native-image-picker 2>> errors_from_last_log.txt 
# 	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-image-picker"
# 	fi

# 	echo " "
# 	echo "LOG: --------------- attempting to link npx react-native link react-native-image-picker"
# 	if 	npx react-native link react-native-image-picker ; then
# 	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-fs linking SUCCEEDED"
# 	    succeededFunctionalities+=('react-native-fs linking')
# 	else
# 	    echo "LOG: xxxxxxxxxxxxxxx react-native-fs linking FAILED" >> errors_from_last_log.txt
# 	    failedFunctionalities+=('react-native-fs linking')
# 	    npx react-native link react-native-image-picker 2>> errors_from_last_log.txt 
# 	    echo "LOG: XxXxXxXxXxXxXx RE-RUN react-native link react-native-image-picker"
# 	fi
# }

function add_swipes_usage() {
	echo " "
	echo "LOG: --------------- attempting to install react-native-swipe-gestures"
	if 	npm install --save react-native-swipe-gestures ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-swipe-gestures installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-swipe-gestures')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-swipe-gestures installation, add_swipes_usage() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-swipe-gestures')
	    npm install --save react-native-swipe-gestures 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-swipe-gestures"
	fi



}

function add_google_sign_in() {
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/google-signin"
	if 	npm install --save @react-native-community/google-signin ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/google-signin installation SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/google-signin')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/google-signin installation, add_@react-native-community/google-signin() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/google-signin')
	    npm install --save @react-native-community/google-signin 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save @react-native-community/google-signin"
	fi


	echo " "
	echo "LOG: --------------- attempting to link @react-native-community/google-signin"
	if 	npx react-native link @react-native-community/google-signin ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ @react-native-community/google-signin linking SUCCEEDED"
	    succeededFunctionalities+=('@react-native-community/google-signin linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx @react-native-community/google-signin linking FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('@react-native-community/google-signin linking')
	    npx react-native link @react-native-community/google-signin 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN react-native link @react-native-community/google-signin"
	fi
}

function add_stripe() {
	echo " "
	echo "LOG: --------------- attempting to install tipsi-stripe"
	if 	npm install --save tipsi-stripe ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ tipsi-stripe installation SUCCEEDED"
	    succeededFunctionalities+=('tipsi-stripe')
	else
	    echo "LOG: xxxxxxxxxxxxxxx tipsi-stripe installation, add_tipsi-stripe() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('tipsi-stripe')
	    npm install --save tipsi-stripe 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save tipsi-stripe"
	fi

	echo " "
	echo "LOG: --------------- attempting to link tipsi-stripe"
	if 	npx react-native link tipsi-stripe ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ tipsi-stripe linking SUCCEEDED"
	    succeededFunctionalities+=('tipsi-stripe linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx tipsi-stripe linking FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('tipsi-stripe linking')
	    npx react-native link tipsi-stripe 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN react-native link tipsi-stripe"
	fi


# COMMENTED OUT IN FAVOR OF LINKING
	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/app/build.gradle AFTER line dependencies {"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- 	compile project(':tipsi-stripe')"
	# if 	node ~/resources/add_react_native_funcitionalities/stripe_conf1 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/app/build.gradle AFTER line dependencies { SUCCEEDED"
	#     succeededFileConfigurationEdits+=('stripe_conf1')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx File ./android/app/build.gradle AFTER line dependencies {, node ~/resources/add_react_native_funcitionalities/stripe_conf1 FAILED" >> errors_from_last_log.txt
	#     failedFileConfigurationEdits+=('stripe_conf1')
	#     node ~/resources/add_react_native_funcitionalities/stripe_conf1 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/stripe_conf1"
	# fi


	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/settings.gradle"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- 	include ':tipsi-stripe'"
	# echo "LOG: --------------- 	project(':tipsi-stripe').projectDir = new File(rootProject.projectDir, '../node_modules/tipsi-stripe/android')"
	# if 	node ~/resources/add_react_native_funcitionalities/stripe_conf2 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/settings.gradle SUCCEEDED"
	#     succeededFileConfigurationEdits+=('stripe_conf2')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx File ./android/settings.gradle, node ~/resources/add_react_native_funcitionalities/stripe_conf2 FAILED" >> errors_from_last_log.txt
	#     failedFileConfigurationEdits+=('stripe_conf2')
	#     node ~/resources/add_react_native_funcitionalities/stripe_conf2 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/stripe_conf2"
	# fi


	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/build.gradle after line     repositories {"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- 		maven { url \"https://jitpack.io\" }"
	# if 	node ~/resources/add_react_native_funcitionalities/stripe_conf3 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File ./android/build.gradle SUCCEEDED"
	#     succeededFileConfigurationEdits+=('stripe_conf3')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx File ./android/build.gradle, node ~/resources/add_react_native_funcitionalities/stripe_conf3 FAILED" >> errors_from_last_log.txt
	#     failedFileConfigurationEdits+=('stripe_conf3')
	#     node ~/resources/add_react_native_funcitionalities/stripe_conf3 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/stripe_conf3"
	# fi

	# echo " "
	# echo "LOG: --------------- attempting to edit MainApplication.java"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- import com.gettipsi.stripe.StripeReactPackage;"
	# if 	node ~/resources/add_react_native_funcitionalities/stripe_conf4 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ File MainApplication.java SUCCEEDED"
	#     succeededFileConfigurationEdits+=('stripe_conf4')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx File MainApplication.java, node ~/resources/add_react_native_funcitionalities/stripe_conf4 FAILED" >> errors_from_last_log.txt
	#     failedFileConfigurationEdits+=('stripe_conf4')
	#     node ~/resources/add_react_native_funcitionalities/stripe_conf4 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/stripe_conf4"
	# fi


}

function add_paypal() {
	echo " "
	echo "LOG: --------------- attempting to install react-native-paypal"
	if 	npm install --save react-native-paypal ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-paypal installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-paypal')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-paypal installation, add_react-native-paypal() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-paypal')
	    npm install --save react-native-paypal 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-paypal"
	fi


	echo " "
	echo "LOG: --------------- attempting to link react-native-paypal"
	if 	npx react-native link react-native-paypal ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-paypal linking SUCCEEDED"
	    succeededFunctionalities+=('react-native-paypal linking')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-paypal linking FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-paypal linking')
	    npx react-native link react-native-paypal 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN react-native link react-native-paypal"
	fi
} 


function add_facebook_sign_in_and_share() {
	echo " "
	echo "LOG: --------------- attempting to install react-native-fbsdk"
	if 	npm install --save react-native-fbsdk ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-fs installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-fs')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-fs installation, add_react-native-fbsdk() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-fs')
	    npm install --save react-native-fbsdk 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-fbsdk"
	fi

# COMMENTING OUT SINCE WE NEED TO WRITE MANUALLY
	# echo " "
	# echo "LOG: --------------- attempting to link react-native-fbsdk"
	# if 	npx react-native link react-native-fbsdk ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-fs linking SUCCEEDED"
	#     succeededFunctionalities+=('react-native-fs linking')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx react-native-fs linking FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('react-native-fs linking')
	#     npx react-native link react-native-fbsdk 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx RE-RUN react-native link react-native-fbsdk"
	# fi


	echo " "
	echo "LOG: --------------- attempting to edit ./android/build.gradle "
	if 	node ~/resources/add_react_native_funcitionalities/facebookSDK_conf1 $app_name ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ editing ./android/build.gradle SUCCEEDED"
	    succeededFunctionalities+=('facebookSDK_conf1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx editing ./android/build.gradle FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('facebookSDK_conf1')
	    node ~/resources/add_react_native_funcitionalities/facebookSDK_conf1 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/facebookSDK_conf1"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/build.gradle "
	if 	node ~/resources/add_react_native_funcitionalities/facebookSDK_conf2 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ editing ./android/app/build.gradle SUCCEEDED"
	    succeededFunctionalities+=('facebookSDK_conf2')
	else
	    echo "LOG: xxxxxxxxxxxxxxx editing ./android/app/build.gradle FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('facebookSDK_conf2')
	    node ~/resources/add_react_native_funcitionalities/facebookSDK_conf2 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/facebookSDK_conf2"
	fi

	echo "LOG: --------------- attempting to edit  "
	if 	node ~/resources/add_react_native_funcitionalities/facebookSDK_conf3 $facebookAppID ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ editing ./android/app/src/main/res/values/strings.xml SUCCEEDED"
	    succeededFunctionalities+=('facebookSDK_conf3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx editing ./android/app/src/main/res/values/strings.xml FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('facebookSDK_conf3')
	    node ~/resources/add_react_native_funcitionalities/facebookSDK_conf3 $facebookAppID  2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/facebookSDK_conf3"
	fi


	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml "
	if 	node ~/resources/add_react_native_funcitionalities/facebookSDK_conf4 $facebookAppID ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ editing ./android/app/src/main/AndroidManifest.xml SUCCEEDED"
	    succeededFunctionalities+=('facebookSDK_conf4')
	else
	    echo "LOG: xxxxxxxxxxxxxxx editing ./android/app/src/main/AndroidManifest.xml FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('facebookSDK_conf4')
	    node ~/resources/add_react_native_funcitionalities/facebookSDK_conf4 $facebookAppID  2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/facebookSDK_conf4"
	fi

	echo " "
	echo "LOG: --------------- attempting to edit ./android/app/src/main/java/com/${app_name}/MainApplication.java "
	if 	node ~/resources/add_react_native_funcitionalities/facebookSDK_conf5 $app_name ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ editing ./android/app/src/main/java/com/${app_name}/MainApplication.java SUCCEEDED"
	    succeededFunctionalities+=('facebookSDK_conf5')
	else
	    echo "LOG: xxxxxxxxxxxxxxx editing ./android/app/src/main/java/com/${app_name}/MainApplication.java FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('facebookSDK_conf5')
	    node ~/resources/add_react_native_funcitionalities/facebookSDK_conf5 $app_name  2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/facebookSDK_conf5"
	fi

}

# webRTC
function add_webRTC() {
	echo " "
	echo "LOG: --------------- attempting to install react-native-webrtc"
	if 	npm install --save react-native-webrtc ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ react-native-webrtc installation SUCCEEDED"
	    succeededFunctionalities+=('react-native-webrtc')
	else
	    echo "LOG: xxxxxxxxxxxxxxx react-native-webrtc installation, add_webRTC() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-webrtc')
	    npm install --save react-native-webrtc 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save react-native-webrtc"
	fi
}
	
# socketio
function add_socketIO() {
	echo " "
	echo "LOG: --------------- attempting to install socket.io-client"
	if 	npm install --save socket.io-client ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ socket.io-client installation SUCCEEDED"
	    succeededFunctionalities+=('socket.io-client')
	else
	    echo "LOG: xxxxxxxxxxxxxxx socket.io-client installation, add_socketIO() FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('socket.io-client')
	    npm install --save socket.io-client 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx RE-RUN npm install --save socket.io-client"
	fi
}

# background task
function add_background_task() {
	echo

}


function set_multidex(){

	echo " "
	echo "LOG: --------------- attempting to configure multidex script 1"
	if 	node ~/resources/add_react_native_funcitionalities/configure_multidex_1 ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting multidex_1 SUCCEEDED"
	    succeededFunctionalities+=('configure_multidex_1')
	else
	    echo "LOG: xxxxxxxxxxxxxxx setting multidex_1 FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('configure_multidex_1')
	    node ~/resources/add_react_native_funcitionalities/configure_multidex_1 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_multidex_1"
	fi

# COMMENTING OUT SINCE I COULD NOT SEE IT AGAIN, CHECK https://stackoverflow.com/questions/44140496/how-do-i-enable-multidex-for-react-native
	# echo " "
	# echo "LOG: --------------- attempting to configure multidex script 2"
	# if 	node ~/resources/add_react_native_funcitionalities/configure_multidex_2 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting multidex_2 SUCCEEDED"
	#     succeededFunctionalities+=('configure_multidex_2')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx setting multidex_2 FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('configure_multidex_2')
	#     node ~/resources/add_react_native_funcitionalities/configure_multidex_2 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_multidex_2"
	# fi

	# echo " "
	echo "LOG: --------------- attempting to configure multidex script 3"
	if 	node ~/resources/add_react_native_funcitionalities/configure_multidex_3 $app_name ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting multidex_3 SUCCEEDED"
	    succeededFunctionalities+=('configure_multidex_3')
	else
	    echo "LOG: xxxxxxxxxxxxxxx setting multidex_3 FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('configure_multidex_3')
	    node ~/resources/add_react_native_funcitionalities/configure_multidex_3 $app_name 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_multidex_3"
	fi


}

function fix_insufficient_memory() {
# FOR INSUFFICIENT MEMORY USE BELOW
	# ${PWD##*/}
	echo " "
	if 	echo adb shell "pm uninstall com.${PWD##*/}" ; then  # # echo adb -d shell "pm uninstall com.${PWD##*/}" OR echo adb emulator-5554 shell "pm uninstall com.${PWD##*/}" ; then
	    echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ UNINSTALLING OLD BUILD SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	else
	    echo "LOG xxxxxxxxxxxxxxx UNINSTALLING OLD BUILD FAILED xxxxxxxxxxxxxxx"
	fi


	echo " "
	if 	adb shell "rm -rf /data/app/com.${PWD##*/}-*" ; then
	    echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ DELETING OLD BUILD SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	else
	    echo "LOG xxxxxxxxxxxxxxx DELETING OLD BUILD FAILED xxxxxxxxxxxxxxx"
	fi

	# wipe data from avd and run	
	echo " "
	# if 	emulatorUsed="emulator -list-avds" ; emulator -avd $emulatorUsed -wipe-data ; then
	if  emulator -avd Nexus_5X_Edited_1_API_29 -wipe-data ; then
	    echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ WIPE EMULATOR DATA SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	else
	    echo "LOG xxxxxxxxxxxxxxx WIPE EMULATOR DATA FAILED xxxxxxxxxxxxxxx"
	fi

	# react native
	echo " "
	if 	watchman watch-del-all ; then
	    echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ DELETING WATCHMAN FILES SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	else
	    echo "LOG xxxxxxxxxxxxxxx DELETING WATCHMAN FILES FAILED xxxxxxxxxxxxxxx"
	fi

	
	echo " "
	if 	rm -r android/build ; rm -r android/app/src/release/res ; rm -r android/app/build/intermediates ; rm -rf $TMPDIR/react-* ; then
	    echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ DELETING OLD BUILD RELATED FILES AND TMP FILES SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	else
	    echo "LOG xxxxxxxxxxxxxxx DELETING OLD BUILD RELATED FILES AND TMP FILES FAILED xxxxxxxxxxxxxxx"
	fi

}

function add_netinfo() {
	echo " "
	echo "LOG: --------------- attempting to install @react-native-community/netinfo"
	if 	npm install --save @react-native-community/netinfo ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ installing @react-native-community/netinfo SUCCEEDED"
	    succeededFunctionalities+=('install_netinfo')
	else
	    echo "LOG: xxxxxxxxxxxxxxx attempting to install netinfo FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('install_netinfo')
	    npm install --save @react-native-community/netinfo 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx try again npm install --save @react-native-community/netinfo"
	fi

#  COMMENTED OUT SINCE ITS NOT NEEDED ANYMORE, ITS PERMISSION IS BUILT IN NOW
	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- <uses-permission android:name='android.permission.ACCESS_FINE_LOCATION' />"	echo "LOG: --------------- attempting to configure netinfo script 1"
	# if 	node ~/resources/add_react_native_funcitionalities/configure_netinfo_1 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting netinfo_1 SUCCEEDED"
	#     succeededFunctionalities+=('configure_netinfo_1')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx setting netinfo_1 FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('configure_netinfo_1')
	#     node ~/resources/add_react_native_funcitionalities/configure_netinfo_1 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_netinfo_1"
	# fi


	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- <uses-permission android:name='android.permission.ACCESS_FINE_LOCATION' />"	echo "LOG: --------------- attempting to configure netinfo script 2"
	# if 	node ~/resources/add_react_native_funcitionalities/configure_netinfo_2 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting netinfo_2 SUCCEEDED"
	#     succeededFunctionalities+=('configure_netinfo_2')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx setting netinfo_2 FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('configure_netinfo_2')
	#     node ~/resources/add_react_native_funcitionalities/configure_netinfo_2 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_netinfo_2"
	# fi

	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- <uses-permission android:name='android.permission.ACCESS_FINE_LOCATION' />"
	# echo "LOG: --------------- attempting to configure netinfo script 3"
	# if 	node ~/resources/add_react_native_funcitionalities/configure_netinfo_3 ; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting netinfo_3 SUCCEEDED"
	#     succeededFunctionalities+=('configure_netinfo_3')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx setting netinfo_3 FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('configure_netinfo_3')
	#     node ~/resources/add_react_native_funcitionalities/configure_netinfo_3 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_netinfo_3"
	# fi


	# echo " "
	# echo "LOG: --------------- attempting to edit ./android/app/src/main/AndroidManifest.xml AFTER line <uses-permission android:name='android.permission.INTERNET' />"
	# echo "LOG: --------------- attempting to write"
	# echo "LOG: --------------- <uses-permission android:name='android.permission.ACCESS_FINE_LOCATION' />"	echo "LOG: --------------- attempting to configure netinfo script 4"
	# if 	node ~/resources/add_react_native_funcitionalities/configure_netinfo_4 $app_name; then
	#     echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ setting netinfo_4 SUCCEEDED"
	#     succeededFunctionalities+=('configure_netinfo_4')
	# else
	#     echo "LOG: xxxxxxxxxxxxxxx setting netinfo_4 FAILED" >> errors_from_last_log.txt
	#     failedFunctionalities+=('configure_netinfo_4')
	#     node ~/resources/add_react_native_funcitionalities/configure_netinfo_4 $app_name 2>> errors_from_last_log.txt 
	#     echo "LOG: XxXxXxXxXxXxXx CHECK FILE ~/resources/add_react_native_funcitionalities/configure_netinfo_4"
	# fi

}

function add_keyboard_aware_scrollview() {

	echo " "
	echo "LOG: --------------- attempting to install react-native-keyboard-aware-scroll-view"
	if 	npm i react-native-keyboard-aware-scroll-view --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ installing react-native-keyboard-aware-scroll-view SUCCEEDED"
	    succeededFunctionalities+=('react-native-keyboard-aware-scroll-view')
	else
	    echo "LOG: xxxxxxxxxxxxxxx attempting to install netinfo FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('react-native-keyboard-aware-scroll-view')
	    npm i react-native-keyboard-aware-scroll-view --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx try again npm i react-native-keyboard-aware-scroll-view --save"
	fi

} 

function set_minsdkversion() {
	
	echo " "
	echo "LOG: --------------- attempting to Set minSdkVersion to 21"
	if 	node ~/resources/add_react_native_funcitionalities/set_minsdkversion ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ Set minSdkVersion to 21 SUCCEEDED"
	    succeededFunctionalities+=('Set minSdkVersion to 21')
	else
	    echo "LOG: xxxxxxxxxxxxxxx attempting to Set minSdkVersion to 21 FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('Set minSdkVersion to 21')
	    set_minsdkversion 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx try again Set minSdkVersion to 21"
	fi

}

function add_contacts_dealing() {
	# CONTACTS / PHONEBOOK
	echo " "
	echo "LOG: --------------- attempting to install react-native-contacts"
	if 	npm install react-native-contacts --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ installing react-native-contacts SUCCEEDED"
	    succeededFunctionalities+=('install react-native-contacts')
	else
	    echo "LOG: xxxxxxxxxxxxxxx attempting to install react-native-contacts FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('install react-native-contacts')
	    npm install react-native-contacts --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx try again npm install react-native-contacts --save"
	fi

}


function install_events() {
	# CONTACTS / PHONEBOOK
	echo " "
	echo "LOG: --------------- attempting to install events"
	if 	npm install events --save ; then
	    echo "LOG: ✔✔✔✔✔✔✔✔✔✔✔✔ installing events SUCCEEDED"
	    succeededFunctionalities+=('install events')
	else
	    echo "LOG: xxxxxxxxxxxxxxx attempting to install events FAILED" >> errors_from_last_log.txt
	    failedFunctionalities+=('install events')
	    npm install events --save 2>> errors_from_last_log.txt 
	    echo "LOG: XxXxXxXxXxXxXx try again npm install events --save"
	fi

}


# done

function add_functionalities() {

# 	echo "--------------- RUNNING  add_dropdown function ---------------"
# 	add_dropdown

# 	echo "--------------- RUNNING  add_proptypes function ---------------"
# 	add_proptypes

# # 	echo "LOG --------------- RUNNING  add_firebase function ---------------"
# # 	add_firebase
		
# 	echo "LOG --------------- RUNNING  add_redux function ---------------"
# 	add_redux
	
# 	echo "LOG --------------- RUNNING  add_axios function ---------------"
# 	add_axios
		
	echo "LOG --------------- RUNNING  add_navigations function ---------------"
	add_navigations
	
# # # # # 	echo "LOG --------------- RUNNING  add_svg function ---------------"
# # # # # 	add_svg

 
	# echo "LOG ---------------  RUNNING  add_native_elements_like_icons function ---------------"
	# add_native_elements_like_icons

# # # # 	# echo "LOG ---------------  RUNNING  install_events function ---------------"	
# # # # 	# install_events

# # # # AVOID
# # # 	# echo "LOG ---------------  RUNNING  add_netinfo function ---------------"
# # # 	# add_netinfo

# 	echo "LOG ---------------  RUNNING  add_keyboard_aware_scrollview function ---------------"
# 	add_keyboard_aware_scrollview

# # # # AVOID
# 	echo "LOG ---------------  RUNNING  add_swipes_usage function ---------------"	
# 	add_swipes_usage

# # # # # 	# echo "LOG --------------- RUNNING  add_chart function ---------------"
# # # # # 	# add_chart
	
# # # # # 	# echo "LOG --------------- RUNNING  add_progressbar_android function ---------------"
# # # # # 	# add_progressbar_android	
	
# # # # # 	# echo "LOG ---------------  RUNNING  add_progress_bars function ---------------"
# # # # # 	# add_progress_bars

# # # # # # FILE SYSTEM
# # # # # # file system [file create, upload, delete, read content]
# # # # # 	# echo "LOG ---------------  RUNNING  add_fs_file_system function ---------------"	
# # # # # 	# add_fs_file_system
# # # # # # file system viewer
# 	echo "LOG ---------------  RUNNING  add_asyncstorage function ---------------"
# 	add_asyncstorage

# 	echo "LOG ---------------  RUNNING  add_fs_file_system function ---------------"	
# 	add_react_native_document_picker

	
# # # # 	# echo "LOG ---------------  RUNNING  add_react_native_maps function ---------------"
# # # # 	# add_react_native_maps

# # # # 	# echo "LOG ---------------  RUNNING  add_push_notification function ---------------"
# # # # 	# add_push_notification

# # # # # camera
# # # # # use camera
# # # 	# echo "LOG ---------------  RUNNING  add_camera function ---------------"
# # # 	# add_camera
# # # # # deal with photos [save, getAlbums, getPhotos, deletePhotos]
# # # # 	# echo "LOG ---------------  RUNNING  add_camera_roll function ---------------"
# # # # 	# add_camera_roll


# # # # 	# echo "LOG ---------------  RUNNING  add_webRTC function ---------------"
# # # # 	# add_webRTC
	
# # # # 	# echo "LOG ---------------  RUNNING  add_socketIO function ---------------"
# # # # 	# add_socketIO
	
# # # # 	# echo "LOG ---------------  RUNNING  add_progress_bars function ---------------"
# # # # 	# add_progress_bars
		
# # # # 	# echo "LOG ---------------  RUNNING  add_background_task function ---------------"
# # # # 	# add_background_task

# # # # 	# echo "LOG ---------------  RUNNING  add_contacts_dealing function ---------------"
# # # # 	# add_contacts_dealing

# 	echo "LOG ---------------  RUNNING  add_google_sign_in function ---------------"
# 	add_google_sign_in

# 	echo "LOG ---------------  RUNNING  add_paypal function ---------------"
# 	add_paypal

	# echo "LOG ---------------  RUNNING  add_facebook_sign_in_and_share function ---------------"
	# add_facebook_sign_in_and_share

# # # ALWAYS INCLUDE FIREBASE WITH STRIPE
# 	echo "LOG ---------------  RUNNING  add_stripe function ---------------"
# 	add_stripe
# 	echo "LOG --------------- RUNNING  add_firebase function ---------------"
# 	add_firebase



# 	echo "LOG ---------------  RUNNING  set_multidex function ---------------"
# 	set_multidex

# # 	# echo "LOG ---------------  RUNNING  fix_insufficient_memory function ---------------"
# # 	# fix_insufficient_memory


# # ALWAYS ENABLE IT
	echo "LOG ------------- running set_minsdkversion -------------"
	set_minsdkversion


	
# run the JS server
	# echo " "
	# echo "LOG ------------- running the JS server in new tab -------------"
	# gnome-terminal --tab
	# npm start

# switch to previos tab
	# xdotool key Control+Page_Up





# FOR GIVING +X TO android/app/build/outputs/apk/debug/app-debug.apk
	# echo " "
	# if 	sudo chmod +x android/app/build/outputs/apk/debug/app-debug.apk ; then
	#     echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ ADDING +x BIT TO android/app/build/outputs/apk/debug/app-debug.apk SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	# else
	#     echo "LOG xxxxxxxxxxxxxxx ADDING +x BIT TO android/app/build/outputs/apk/debug/app-debug.apk FAILED xxxxxxxxxxxxxxx"
	# fi

# running build
	# echo " "
	# if 	npx react-native run-android ; then
	#     echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ BUILD SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	# else
	#     echo "LOG xxxxxxxxxxxxxxx BUILD FAILED xxxxxxxxxxxxxxx"
	# fi

	
	# npm start -- --reset-cache
	# echo " "
	# if 	adb shell "rm -rf /data/app/com.${PWD##*/}-*" ; then
	#     echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ DELETING OLD BUILD SUCCEEDED ✔✔✔✔✔✔✔✔✔✔✔✔"
	# else
	#     echo "LOG xxxxxxxxxxxxxxx DELETING OLD BUILD FAILED xxxxxxxxxxxxxxx"
	# fi
	

# summary															
	echo " "
	echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ INSTALLED FUNCTIONALITIES ARE BELOW ✔✔✔✔✔✔✔✔✔✔✔✔"
	echo $succeededFunctionalities 

	echo " "
	echo "LOG ✔✔✔✔✔✔✔✔✔✔✔✔ CONFIGURATION FILES EDITED ARE BELOW ✔✔✔✔✔✔✔✔✔✔✔✔"
	echo $succeededFileConfigurationEdits

	echo " "
	echo "LOG xxxxxxxxxxxxxxx FAILED FUNCTIONALITIES ARE BELOW xxxxxxxxxxxxxxx "
	echo $failedFunctionalities 


	echo " "
	echo "LOG xxxxxxxxxxxxxxx FAILED CONFIGURATION FILES EDITED ARE BELOW xxxxxxxxxxxxxxx "
	echo $failedFileConfigurationEdits

}

add_functionalities