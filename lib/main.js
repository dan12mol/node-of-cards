'use strict';

var request = require('request');

var baseUrl = 'http://deckofcardsapi.com/api/deck/';
var deck_id;

exports.setDeck = function(deck_id){
  this.deck_id = deck_id
}

exports.shuffle = function (options, cb) {

  if (typeof cb === 'undefined')
    cb = options;

  var url = 'new/shuffle/';
  if (options.cards || options.number_of_decks)
    url += '?';

  if (options.number_of_decks)
    url += 'deck_count=' + options.number_of_decks;

  if (options.number_of_decks && options.cards)
    url += '&';

  if (options.cards)
    url += 'cards=' + options.cards.join(',');

  request(baseUrl + url, function (error, response, body) {
    if (error)
      return cb(error);

    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    deck_id = res.deck_id;

    return cb(null, res);
  });
};

exports.draw = function (options, cb) {

  if (typeof cb === 'undefined')
    cb = options;

  var url = options.number_of_cards ? '?count=' + options.number_of_cards : '?count=1';

  request(baseUrl + deck_id + '/draw/' + url, function (error, response, body) {
    if (error)
      return cb(error);
    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    return cb(null, res);
  });
};

exports.reshuffle = function (options, cb) {

  if (typeof cb === 'undefined')
    cb = options;

  var deck = options.deck_id ? options.deck_id : deck_id;

  request(baseUrl + deck + '/shuffle/', function (error, response, body) {
    if (error)
      return cb(error);

    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    return cb(null, res);
  });
};

exports.pristine = function (cb) {
  request(baseUrl + 'new/', function (error, response, body) {
    if (error)
      return cb(error);

    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    deck_id = res.deck_id;

    return cb(null, res);
  });
};

exports.addToPile = function (name, cards, cb) {
  request(baseUrl + deck_id + '/pile/' + name + '/add/?cards=' + cards.join(','), function (error, response, body) {
    if (error)
      return cb(error);

    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    return cb(null, res);
  });
};

exports.drawFromPile = function (name, cards, cb) {

  var url = '';

  if (typeof cb === 'undefined') {
    cb = cards;
  }
  else {
    url += '?cards=' + cards.join(',');
  }

  request(baseUrl + deck_id + '/pile/' + name + '/draw/' + url, function (error, response, body) {
    if (error)
      return cb(error);

    var res = JSON.parse(body);
    if (!res.success)
      return cb(new Error('Error'));

    return cb(null, res);
  });
};
