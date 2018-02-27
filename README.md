# what is node.js?

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

# eventloop

gmail getting new emails

exrx: while-timeout
notice: there is no sleep in JavaScript. And don't trust timeouts

# non blocking i/o

# why javascript?

# types

So let’s begin at the basics. There are 5 different literal (things you can declare instantaneously) types that exist in JS:

**Numbers** (e.g. `1`, `2` , `1.28` , `NaN` , `Infinity`, etc.)…note that NaN
(not a number) is a number. From the ECMA spec:

> 4.3.20 Number type: set of all possible Number values including the special
> “Not-a-Number” (NaN) values, positive infinity, and negative infinity

**Strings **(e.g. `'xyz'` , `"abc"`) Pretty straightforward

**Boolean** (just `true` and `false`)…there’s a whole article that can be
written about truthy vs falsy values. But for the moment, we’re going to skip
that.

**Objects** (e.g. `{name:'abhi', dob: '1997'}`)

**Array **(e.g. `[1,2,'hi']`)

Of these literals, only booleans, numbers, and strings are primitives. There are
also a couple of other primitive values (`undefined` and `null`).

exrx: Given that the `typeof` function will output a string representing the type of a variable passed to it, what is `typeof([1,2,3])`? Well…it’s actually `'object'` .

In JavaScript, objects and arrays are handled nearly identically because arrays
are just instantiations of objects. The difference is the following:

* While objects are just an unordered map from string keys to values, arrays are
an ordered list of values with integer keys.

Keep that idea in mind, knowing that an array is really an object helps you gain
intuition for WAT is happening.

exrx: Array.isArray([])

exrx: 0.1 + 0.2

exrc: Math.PI

## be careful

exrx: [] + [] = ''
[] + {} = '[object Object]'
{} + [] = 0
{} + {} = NaN
('wat' - 1)

exrx: parseInt('09')
exrx: +'09'
exrx: +'12a34'

## == vs ===
