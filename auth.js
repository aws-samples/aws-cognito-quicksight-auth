let identityPool = 'us-east-1:XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; //Cognito Identity Pool
let region = 'us-east-1';
let poolId = 'us-east-1_XXXXXXXX'; //Cognito User Pool
let clientId = 'XXXXXXXXXXXXXXXXX'; //Cognito User Pool App
let appDomain = 'XXXXXX.auth.us-east-1.amazoncognito.com';
let endpoint = "https://XXXXXXXXXXX.execute-api.us-east-1.amazonaws.com/prod"; //API Endpoint URL
let authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://d12345example.cloudfront.net', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://d12345example.cloudfront.net' //CloudFront Distribution URL
};

