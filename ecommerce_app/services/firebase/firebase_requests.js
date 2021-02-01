// database names are https://<databaseName>.firebaseio.com

// install axios too
import axios from 'axios';

componentDidMount(){
// get request on firebase
	axios.get('https://rest-api-react-native.firebaseio.com/particular_user.json', 
			// {
		 //    params: {
		 //      ID: 12345
		 //    }
		 //  }
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

}



// ASYNC vertion
async function getUser() {
  try {
    const response = await axios.get('https://rest-api-react-native.firebaseio.com/particular_user.json', 
			// {
		 //    params: {
		 //      ID: 12345
		 //    }
		 //  }
	  );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// ASYNC vertion
async function postUser() {
  try {
    const response = await axios.post('https://rest-api-react-native.firebaseio.com/particular_user3/friend.json', 
			{
				panda:{
			    firstName: 'Frede',
			    lastName: 'Flintstone'
			  }
			});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}



// AUTHENTICATION with firebase