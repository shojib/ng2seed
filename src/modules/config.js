System.config({
	packages: { 'modules': { main: 'ng2seed.js' } }
});
System.import('modules').catch(console.error.bind(console));