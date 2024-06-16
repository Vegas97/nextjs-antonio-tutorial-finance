// books.ts
import {Hono} from 'hono'
import {clerkMiddleware, getAuth} from "@hono/clerk-auth";

const app = new Hono().basePath('/api');

app
    .get(
        '/',
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
app.post('/', (c) => c.json('create a book', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app