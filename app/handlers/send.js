exports = module.exports = function() {
  function handle(msg, next) {
    if (msg.data) {
      console.log('sms: ' + msg.data.toString());
    }
    //console.log(msg.body)
    msg.ack();
  }
  
  return [ handle ];
};

exports['@require'] = [];
