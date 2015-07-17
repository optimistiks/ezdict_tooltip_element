Polymer({
  is: 'ezdict-tooltip-element',
  properties: {
    translation: String
  },

  ready: function () {
    // `ready` is called after all elements have been configured, but
    // propagates bottom-up. This element's children are ready, but parents
    // are not.
    //
    // This is the point where you should make modifications to the DOM (when
    // necessary), or kick off any processes the element wants to perform.
  },

  attached: function () {
    // `attached` fires once the element and its parents have been inserted
    // into a document.
    //
    // This is a good place to perform any work related to your element's
    // visual state or active behavior (measuring sizes, beginning animations,
    // loading resources, etc).
  },

  detached: function () {
    // The analog to `attached`, `detached` fires when the element has been
    // removed from a document.
    //
    // Use this to clean up anything you did in `attached`.
  },

  setTranslation: function (translation) {
    this.translation = translation;
  },

  setTop: function (top) {
    this.$$('#sticker').style.top = top;
  },

  setLeft: function (left) {
    this.$$('#sticker').style.left = left;
  },

  hide: function (left) {
    this.$$('#sticker').style.display = 'none';
  },

  show: function (left) {
    this.$$('#sticker').style.display = 'block';
  }
});
