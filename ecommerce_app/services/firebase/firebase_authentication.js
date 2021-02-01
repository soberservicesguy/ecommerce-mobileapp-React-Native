componentDidMount(){
// get request on firebase
	axios.get('https://rest-api-react-native.firebaseio.com/particular_user.json', 
			{
		    params: {
		      ID: 12345
		    }
		  }
	  )
	  .then(function (response) {
	    console.log(response.data);
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
	  .then(function () {
	    // always executed
	  });

// put request on firebase
	axios.put('https://rest-api-react-native.firebaseio.com/particular_user3/friend.json', 
			{
				panda:{
			    firstName: 'Frede',
			    lastName: 'Flintstone'
			  }
			}
	  )
	  .then(function (response) {
	    console.log(response.data);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });

// firebase createuser
	const config = {
	// initialize firebase
		apiKey: "AIzaSyC5c5_Hz_5zpC6kzLDoMtYY8CPvrSEQ3wY",
	  authDomain: "rest-api-react-native.firebaseapp.com",
	  databaseURL: "https://rest-api-react-native.firebaseio.com",
	  projectId: "rest-api-react-native",
	  storageBucket: "rest-api-react-native.appspot.com",
	  messagingSenderId: "624389119413",
	  appId: "1:624389119413:web:50b4fc98505ac9c696cdfc"

	};

	if (!firebase.apps.length) {
	   firebase.initializeApp(config);
	}
	// firebase.initializeApp(config);

	auth = firebase.auth();

	auth.createUserWithEmailAndPassword('al_arsalan@hotmail.com', 'pandaaaaa')
	.catch(e => console.log(e.message));

	auth.onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			// console.log(firebaseUser); // means its logged
			console.log('logged')
		} else {
			console.log('not logged in')
		}
	});

	auth.signInWithEmailAndPassword('al_arsalan@hotmail.com', 'pandaaaaa')
	.catch( e => console.log(e.message));

}








// IMPLEMENTATION
// app.js

const config = {
// initialize firebase
	apiKey: "AIzaSyC5c5_Hz_5zpC6kzLDoMtYY8CPvrSEQ3wY",
  authDomain: "rest-api-react-native.firebaseapp.com",
  databaseURL: "https://rest-api-react-native.firebaseio.com",
  projectId: "rest-api-react-native",
  storageBucket: "rest-api-react-native.appspot.com",
  messagingSenderId: "624389119413",
  appId: "1:624389119413:web:50b4fc98505ac9c696cdfc"

};

firebase.initializeApp(config);

//  signing in
const config = {
// initialize firebase
	apiKey: ,
	authDomain: ,
	databaseURL: ,
	storageBucket: ,
};

firebase.initializeApp(config);

auth = firebase.auth();
const signInPromise = auth.signInWithEmailAndPassword(email, pass); // supply email, password
signInPromise.catch( e => console.log(e.message));
// OR
auth.signInWithEmailAndPassword(email, pass)
.catch( e => console.log(e.message));

// create user
const config = {
// initialize firebase
	apiKey: ,
	authDomain: ,
	databaseURL: ,
	storageBucket: ,
};

firebase.initializeApp(config);

auth = firebase.auth();
const createUserPromise = auth.createUserWithEmailAndPassword(email, pass); // supply email, password
createUserPromise.catch(e => console.log(e.message))
// OR
auth.createUserWithEmailAndPassword(email, pass)
.catch(e => console.log(e.message))


// log out

if (!firebase.apps.length) {
   firebase.initializeApp(config);
}

auth = firebase.auth();
auth.signOut();

// add realtime authentication events listener
const config = {
// initialize firebase
	apiKey: ,
	authDomain: ,
	databaseURL: ,
	storageBucket: ,
};

firebase.initializeApp(config);

auth = firebase.auth();
auth.onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser); // means its logged
	} else {
		console.log('not logged in')
	}
});
