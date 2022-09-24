import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const clientId = process.env.GITHUB_ID || ''
const clientSecret = process.env.GITHUB_SECRET || ''
const secret = process.env.JWT_SECRET || ''

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId,
			clientSecret,
			authorization: {
				params: {
					scope: 'repo read:org read:project read:user user:email'
				}
			}
		})
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken
			return session
		}
	},
	pages: {
		signIn: '/auth/signin',
		error: '/auth/signin'
	},
	secret
}

export default NextAuth(authOptions)