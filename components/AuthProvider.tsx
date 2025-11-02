'use client';
import { Auth0Provider } from "@auth0/auth0-react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Auth0Provider
        domain="dev-rcfqfqv2x06cwc56.us.auth0.com"
        clientId="zOLVFn0FDRPOTmsoARsZwd57y7esOWtZ"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {children}
      </Auth0Provider>
    </>
  );
}

export default AuthProvider;
