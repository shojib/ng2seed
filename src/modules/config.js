System.config({
	packages: { 'modules': { main: 'main.js' } }
});
System.import('modules').catch(console.error.bind(console));