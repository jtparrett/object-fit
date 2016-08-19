(function(window, $){
  var defaults = {
        force: false,
        position: 'center',
        type: 'cover'
      };

  $.fn.objectFit = function(opts){
    var options = $.extend(defaults, opts);
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
  this.opts = options;
  this.src = el.attr('src');
  this.parent = el.parent();
  this.setBackground();
  el.remove();
};

objectFit.prototype.setBackground = function(){
  this.parent.css({
    'background-position': this.opts.position,
    'background-size': this.opts.type,
    'background-image': 'url(' + this.src + ')'
  });
};
