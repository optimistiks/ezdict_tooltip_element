Polymer({
  is: 'ezdict-tooltip-element',
  properties: {
    translation: String
  },

  ready: function () {
    $(this.$.st_translate).slimScroll({
      distance: '5px',
      height: '100%',
      size: '4px'
    });

    $(this.$.close_sticker).on('click', function () {
      $(this.$.sticker).hide();
    }.bind(this));
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
    this.$.sticker.style.top = top;
  },

  setLeft: function (left) {
    this.$.sticker.style.left = left;
  },

  hide: function () {
    this.$.sticker.style.display = 'none';
  },

  show: function () {
    this.$.sticker.style.display = 'block';
  }
});
