# Node of Cards

**Check out the original [Deck of Cards API](http://deckofcardsapi.com)**

## Installation (via [npm](https://npmjs.org/package/node-of-cards))

[![NPM](https://nodei.co/npm/node-of-cards.png)](https://nodei.co/npm/node-of-cards/)

```bash
$ npm install node-of-cards
```

## Quick Start

Using **node-of-cards** is simple:

```javascript
var cards = require('node-of-cards');
```

### Create a new deck

```javascript
cards.shuffle(options, function (err, data) {
    // play around with data
  });
```

Response **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1' // useful in case you want to keep track of multiple decks,
  success: true,
  shuffled: true,
  remaining: 52 // number of cards remaining in the deck
}
```

The ```options``` object is **optional** and contains the following parameters:

  - **number_of_decks**: number -- specify how many decks you want to play with (number of cards in one deck: **52**). Default is 0.
  - **cards**: array -- an array of strings used to only include some cards in the deck. These are of format ```card+suit``` (AS = Ace of Spaces, 8H = 8 of Hearts, 0C = 10 of Clubs). Defaults is [].

Example:

```javascript
{
  number_of_decks: 4,
  cards: ['AS', 'KS', 'QS', 'JS', '0S', '9S', '8S', 'AD', 'KD', 'QD', 'JD', '0D', '9D', '8D']
};
```

### Draw a card

```javascript
cards.draw(options, function (err, data) {
  // play around with data
});
```

Response **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1',
  success: true,
  remaining: 52,
  cards: [
    {
      suit: 'CLUBS',
      images: {
        png: 'http://deckofcardsapi.com/static/img/0C.png',
        svg: 'http://deckofcardsapi.com/static/img/0C.svg'
      },
      image: 'http://deckofcardsapi.com/static/img/0C.png',
      value: '10',
      code: '0C'
    },
    {
      suit: 'SPADES',
      images: {
        png: 'http://deckofcardsapi.com/static/img/0S.png',
        svg: 'http://deckofcardsapi.com/static/img/0S.svg'
      },
      image: 'http://deckofcardsapi.com/static/img/0S.png',
      value: '10',
      code: '0S'
    }
  ]
}
```

The ```options``` object is **optional** and contains the following parameters:

  - **number_of_cards**: number -- specify how many cards you want to draw. Default is 1

Example:

```javascript
{
  number_of_cards: 10
};
```

### Reshuffle a deck

```javascript
cards.reshuffle(options, function (err, data) {
  // play around with data
});
```

Response **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1',
  success: true,
  shuffled: true,
  remaining: 52
}
```

The ```options``` object is **optional** and contains the following parameters:

  - **deck_id**: string -- specify which deck to reshuffle. Default is last deck ```shuffled```.

Example:

```javascript
{
  deck_id: 'slq5ewnxdrl1'
};
```

### Get an unshuffled deck

```javascript
cards.pristine(options, function (err, data) {
  // play around with data
});
```

Response **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1',
  success: true,
  shuffled: false,
  remaining: 52
}
```

Cards in an unshuffled deck are in the following order: A-spades, 2-spades, 3-spades... followed by diamonds, clubs, then hearts.

### Add Cards to a Pile

```javascript
cards.addToPile(name, cards, function (err, data) {
  // play around with data
});
```
where ```name``` is the name of the pile you wish to create and ```cards``` is an array of cards to be added.
**!!!** Cards added to a pile need to be first drawn from the deck.

Example:

```javascript
cards.addToPile('player_one', ['AS', 'AD', 'JH', '3H'], function (err, data) {
  // play around with data
});
```

Reponse **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1',
  success: true,
  piles: {
    // name of the pile that you defined
    player_one: {
      remaining: 4
    }
  },
  remaining: 48
}
```

### Draw cards from a Pile

```javascript
cards.drawFromPile(name, cards, function (err, data) {
  // play around with data
});
```

where ```name``` is the name of the pile you wish to create and ```cards``` is an array of cards to be drawn. The ```cards``` parameter is optional. If omitted, the top card of the pile will be drawn.

Example 1:

```javascript
cards.drawFromPile('player_one', function (err, data) {
  // play around with top card of the pile
});
```

Example 2:

```javascript
cards.drawFromPile('player_one', ['AS', 'AD'], function (err, data) {
  // play around with data
});
```

Reponse **data** is of type

```javascript
{
  deck_id: 'slq5ewnxdrl1',
  success: true,
  cards: [
    {
      suit: 'HEARTS',
      images: {
        png: 'http://deckofcardsapi.com/static/img/3H.png',
        svg 'http://deckofcardsapi.com/static/img/3H.svg':
      },
      image: 'http://deckofcardsapi.com/static/img/3H.png',
      value: '3',
      code: '3H'
    }
  ],
  piles: {
    player_one: {
      remaining: 3
    }
  }
}
```

### using existing deck

```javascript
cards.setDeck(deck_id);
//functions will now use this deck_id by default
```

## Author

[Dan Moldovan](https://github.com/dan12mol) ([danmol18@gmail.com](mailto:danmol18@gmail.com))

## License

The MIT License (MIT)

Copyright (c) 2015 dan12mol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
