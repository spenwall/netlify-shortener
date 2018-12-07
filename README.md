# netlify-shortener

My short URLs. Uses netlify's redirect functionality to make it work. Works
beautifully :)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kentcdodds/netlify-shortener)

Put this in your `.bash_profile`:

```bash
alias shorten="node {repo-path}/shorten.js $1 $2";
```

Pretty magical.

Oh, also, open `shorten.js` and update the baseUrl to your own base url.

And if you're on a windows machine you may need to change `pbcopy` in `utils`.

Then just update `_redirects` to have the short URLs you want. It's great!

