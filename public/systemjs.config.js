(function (global) {

    //map tells the System loader WHERE to look for things when it is loading
    var map = {
        '@angular': 'lib/@angular',
        'rxjs': 'lib/rxjs'
    };

    //tells the System loader HOW to load when no filename and/or no extension
    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtensions: 'js'
        },
        rxjs: {  //Sin esto no funciona (not an optimal solution since it pulls in all of rxjs (which means it takes forever to load). 
            defaultExtension: 'js',
            main: 'Rx.js'
        }
    }; 

    //dependencies and Angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'router',
        'platform-browser',
        'platform-browser-dynamic',
    ];

    //Loops over all our Angular packages to create the config properties into 'packages'
    //   Ex: for 1st iteration property '@angular/common': {main: '/bundles/common.umd.js', defaultExtensions: 'js'}
    //       for 2nd iteration property '@angular/compiler': {main: '/bundles/compiler.umd.js', defaultExtensions: 'js'}
    //       ...
    //       for last iteration property '@angular/platform-browser-dynamic': {main: '/bundles/platform-browser-dynamic.umd.js', defaultExtensions: 'js'}
    ngPackageNames.forEach(function (pkgName) {   
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtensions: 'js'
        };
    });

    System.config({
        defaultExtensions: true,
        transpiler: null,
        packages: packages,
        map: map
    });
})(this);