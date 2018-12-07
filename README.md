# netlify-shortener

Uses netlify's redirect functionality to make a personal URL shortener. Works beautifully :)

## Step 1

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kentcdodds/netlify-shortener)

This will create a copy of the repo for your own account.

## Step 2

Clone the repo on your machine

## Step 3

Update the `_redirects` file to have the redirects you want.

Optionally update the `baseUrl` variable in `shorten.js` to the domain you're going to use.

Optionally put this in your `.bash_profile` (for linux/mac):

```bash
alias shorten="node {repo-path}/shorten.js $1 $2";
```

With that you'll be able to run `shorten http://example.com` (generates a random short code)
and `shorten http://example.com/foo foo` (second argument is a specified short code). It will
automatically update `_redirects`, commit, and push the repo which will trigger a deploy, then
copy the URL to your clipboard. Neat right!?

If you're on a windows machine you may need to change `pbcopy` in `utils`. I'm not sure what it'll need to be though.

## Step 4

On Netlify, configure a custom domain.

## Step 5

That's it.
