import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function(transition) {
      Ember.$("#timetableModal").modal('hide');
    }
  },

  setupController: function(controller, model){
    this._super('controller', model);
    Ember.run.schedule('afterRender', this, function () {
      Ember.$("#timetableModal").modal('show');
      $("#calendar").fullCalendar('render');
      var _this = this;
      Ember.$("#timetableModal").on('hidden.bs.modal', function () {
        console.log("modal exited");
        _this.transitionTo('application');
      });
    });
  }
});
