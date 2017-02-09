$(function(){
  var objectFit = function(el){
    this.el = $(el);
    this.src = this.el.attr('src');
    this.createEl();
    this.el.remove();
  };

  objectFit.prototype.createEl = function(){
    var self = this;
    $('<div />', {
      class: self.el.attr('class') + ' object-fit',
      style: 'background-image: url(' + self.src + ')'
    })
    .insertAfter(self.el);
  };

  function browserUnsupported() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ') > 0;
    var safari = ua.indexOf('Safari/537.78.2') > 0;

    if(safari){
        $('html').addClass('is-safari');
    }

    return msie || safari || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  }

  $.fn.objectFit = function(){
    if(!browserUnsupported()){
      return false;
    }

    $(this).each(function(){
      new objectFit(this);
    });
  };
}(jQuery));