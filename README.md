# BS Paint

A very simple paint program.


### Introduction

Ever used [MS Paint](https://en.wikipedia.org/wiki/Microsoft_Paint)? It was a very simple paint program for Windows. We're going to take that limited-feature app and implement... even fewer features. Welcome to a fake MS Paint. Welcome to... BudgetSoft Paint!


### Setup

You may have noticed that there is no JavaScript. But there is some HTML and CSS. Let's look around, shall we?


### We Shall

First, the HTML. We have three sections:

1. The palette.
2. The brush.
3. The canvas.

We'll be checking what *classes* are present on those items in order to know what to do when the user clicks something. Did they click a color on the *palette*? The *brush* should get that color. Did they click the *canvas*? That canvas square should get the *brush*'s color. Pay careful attention to the logical flow of the app, and if you need some logical flow reference, [see the hosted solution to BS Paint](http://bs-paint-solution.surge.sh/).

Did you notice how all three sections listed above have `.color-${n}` classes on them or their elements? That brings us to the CSS, which has those classes, but no actual color assigned to them. Put some code in there to give `color-1` and `color-2` and so on each a background-color... but keep the same class names. That way we can change what `color-3` is any time we want, without having to change the name throughout the code from `purple` to `mauve`. Additionally, this drives home that we're not changing CSS directly... just classes!

Once you've got those colors defined, we're on to laying things out.


### Now For Layout

Our page is supposed to look like the page linked to above. It certainly does not!

There are two main layout challenges for this assignment:

1. Center everything along the vertical axis. Sounds like a Flexbox problem!
2. Put the *100* divs in `.canvas` in a 10x10 grid. Sounds like a problem for... well, Grid, obviously!

**Layout is a large part of this assignment**, which is why we've been working on it so hard. But feel free to switch back and forth between that and the JavaScript below.


### BS Paint's JavaScript

It will be JavaScript's job to connect all the pieces logically, with event listeners and DOM manipulation galore. **We'll be using class tools to change the CSS here exclusively.** Do *not* use any `style` attributes! If we change the class on an element, it will get all all the CSS rules from that class. Neat stuff!

Here are some (possibly new to you!) tools you can use:

* `classList` and [its many awesome methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods). 4 out of 5 DOM manipulators recommend this tool.
* Making `classList` an array using `Array.from()`. While you gain array methods by doing this, you lose all of `classList`'s native methods in the exchange.
* `className`, which is actually a string with spaces separating the class names (if there are more than one). It is, in fact, in the exact same format as when you add classes in the html. If you want to make an array from this string instead of using the `Array.from()` method, converting a string of letters to an array of words is easy enough!


### A Note On Canvas Size

We have a 10x10 canvas right now, but you can add more if you'd like using a couple different methods:

1. Add a bunch more to the html (think about using an emmet abbreviation), then adjust the grid CSS in `.canvas` in `style.css`.
2. Add the `div`s via JavaScript. This way's more fun!


### Stretch Goals

There are a lot of different directions you could take this project to stretch your developer wings. These don't all work together, and therefore are also not in any particular order. Do whatever sounds fun or challenging!

* Add more colors. You may have to adjust the layout to continue to have the palette look reasonable.
* Add a Dark Mode toggle that will change the general theme and also the colors to match.
* Increase the number of squares on the canvas. You may have to adjust the size of the squares (or canvas). There is no real upper limit! I guess the number of pixels available to the user? Yeah, that's an actual upper limit.
* Add an easter egg message to `.message` that activates when the user draws a particular pattern. Checking for a particular pattern can be difficult if you make too complex a one, so start with something simple and expand from there to as weird an easter egg as you can.
* Allow the user to dynamically allocate the size of the canvas. You'll have to take in the desired canvas size from the user (an input box, maybe?), then make the right number of squares dynamically.
* Add some more tools besides a simple paintbrush. Here are some examples, but feel free to come up with your own ideas!
  * A tool that colors a square and its neighbors.
  * A tool that combines colors. For example, if the color is red and you paint it yellow with this tool, you get orange.
  * A tool that allows you to select multiple squares for painting on all of them at once.


### Good Luck!

And may the BS be with you.
