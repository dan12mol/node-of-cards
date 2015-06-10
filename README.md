# Node of Cards

## Installation (via [npm](https://npmjs.org/package/node-of-cards))

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


## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

[Dan Moldovan](https://github.com/dan12mol) ([danmol18@gmail.com](mailto:danmol18@gmail.com))
