# Glue Protocol 📜
---

Build your SaaS solution faster than Claude Code 🗿

## Whaaatt???
---

This library provides very obscurely assembled typescript code that magically glues together the famous [Gobus](#gobus) (read that first if you are not familiar) stack I love to use.

Concretely glue protocol provides a single `glue` 🍯 class with the following features:

- Centralized access to all rpc instances allowing direct access to every rpc service.
- Validation helper for proto validation.
- Middleware that handles authentication.

Just instantiate the `glue` 🍯 like this:
```typescript
import type { Interceptor } from '@connectrpc/connect';
import { createGlue } from './glue/glue.svelte';
import { UserService } from './sdk/v1/admin/user/user_pb'; // your connectrpc service

const glue = createGlue(
	'/api',
  // the client provided to the interceptor factory is the service with the key 'auth'.
	(client): Interceptor => {
		(next) => async (req) => {
			req.header.set('authorization', await GetToken());
			return await next(req);
		};
	},
	{
		auth: AuthService, // <- this is the interceptor provided service
		user: UserService
	}
);
```

Now import this global instance anywhere in your Svelte project to access the backend:

```typescript

```

## Gobus
---

Glue Protocol is designed to work with the `Go-Buf-Svelte` stack I frequently use.

Concretely this means that you work like this:

1. Define the primary frontend-backend API as proto services with proto-validation.
2. Write your SvelteKit frontend against the buf `es` plugin output (connectrpc).
3. Write your Go backend against the buf `go` plugin output (connectrpc).

That's it now you can deploy this in every possible way 🎉 Here some inspiration:

- Embed SvelteKit adapter-static output to Go and build a single executable 🪨
- Upload SvelteKit adapter-static output to S3 and publish the Go functions to Lambda 🌍
- Run SvelteKit in a container and horizontally scale some Go microservices 🎛️


Here you can find an [example](https://codeberg.org/megakuul/cloudjam) 🚀


> [!IMPORTANT]  
> The Gobus stack is not very restrictive, it basically just tells you what technologies you should use and provides some helper code in the Glue Protocol.



