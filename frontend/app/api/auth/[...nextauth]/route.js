import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn callback triggered");
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);
      return true;
    },
    async session({ session }) {
      console.log("Session callback triggered:", session);
      return session;
    },
    async jwt({ token }) {
      console.log("JWT callback triggered:", token);
      return token;
    },
  },
});

export { handler as GET, handler as POST };
