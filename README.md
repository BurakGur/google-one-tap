# Google One Tap Login

<p align="center">
<img src="./resources/google_one_tap.png" width="90%">
</p>

Sign up users with a single tap and keep them signed in automatically.

## Install

```
npm install google-one-tap --save
```

## How to use

### **React**

```js
import googleOneTap from 'google-one-tap';

const options = {
	client_id: '___CLIENT_ID___', // required
	auto_select: false, // optional
	cancel_on_tap_outside: false, // optional
	context: 'signin', // optional
};

googleOneTap(options, (response) => {
	// Send response to server
	console.log(response);
});
```

### **Vue**

```js
import googleOneTap from 'google-one-tap';
export default {
	mounted() {
		const options = {
			client_id: '___CLIENT_ID___', // required
			auto_select: false, // optional
			cancel_on_tap_outside: false, // optional
			context: 'signin', // optional
		};
		googleOneTap(options, (response) => {
			// Send response to server
			console.log(response);
		});
	},
};
```

## Options

| Name                  | Type    | Required |                                     Description                                      |
| --------------------- | ------- | :------: | :----------------------------------------------------------------------------------: |
| client_id             | String  |   true   |                             Your application's client ID                             |
| auto_select           | Boolean |  false   |                             Enables automatic selection.                             | null |
| cancel_on_tap_outside | Boolean |  false   |              Cancels the prompt if the user clicks outside the prompt.               |
| context               | String  |  false   | The title in the One Tap prompt. Allowed parameters: "_signin_", "_signup_", "_use_" |

## Server

Using one of the Google API Client Libraries (e.g. Java, Node.js, PHP, Python) is the recommended way to validate Google ID tokens in a production environment.

```
npm install google-auth-library --save
```

### **Node.js**

```js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
		// Or, if multiple clients access the backend:
		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
	});
	const payload = ticket.getPayload();
	const userid = payload['sub'];
	// If request specified a G Suite domain:
	// const domain = payload['hd'];
}
verify().catch(console.error);
```
