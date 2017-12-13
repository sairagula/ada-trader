import 'foundation-sites/dist/foundation.css';
import 'css/app.css';

import $ from 'jquery';
import _ from 'underscore';

import Simulator from 'models/simulator';
import QuoteList from 'collections/quote_list';
import QuoteView from './views/quote_view';

const quoteData = [
  {
    symbol: 'HUMOR',
    price: 88.50,
  },
  {
    symbol: 'CLOTH',
    price: 81.70,
  },
  {
    symbol: 'HABIT',
    price: 98.00,
  },
  {
    symbol: 'SUPER',
    price: 83.10,
  },
];

// let quoteTemplate;
const renderList = (quoteList) => {
  // Clear the unordered list
  const $quoteList = $('#quotes');
  $quoteList.empty();

  // quoteList.forEach((quote) => {
    const quoteView = new QuoteView({
      model: quoteList.at(0),
      template: _.template($('#quote-template').html()),
      tagName: 'li',
      className: 'quote',
    });
    quoteView.render();
    $quoteList.append(quoteView.render().$el);
  // });
};

$(document).ready(function() {
  const quotes = new QuoteList(quoteData);
  const simulator = new Simulator({
    quotes: quotes,
  });

  renderList(quotes);

  simulator.start();
});
