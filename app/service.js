exports = module.exports = function(send) {
  var crane = require('crane');
  
  
  var service = crane();
  
  service.work('test-linkback', send);
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/ms/Service';
exports['@require'] = [
  './handlers/send'
];
