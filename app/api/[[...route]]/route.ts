// books.ts
import {Hono} from 'hono'
import {handle} from 'hono/vercel';
import {clerkMiddleware, getAuth} from "@hono/clerk-auth";

const app = new Hono().basePath('/api');

app
    .get(
        '/pippo',
        clerkMiddleware(),
        (c) => {
            const auth = getAuth(c)

            if (!auth?.userId) {
                return c.json({
                    error: 'You are not logged in.'
                })
            }

            return c.json({
                message: 'list books'
            })
        }
    )

export const GET = handle(app);
export const POST = handle(app);