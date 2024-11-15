import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    redirect: async ({ url, baseUrl }) => baseUrl, // Optional: redirects to the base URL after login
  },
});
