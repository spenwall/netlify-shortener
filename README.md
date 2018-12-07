# netlify-shortener

Uses netlify's redirect functionality to make a personal URL shortener. Works
beautifully :)

## Step 1

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kentcdodds/netlify-shortener)

This will create a copy of the repo for your own account.

## Step 2

Clone the repo on your machine

## Step 3

Update the `_redirects` file to have the redirects you want. Update the
`baseUrl` property in the `package.json` file.

Optionally put this in your `.bash_profile` (for linux/mac) or whatever you're
using for your terminal:

```bash
alias shorten="node {repo-path}/shorten.js $1 $2";
```

If you want this in windows `cmd` then you can
[do this instead](https://stackoverflow.com/a/21040825).

With that you'll be able to run `shorten http://example.com` (generates a random
short code) and `shorten http://example.com/foo foo` (second argument is a
specified short code). It will automatically update `_redirects`, commit, and
push the repo which will trigger a deploy, then copy the URL to your clipboard.
Neat right!?

## Step 4

On Netlify, configure a custom domain.

## Step 5

That's it.

# FAQ

## How do I keep things updated?

There's a script in the `package.json` to wire your repo up to the upstream repo
if you want to keep it updated. Run `npm run setup` to get that connected. Then
whenever you want to get updates you can run `npm run update` and it'll rebase
your changes onto the updates from the original repo.

# What about analytics?

I don't think Netlify will give you analytics, but you should be able to set up
CloudFlare in front of your domain and I think they'll give you analytics.

# LICENSE

MIT
