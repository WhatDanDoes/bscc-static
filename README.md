BSCC static site
================

BSCC main site built with 11ty.

# Setup

```
npm install
```

Configure:

```
cp .env.example .env
```

# Development

Server:

```
npm start
```

Build project:

```
npm run dev:build
```

# Production

Build project:

```
npm run build
```

Start container:

```
docker-compose up -d
```

## nginx-proxy

All the certs are provided courtesy of _Let's Encrypt_. There is an example proxy server defined in nginx-proxy. You only need one of these per server, so it is prudent to copy the directory into a new location:

```
cp -r nginx-proxy ..
cd ../nginx-proxy
```

## GitHub Actions

You need to configure four GitHub _secrets_ to set up push deployment:

- `SSH_HOST` - the server URL to which this site is deployed
- `SSH_USER` - the username by which to authenticate against the server
- `PUBLIC_DIR` - the server directory into which the static files will be transfered
- `SSH_PRIVATE_KEY` - obtained thusly: https://zellwk.com/blog/github-actions-deploy/
