import Backbone from 'backbone';
import _ from 'underscore';
import OrderView from '../views/order_view';
import Order from '../models/order';
// import OrderList from '../collections/order_list';


const OrderListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'newOrder', this.addOrder);

    // do something with params.anotherOption

    // log that we're listenTo
  },
  render() {
    // update event happened
    this.$('#orders').empty();
    this.model.each((order) => {
      const orderView = new OrderView({
        model: order,
        template: this.template,
        tagName: 'li',
        className: 'order',
      });

      this.$('#orders').append(orderView.render().$el);
    });
    return this;
  },
  addOrder(order) {
    this.model.add(order);
  }
});

export default OrderListView;
