import { firebaseInstance, firebaseAuth } from '../fbase';
import { reactive } from 'vue';

export const auth = () => {
	const credentials = reactive({
		email: '',
		password: ''
	});

	const submit = async (event) => {
		event.preventDefault();
		let data;
		try {
			data = await firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
		} catch (error) {
			console.log(error.message);
		}
	};

	const socialSubmit = async (event) => {
		event.preventDefault();
		const { target: { name } } = event;
		let provider;

		switch (name) {
			case 'google':
				provider = new firebaseInstance.auth.GoogleAuthProvider();
				break;
		}

		const data = await firebaseAuth.signInWithPopup(provider);
	};

	return {
		credentials,
		submit,
		socialSubmit
	};
};
