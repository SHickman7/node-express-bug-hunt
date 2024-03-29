# Node & Express Bug Hunt!

**READ ALL INSTRUCTIONS BEFORE STARTING**

There are 10 bugs in total, can you find them all? There are hints throughout (???), you should only need to make minor modifcations to 10 lines of code.

**Don't race through the files looking for the issues!** They should all have a console log or error that help you identify them. Read the console so that you know what error will cause each bug. The last one is tricky since it doesn't throw any errors. Document the error, line number and your fix in this README for each of the bugs.

## Setup
```
npm install
npm start
```

> NOTE: A couple of bugs prevent the server from starting.

## Error List

TODO: Add the error here followed by the line of code you fixed.

### Bug 0

`ReferenceError: app is not defined`

Fixed `quote.router.js` line 28: switch `app` to `router`. _This is the solution to the first bug._

### Bug 1 X

`TypeError: Router.use() requires a middleware function but got a Object`

Fixed `quote.router.js` line 27:  added module.exports = router;
...

### Bug 2 X

Preventing GET/ on localhost5007

Fixed `client.js`line 7:  removed the `}` from after quotes

### Bug 3 X

`Pathed incorrectly`

Fixed `server.js` line 17:  need `server/` before `public`

### Bug 4 X

Fixed `index.html` line 10, added `defer` between `script` and `source`

### Bug 5 X
`quote list` is listed as an object instead of an array

Fixed `quote.router.js` line 5 - changed `{}` to `[]`


### Bug 6 X

Fixed `quote.router.js` line 8 - should just be a `/` instead of `/quotes`

### Bug 7 X

Fixed `quote.router` line 21 - `quotesList` should be `quoteList`

### Bug 8 X

Fixed `client.js` line 52 - `getQuote()` should be `getQuotes()`;

### Bug 9 X

Fixed `client.js` line 18 - changed `quotes` to `quotesFromServer`

### Bug 10

Updated `/server.js` line 7 to be `5001` (instead of 5007) to match what was listed in comment line 6

## Extra Practice (Optional)

Complete the JS debugging exercises at:

- https://education.launchcode.org/intro-to-professional-web-dev/chapters/errors-and-debugging/exercises.html
