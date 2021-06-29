using API.Models;
using BLL.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SINHVIEN = Models.SINHVIEN;
using CHUONGTRINHDAOTAO = Models.CHUONGTRINHDAOTAO;
using MONHOC = Models.MONHOC;
using LOPMONHOC = Models.LOPMONHOC;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NguoiDungController : ControllerBase
    {
        private INguoiDungBusiness _bus;
        private readonly UTEHYRegistrationSubjectContext _context;
        public NguoiDungController(INguoiDungBusiness bus, UTEHYRegistrationSubjectContext context)
        {
            _bus = bus;
            _context = context;
        }
        [Route("dangnhap")]
        [HttpGet]
        public List<SINHVIEN> DangNhap(int role, string us, string pas)
        {
            return _bus.DangNhapSinhVien(role, us, pas);
        }
        [Route("CapLaiMatKhau")]
        [HttpGet]
        public List<RowAffected> CapLaiMatKhau(string masv, string pass)
        {
            return _bus.CapLaiMatKhau(masv, pass);
        }
        [Route("SuaThongTinCaNhan")]
        [HttpPut]
        public List<RowAffected> SuaThongTinCaNhan([FromBody]SINHVIEN sv)
        {
            return _bus.SuaThongTinCaNhan(sv);
        }
        [Route("XemCTDT/{masv}")]
        [HttpGet]
        public List<CHUONGTRINHDAOTAO> XemCTDT(string masv)
        {
            return _bus.XemCTDT(masv);
        }
        [Route("XemKhungChuongTrinh/{masv}")]
        [HttpGet]
        public List<KHUNGCHUONGTRINH> XemKhungChuongTrinh(string masv)
        {
            return _bus.XemKhungChuongTrinh(masv);
        }
        [Route("XemTienDoHoanThanhCT/{masv}")]
        [HttpGet]
        public List<TIENDOHOANTHANH> XemTienDoHoanThanhCT(string masv)
        {
            return _bus.XemTienDoHoanThanhCT(masv);
        }
        [Route("TimThongTinHocPhan")]
        [HttpGet]
        public List<MONHOC> TimThongTinHocPhan(string ten)
        {
            return _bus.TimThongTinHocPhan(ten);
        }
        [Route("DiemMonHoc/{masv}/{mamh}")]
        [HttpGet]
        public List<MONHOC> DiemMonHoc(string masv, string mamh)
        {
            return _bus.DiemMonHoc(masv, mamh);
        }
        [Route("DangKiLopMonHoc")]
        [HttpPost]
        public List<MESSAGE> DangKiLopMonHoc(string masv, string mh, string mlmh)
        {
            return _bus.DangKiLopMonHoc(masv, mh, mlmh);
        }
        [Route("DSLopMonHocCua1SV/{ki}/{masv}")]
        [HttpGet]
        public List<LOPMONHOC> DSLopMonHocCua1SV(int ki, string masv)
        {
            return _bus.DSLopMonHocCua1SV(ki, masv);
        }
        [Route("XoaLopMonHocDaDangKi/{mlmh}/{masv}")]
        [HttpDelete]
        public List<RowAffected> XoaLopMonHocDaDangKi(string mlmh, string masv)
        {
            return _bus.XoaLopMonHocDaDangKi(mlmh, masv);
        }
        [Route("TraCacMonTrongNhomTuChon/{ma}")]
        [HttpGet]
        public List<MONHOC> TraCacMonTrongNhomTuChon(string ma)
        {
            return _bus.TraCacMonTrongNhomTuChon(ma);
        }
        [Route("TongSoTinChiDaTichLuy/{masv}")]
        [HttpGet]
        public List<TONGTINCHIDATICHLUY> TongSoTinChiDaTichLuy(string masv)
        {
            return _bus.TongSoTinChiDaTichLuy(masv);
        }
        [Route("DSTuChonCua1HocKi/{ki}")]
        [HttpGet]
        public List<MONHOC> DSTuChonCua1HocKi(int ki)
        {
            return _bus.DSTuChonCua1HocKi(ki);
        }
        [Route("LayTTSV/{masv}")]
        [HttpGet]
        public List<SINHVIEN> LayTTSV(string masv)
        {
            return _bus.LayTTSV(masv);
        }
        [Route("SoTCDaDangKi/{masv}/{ki}/{nhomtc}")]
        [HttpGet]
        public List<SOTCDADANGKI> SoTCDaDangKi(string masv, int ki, string nhomtc)
        {
            return _bus.SoTCDaDangKi(masv, ki, nhomtc);
        }
        [Route("ChiTietHPById/{id}")]
        [HttpGet]
        public List<MONHOC> ChiTietHPById(string id)
        {
            return _bus.ChiTietHPById(id);
        }
        [Route("DSHP")]
        [HttpGet]
        public List<MONHOC> DSHP()
        {
            return _bus.DSHP();
        }
        [Route("DSTQ")]
        [HttpGet]
        public List<TIENQUYET> DSTQ()
        {
            return _bus.DSTQ();
        }
        [Route("DoiMatKhau")]
        [HttpPut]
        public List<RowAffected> DoiMatKhau([FromBody] SINHVIEN sv)
        {
            return _bus.DoiMatKhau(sv);
        }
    }
}
