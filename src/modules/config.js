System.config({
	packages: { 
        'modules': { main: 'main.js' },
        '../libs/rxjs': { defaultExtension: 'js' }
    },
    paths: {
        'rxjs/operator/*': '../libs/rxjs/add/operator/*.js',
        'rxjs/*': '../libs/rxjs/*.js'
    }
});
System.import('modules').catch(console.error.bind(console));