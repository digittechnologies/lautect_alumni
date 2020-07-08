// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  baseUrl: 'http://localhost:8000/api',
  login: 'http://localhost:8000/api/entrust',
  signup: 'http://localhost:8000/api/signup'

  
  // baseUrl: 'https://testenv.digittechnologies.org/lautech_alumni/backend/api', 
  // login: 'https://testenv.digittechnologies.org/lautech_alumni/backend/api/entrust',
  // signup: 'https://testenv.digittechnologies.org/lautech_alumni/backend/api/signup'

};
