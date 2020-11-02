import { reactive } from 'vue';
import { firebaseInstance, firebaseStore } from '../fbase';

export const post = () => {
	const COLLECTION = 'Test';
	const state = reactive({
		title: '',
		desc: '',
		createdAt: '',
		updatedAt: ''
	});
	const postList = reactive([]);

	const getPost = async () => {
		firebaseStore.collection(COLLECTION).orderBy('createdAt', 'desc').get().then((quertSnapshot) => {
			quertSnapshot.forEach((doc) => {
				const { createdAt, desc, title, updatedAt } = doc.data();
				postList.push({
					id: doc.id,
					...doc.data()
				});
			});
		});
	};

	const setPost = async () => {
		state.createdAt = firebaseInstance.firestore.Timestamp.now();
		state.updatedAt = firebaseInstance.firestore.Timestamp.now();
		firebaseStore
			.collection(COLLECTION)
			.add(state)
			.then((docRef) => {
				resetPost();
				postList.unshift(state);
			})
			.catch((error) => {
				console.log('error', error);
			});
	};

	const resetPost = () => {
		state.title = '';
		state.desc = '';
		state.createdAt = '';
		state.updatedAt = '';
	};

	return {
		state,
		postList,
		getPost,
		setPost
	};
};
