var app = app || {};

$(function() {
  "use strict";

  var Workbench = Backbone.Router.extend({
    routes: {
      '': 'mainPage',
    },

    _el: function() {
      return $('#application');
    },

    mainPage: function() {
      this.changePage(new app.MainView());
    },

    // TODO: Refactor into helper or change to Marionette
    changePage: function(view) {
      var layout = this._el();
      layout.html(view.$el);
    },
  });

  app.MainView = Backbone.View.extend({
    template: _.template($('#main-template').html()),

    initialize: function() {
      this.render();
    },

    render: function() {
      console.log("rendering!");
      this.$el.html(this.template());
      return this;
    },
    
  });

  // Kick-off App!
  app.Router = new Workbench();
  Backbone.history.start();
});
