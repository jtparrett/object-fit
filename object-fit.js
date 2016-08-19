(function(window, $){
  $.fn.objectFit = function(opts){
    var options = $.extend({
          force: false,
          position: 'center',
          type: 'cover'
        }, opts);

    if(document.body.style.objectFit != undefined && !options.force){
      return false;
    }

    $(this).each(function(){
      new objectFit(this, options);
    });
  };
})(window, jQuery);

var objectFit = function(el, options){
  var el = $(el);
  this.opts = $.extend({
    src: el.attr('src'),
    parent: el.parent()
  }, options);
  
  this.setBackground();
  el.remove();
};

objectFit.prototype.setBackground = function(){
  this.opts.parent.css({
    'background-position': this.opts.position,
    'background-size': this.opts.type,
    'background-image': 'url(' + this.opts.src + ')'
  });
};
