(function(window, $){
  $.fn.objectFit = function(opts){
    var options = $.extend({
          force: false,
          position: 'center',
          type: 'cover'
        }, opts);

    if(!browserUnsupported() && !options.force){
      return false;
    }

    $(this).each(function(){
      new objectFit(this, options);
    });
  };

  function browserUnsupported() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ') > 0;
    var edge = ua.indexOf('Windows NT') > 0;
    var safari = ua.indexOf('Safari/537.78.2') > 0;

    return msie || safari || edge || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  }
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
