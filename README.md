# Portfolio Website

A web portfolio of myself made by myself to showcase what I can do. Hosted on
Vercel. [Visit the site here](https://rb-portfolio-site.vercel.app/)

## Running

To run this project clone it and then run `npm install` followed by
`npm run dev` in the cloned directory. This will only run the client - you don't
need to worry about the server as it is hosted separately on Render.com.

## Server

The Rust backend is hosted on Render.com and its repository can be found
[here.](https://github.com/ribru17/portfolio-site-backend-actix) For my purposes
the server is just a simple endpoint that e-mails me the content of the
`Contact` page form.

## Problems I Encountered and How I Overcame Them

- Slow initial load, performance on mobile
  - Greatly reduced initial load by manually exporting only individual packages
    I needed from Three.js source code (as of writing they do not support
    partial imports and have a bundle size of over `400 KiB`)
  - Switched frameworks from React to Solid
  - Ended up reducing mobile blocking time from `440ms` to `150ms` and mobile
    TTI from `3.3s` to `2.2s`
- Hosting single page app on Github Pages proved problematic
  - Only worked with hacky solution that 1) rerouted the URL upon loading using
    a bit of Javascript, and 2) added a custom `homepage` property in the
    `package.json`
  - Fixed this by switching frontend hosting to Vercel
- Custom SolidJS `404` page not recognized by Vercel, served Vercel's default
  error page
  - Had to reroute the `404` page back to `index.html` using `vercel.json` where
    the custom `404` was properly displayed
- Dev server not running properly, or at all
  - Disable ad blocker for localhost sites
