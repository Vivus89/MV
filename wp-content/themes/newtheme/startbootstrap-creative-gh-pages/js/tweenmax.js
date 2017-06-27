$(document).ready(function() {

  $('.test1').textillate({
    initialDelay: 100,
    loop: true,
    in: {
      effect: 'fadeIn',
      sequence: true,
      delay: 50,
      sync: false
    },
    out: {
      effect: 'fadeOut',
      sequence: true,
      delay: 5
    }
  });

});

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})
(jQuery);

$(function() {
  var animatedText = $('#text').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(jQuery);
(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})
(jQuery);

$(function() {
  var animatedText = $('#text1').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});


(jQuery);
(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})

(jQuery);

$(function() {
  var animatedText = $('#text2').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});
(jQuery);

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})(jQuery);

$(function() {
  var animatedText = $('#text3').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(jQuery);
(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})

(jQuery);

$(function() {
  var animatedText = $('#text4').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(jQuery);

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})

(jQuery);

$(function() {
  var animatedText = $('#text5').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})
(jQuery);

$(function() {
  var animatedText = $('#text6').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})

(jQuery);

$(function() {
  var animatedText = $('#text7').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})
(jQuery);

$(function() {
  var animatedText = $('#text8').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});

(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})(jQuery);

$(function() {
  var animatedText = $('#text9').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});


(function($) {

  /**
   * jQuery.animationend
   * Retrievs the total amount of time, in miliseconds that
   * an element will be transitioned
   */
  $.fn.animationend = function() {

    // check the main transition duration property
    if (this.css('animation-duration')) {
      return Math.round(parseFloat(this.css('animation-duration')) * 1000);
    } else {
      // check the vendor transition duration properties
      if (this.css('-webkit-animation-duration')) return Math.round(parseFloat(this.css('-webkit-animation-duration')) * 1000);
      if (this.css('-moz-animation-duration')) return Math.round(parseFloat(this.css('-moz-animation-duration')) * 1000);
      if (this.css('-ms-animation-duration')) return Math.round(parseFloat(this.css('-ms-animation-duration')) * 1000);
      if (this.css('-o-animation-duration')) return Math.round(parseFloat(this.css('-o-animation-duration')) * 1000);
    }
    // if we're here, then no transition duration was found, return 0
    return 0;
  };

})(jQuery);

$(function() {
  var animatedText = $('#text10').textillate({
      autoStart: false
      // type: 'word'
    }),
    inEffect = animatedText.attr('data-in-effect'),
    outEffect = animatedText.attr('data-out-effect'),
    sync = false,
    animDelay = 0,

    // set the delay factor applied to each consecutive character
    delayScale = 1.5,

    // set the delay between each character
    delay = 50,
    animatedElements,
    resetKeyframes = function() {
      var newElements = [];
      animatedElements.each(function() {
        var el = $(this),
          newone = el.clone(true);
        el.before(newone);
      });
      animatedElements.remove();
      animatedElements = animatedText.find('.animated');
    },
    play = function() {
      animDelay = 0;
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused');
      });
    },
    setAnimDelay = function() {
      console.log('set ' + animDelay);
      resetKeyframes();
      animatedElements.each(function(i) {
        var d = sync ? delay : delay * i * delayScale;
        $(this).addClass('animated paused').css('animation-delay', (-(animDelay - d) + 'ms')).removeClass('paused').addClass('paused');
      });
    };
  $('#play').on('click', function() {
    play();
  });
  $('#pause').on('click', function() {
    animatedElements.addClass('paused');
  });
  $('.setAnimDelay').on('click', function() {
    var animDuration = animatedText.find('.animated').animationend(),
      ratio = parseFloat($(this).attr('data-value'));
    animDelay = parseFloat(animDuration * ratio);
    setAnimDelay(animDelay, 100);
  });

  // onLoad (timeOut 2000 to wait until animated spans are created)
  animatedText.on('inAnimationBegin.tlt', function() {
    setTimeout(function() {
      animatedElements = animatedText.find('.animated');
      console.log('set ' + animDelay);
      console.log(animatedElements.length);
      animatedElements.addClass('paused');
      animatedText.off('inAnimationBegin.tlt');
    }, 5000);
  });
  animatedText.textillate('start');
});
