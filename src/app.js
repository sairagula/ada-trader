import 'foundation-sites/dist/foundation.css';
import 'css/app.css';

import $ from 'jquery';
import _ from 'underscore';

import Backbone from 'backbone';
import Simulator from 'models/simulator';
import Quote from 'models/quote';
import QuoteList from 'collections/quote_list';
import QuoteView from './views/quote_view';
import QuoteListView from './views/quote_list_view';
import TradeView from './views/trade_view';


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
// const renderList = (quoteList) => {
//   // Clear the unordered list
//   const $quoteList = $('#quotes');
//   $quoteList.empty();
//
//   // quoteList.forEach((quote) => {
//     const quoteView = new QuoteView({
//       model: quoteList.at(0),
//       template: _.template($('#quote-template').html()),
//       tagName: 'li',
//       className: 'quote',
//     });
//     quoteView.render();
//     $quoteList.append(quoteView.render().$el);
//   // });
// };

$(document).ready(function() {
  const quotes = new QuoteList(quoteData);
  const simulator = new Simulator({
    quotes: quotes,
  });
  // renderList(quotes);
  simulator.start();

  const quoteListview = new QuoteListView({
    model: quotes,
    template: _.template($('#quote-template').html()),
    el: 'main'
  });

  quoteListview.render();

  const tradeView = new TradeView({
    model: quotes,
    template: _.template($('#trade-template').html()),
    el: 'main'
  });

  tradeView.helper();

});
