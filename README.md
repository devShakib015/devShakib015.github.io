# devshakib015.github.io

This site has **moved** to **https://devshakibio.web.app**.

This repo is now a redirect stub only. `index.html` and `404.html` are the same
page: it sets `rel=canonical` to the new domain, redirects via JS (falling back
to a `<meta http-equiv="refresh">` when JS is off), and maps old hash routes
(`/#/projects`) onto the new site's real paths (`/work`). Unknown paths fall
back to the home page rather than a 404.

The portfolio source lives in [devShakib015/my_portfolio](https://github.com/devShakib015/my_portfolio)
and deploys to Firebase Hosting.
