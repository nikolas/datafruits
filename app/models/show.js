import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  title: DS.attr(),
  image_url: DS.attr(),
  thumb_image_url: DS.attr(),
  description: DS.attr(),
  tweet_content: DS.attr()
});
