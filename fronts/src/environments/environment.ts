// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

    //Local Environment
    // baseUrl: 'http://localhost:8000/api',
    // login: 'http://localhost:8000/api/login',
    // signup: 'http://localhost:8000/api/signup'
  
    baseUrl: 'http://testenv.digittechnologies.org/lautech/platform/public/api', 
    login: 'http://testenv.digittechnologies.org/lautech/platform/public/api/login',
    signup: 'http://testenv.digittechnologies.org/lautech/platform/public/api/signup'

    //PRODUCTION ENVIROMENT
    // baseUrl: 'https://web.preciousmetalstrade.ng/api', 
    // login: 'http://web.preciousmetalstrade.ng/api/entrust',
    // signup: 'http://web.preciousmetalstrade.ng/api/signup'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
