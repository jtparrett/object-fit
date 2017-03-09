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
    var ua = window.navigator.userAgent.toLowerCase();
    var msie = ua.indexOf('msie') > 0;
    var safari = ua.indexOf('safari/537.78.2') > 0;
    var edge = us.indexOf('edge') > 0;
    return msie || safari || edge;
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