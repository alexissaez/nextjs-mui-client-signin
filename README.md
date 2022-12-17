# Nextjs, MUI, Auth Boilerplate


## References:
- [Next.Js + MUI v5 tutorial](https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35)
- [Protecting static pages in Next.js application](https://github.com/ivandotv/nextjs-client-signin-logic)

## Setup
In your .env file you must put the follow key values

```bash
NEXT_PUBLIC_APP_KEY=<APP_KEY>
NEXT_PUBLIC_API_URL=<api_url>
```

| KEY                 | Description                            |
|---------------------|----------------------------------------|
| NEXT_PUBLIC_APP_KEY | String that identify the app as unique |
| NEXT_PUBLIC_API_URL | URL of your api                        |

> **_NOTE:_**  In de `src/services/auth.js` file there is a auth url called `${API_URL}api-auth/` your api must have a auth enpoint with this name.
