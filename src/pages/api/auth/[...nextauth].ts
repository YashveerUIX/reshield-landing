import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "22362066084-idvejrr8duhr0dbvaeh4mnqfnbkg1flp.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
