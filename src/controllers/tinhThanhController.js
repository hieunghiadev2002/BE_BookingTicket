const tinhThanhService = require('../services/tinhThanhService');
class tinhThanhController {
  constructor(){
    this.tinhThanhService = tinhThanhService;
  } 
}
module.exports = new tinhThanhController();