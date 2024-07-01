import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import db, { clearDbCache } from '@/lib/db';
import User from '@/lib/models/userModel';

async function getUser(email) {
  try {
    await db();
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(3) })
        .safeParse(credentials);
      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) return null;
        const passwordsMatch = password === user.password ? true : false;

        if (passwordsMatch) return user;
      }
      console.log('Invalid credentials');
      return null;
    },
  })],
});
