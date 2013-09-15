# Usage

> Omg the cookie is being changed, but where? Give me a breakpoint when JS changes my cookies!

    breakOn(document, 'cookie');

> Some JS is getting the `scrollTop` value causing massive Recalculate Styles costs.. Who is the <del>perpetrator</del> <ins>PERFetrator</ins>?

    breakOn(document.body,'scrollTop', 'write')

This works really well as a [snippet in the Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/authoring-development-workflow#snippets):

<a href="https://developers.google.com/chrome-developer-tools/docs/authoring-development-workflow#snippets">
![](http://i.imgur.com/snA9unr.png)
</a>


# History

* @fat blogged ["debugging javascript"](http://wordsbyf.at/2011/12/23/debugging-javascript-is-a-lame-title/) with an idea (attributed to [@mracus](http://twitter.com/mracus)) I'd talked about but hadn't seen yet

```js
Object.defineProperty(twttr, 'profile', {
    get: function () {
      debugger
    }
  , set: function (val) {
      debugger
    }
})
```
* I [asked for help](https://plus.google.com/+PaulIrish/posts/38Q3jzWMZ9K) generalizing it and saving the initial value
* [Dave Methvin answered](https://gist.github.com/1676346) the call
* 18 months later I forked it, made this repo, and tried to ship it finally.
