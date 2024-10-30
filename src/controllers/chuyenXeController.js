const chuyenXeService = require('../services/chuyenXeService');
const xeService = require('../services/xeService');
const seatService = require('../services/SeatService');
const chiTietGheService = require('../services/chiTietGheService');
const HttpStatusCodes = require('../common/httpStatusCodes');
const viTriGheService = require('../services/viTriGheService');
const { getPrefixBySoCho } = require('../utils/utils');

class chuyenXeController {
  constructor() {}
  async getChuyenXes(req, res) {
    try {
      //get list
      const listChuyenXes = await chuyenXeService.getListChuyenXe();
      if (!listChuyenXes) {
        return res.status(400).json({
          status: 'false',
          message: 'Get all routes failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get all routes',
        data: listChuyenXes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async postChuyenXe(req, res) {
    try {
      const { ngayDi, ngayDen, giaChuyenXe, soChoTrong, tuyenXe, xe } =
        req.body;
      const newChuyenXe = await chuyenXeService.postChuyenXe({
        ngayDi,
        ngayDen,
        giaChuyenXe,
        soChoTrong,
        tuyenXe,
        xe,
      });

      if (!newChuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Create route failed',
        });
      }

      console.log('Đã thêm Chuyến Xe thành công');
      const idXe = newChuyenXe.xe;
      console.log('ID xe: ' + idXe);
      const timXe = await xeService.getXeById(idXe);
      console.log('Tìm xe: ' + timXe);
      if (!timXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Get Xe failed',
        });
      }
      //loi o day
      const soCho = timXe.sucChua;
      console.log('Số chỗ: ' + soCho);
      const prefix = getPrefixBySoCho(soCho);
      if (prefix) {
        const danhSachViTriGhe =
          await viTriGheService.getViTriGheByPrefix(prefix);
        console.log('Danh sách vị trí ghế: ' + danhSachViTriGhe);
        if (!danhSachViTriGhe || danhSachViTriGhe.length === 0) {
          return res.status(400).json({
            status: 'false',
            message: 'Không có vị trí ghế nào',
          });
        }

        for (let ViTriGhe of danhSachViTriGhe) {
          console.log('Vị trí ghế: ' + ViTriGhe);
          const newChiTietGhe = await chiTietGheService.createChiTietGhe({
            vitriGhe: ViTriGhe._id,
            chuyenXe: newChuyenXe._id,
            trangThai: 'Trống',
          });
          console.log('id chi tiet ghe: ' + newChiTietGhe.ViTriGhe);
          console.log('Chi tiết ghế: ' + newChiTietGhe);
          if (!newChiTietGhe) {
            return res.status(400).json({
              status: 'false',
              message: 'Create seat failed',
            });
          }
        }
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Create route and seat details saved',
        data: newChuyenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  async getChuyenXeByTuyenXeId(req, res) {
    try {
      //12-02-2002
      const { tuyenXeId, ngayDi } = req.query;
      
      const chuyenXe = await chuyenXeService.getChuyenXeByTuyenXeId({tuyenXeId, ngayDi});
      if (!chuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Get route failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get route',
        data: chuyenXe,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
}
module.exports = new chuyenXeController();
