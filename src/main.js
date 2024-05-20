import App from './App.svelte';
import '../public/style.css';

const app = new App({
	target: document.body,
	props: {
		name: 'wedding'
	}
});

export default app;