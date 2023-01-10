import { GoogleOAuthProvider } from 'google-oauth-gsi';

export default new GoogleOAuthProvider({
    clientId: '351360855136-c65vr13tal2in9b9m1hdmp5dgr4rie3l.apps.googleusercontent.com',
    onScriptLoadError: () => console.log('onScriptLoadError'),
    onScriptLoadSuccess: () => console.log('onScriptLoadSuccess'),
});
