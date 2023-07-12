(function (window) {
  var defaultViewPort = {
    initialScale: 1.0,
  };
  var document = window.document;
  var meta = document.querySelector('head meta[name="viewport"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
  }
  var viewPortInput = '<%= VIEW_PORT %>';
  var viewPortValues = defaultViewPort;
  if (viewPortInput && typeof viewPortInput === 'object') {
    viewPortValues = viewPortInput;
  }
  var _a = viewPortValues.initialScale,
    initialScale = _a === void 0 ? defaultViewPort.initialScale : _a,
    width = viewPortValues.width,
    height = viewPortValues.height,
    userScalable = viewPortValues.userScalable,
    minimumScale = viewPortValues.minimumScale,
    maximumScale = viewPortValues.maximumScale;
  var content = ['initial-scale='.concat(initialScale)];
  if (width) {
    content.push('width='.concat(width));
  }
  if (height) {
    content.push('height='.concat(height));
  }
  if (typeof userScalable === 'boolean') {
    content.push('user-scalable='.concat(userScalable ? 'yes' : 'no'));
  } else if (typeof userScalable === 'string') {
    var lcUserScalable = ''.concat(userScalable).toLowerCase();
    if (lcUserScalable === 'yes') {
      content.push('user-scalable=yes');
    } else if (lcUserScalable === 'no') {
      content.push('user-scalable=no');
    } else {
      console.error('userScalable='.concat(JSON.stringify(userScalable), ' is an unknown value'));
    }
  }
  if (minimumScale) {
    content.push('minimum-scale='.concat(minimumScale));
  }
  if (maximumScale) {
    content.push('maximum-scale='.concat(maximumScale));
  }
  meta.setAttribute('content', content.join(', '));
})(window);
