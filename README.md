## What's this?

A quick implementation of Rock, Paper, Scissors using create-react-app and as little else as possible to [keep it simple](https://en.wikipedia.org/wiki/KISS_principle) and lean. Going forward, it'd be great to setup a CI and introduce CSS preprocessing to ease collaboration and keep styling [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

See app running at https://clarencedglee.github.io/rock-paper-scissors/

To test:

1. `git clone https://github.com/clarencedglee/rock-paper-scissors.git`
2. `cd rock-paper-scissors`
3. `npm install`
4. `npm run test`

### What's here?

* [`create-react-app`](https://github.com/facebook/create-react-app) to hit the ground running with a sensible build configuration
* [`Jest`](https://facebook.github.io/jest/) to test components and logic
* Just enough `CSS` for the simple UI

### What's not?

* `Redux / mobx` / other state management, which at this stage hurts more than helps
* `RxJS` which I love, but has no place here
* `CSS frameworks` to bloat the file size
* `CSS preprocessors` to add to dev setup and build time

### What's next?

As this evolves towards something like [`Rock Paper Scissors Lizard Spock`](https://rpsls.net), additions may include:
* Better use of HTML meta data for search engines, social media, and bookmarking on mobile OSs
* [`sass`](https://sass-lang.com/) or [`stylus`](http://stylus-lang.com/) to help manage and auto-prefix rules
* Automated CI and testing, [`travis`](https://travis-ci.org/) to start?
* [`redux-observables`](https://github.com/redux-observable/redux-observable) to ease asynchronous state change
* and more as we go along...
