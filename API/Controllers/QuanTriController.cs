using BLL.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;
using API.Models;
using GIANGVIEN = Models.GIANGVIEN;
using SINHVIEN = Models.SINHVIEN;
using MONHOC = Models.MONHOC;
using Microsoft.EntityFrameworkCore;
using LOPMONHOC = Models.LOPMONHOC;
using CHUONGTRINHDAOTAO = Models.CHUONGTRINHDAOTAO;
//using System.Web.Http;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuanTriController : ControllerBase
    {
        private IQuanTriBusiness _bus;
        private readonly UTEHYRegistrationSubjectContext _context;
        public QuanTriController(IQuanTriBusiness bus, UTEHYRegistrationSubjectContext context)
        {
            _bus = bus;
            _context = context;
        }   

        [Route("dangnhap")]
        [HttpGet]
        public List<GIANGVIEN> DangNhap(int role,string us,string pas)
        {
            return _bus.DangNhapGiangVien(role,us,pas);
        }




        [Route("LayDSSVTheoMaLopChuyenNganh/{ki}/{malop}")]
        [HttpGet]
        public List<SINHVIEN> LayDSSVTheoMaLopChuyenNganh(int ki, string malop)
        {
            return _bus.LayDSSVTheoMaLopChuyenNganh(ki, malop);
        }




        [Route("XemDSTheoMaLopMonHoc/{malopmonhoc}")]
        [HttpGet]
        public List<SINHVIEN> XemDSTheoMaLopMonHoc(string malopmonhoc)
        {
            return _bus.XemDSTheoMaLopMonHoc(malopmonhoc);
        }



        [Route("LayDSLopMonHocTheoKi/{ki}")]
        [HttpGet]
        public List<LOPMONHOC> LayDSLopMonHocTheoKi(int ki)
        {
            return _bus.LayDSLopMonHocTheoKi(ki);
        }

        [Route("SuaLopMonHoc")]
        [HttpPut]
        public List<RowAffected> SuaLopMonHoc([FromBody]LOPMONHOC l)
        {
            return _bus.SuaLopMonHoc(l);
        }
        [Route("XoaLopMonHoc")]
        [HttpDelete]
        public List<RowAffected> XoaLopMonHoc(string malopmonhoc)
        {
            return _bus.XoaLopMonHoc(malopmonhoc);
        }
        [Route("TraGVLopMonHoc/{mgv}/{ki}")]
        [HttpGet]
        public List<LOPMONHOC> TraGVLopMonHoc(string mgv, int ki)
        {
            return _bus.TraGVLopMonHoc(mgv, ki);
        }
        [Route("TraSVLopMonHoc/{ki}/{msv}")]
        [HttpGet]
        public List<LOPMONHOC> TraSVLopMonHoc(int ki, string msv)
        {
            return _bus.TraSVLopMonHoc(ki, msv);
        }
        [Route("LayDanhSachCTDT")]
        [HttpGet]
        public List<CHUONGTRINHDAOTAO> LayDanhSachCTDT()
        {
            return _bus.LayDanhSachCTDT();
        }
        [Route("ThemCTDT")]
        [HttpPost]
        public List<RowAffected> ThemCTDT(CHUONGTRINHDAOTAO c)
        {
            return _bus.ThemCTDT(c);
        }
        [Route("SuaCTDT")]
        [HttpPut]
        public List<RowAffected> SuaCTDT(CHUONGTRINHDAOTAO c)
        {
            return _bus.SuaCTDT(c);
        }
        [Route("XoaCTDT")]
        [HttpDelete]
        public List<RowAffected> XoaCTDT(string ma)
        {
            return _bus.XoaCTDT(ma);
        }
        [Route("TimCTDTTheoTen")]
        [HttpGet]
        public List<CHUONGTRINHDAOTAO> TimCTDTTheoTen(string ten)
        {
            return _bus.TimCTDTTheoTen(ten);
        }
        [Route("XemDSLopMonHocTheoKi/{ki}")]
        [HttpGet]
        public List<LOPMONHOC> XemDSLopMonHocTheoKi(int ki)
        {
            return _bus.XemDSLopMonHocTheoKi(ki);
        }

        [Route("DiemMonLopChuyenNganh/{mamon}/{mlcn}")]
        [HttpGet]
        public List<SINHVIEN> DiemMonLopChuyenNganh(string mamon, string mlcn)
        {
            return _bus.DiemMonLopChuyenNganh(mamon, mlcn);

        }
        [Route("LayDSMHTienQuyet/{mamon}")]
        [HttpGet]
        public List<MONHOC> LayDSMHTienQuyet(string mamon)
        {
            return _bus.LayDSMHTienQuyet(mamon);
        }
        [Route("DSLopMonHocDaDong")]
        [HttpGet]
        public List<LOPMONHOC> DSLopMonHocDaDong()
        {
            return _bus.DSLopMonHocDaDong();
        }
        [Route("DSLopMonHocDaHuy")]
        [HttpGet]
        public List<LOPMONHOC> DSLopMonHocDaHuy()
        {
            return _bus.DSLopMonHocDaHuy();
        }
        [Route("HuyLop")]
        [HttpPut]
        public ServiceResult HuyLop([FromBody] string[] arr_ma)
        {
            return _bus.HuyLop(arr_ma);
        }
        [Route("DongLop")]
        [HttpPut]
        public ServiceResult DongLop([FromBody] string[] array)
        {
            return _bus.DongLop(array);
        }
        [Route("DongAll")]
        [HttpPut]
        public List<RowAffected> DongAll()
        {
            return _bus.DongAll();
        }
        [Route("MoAll")]
        [HttpPut]
        public List<RowAffected> MoAll()
        {
            return _bus.MoAll();
        }
        [Route("PhanTrangLopDaDong/{currPage}/{recodperpage}/{pagesize}")]
        [HttpGet]
        public List<LOPMONHOC> PhanTrangLopDaDong(int currPage, int recodperpage, int pagesize)
        {
            return _bus.PhanTrangLopDaDong(currPage, recodperpage, pagesize);
        }
        [Route("DSGV")]
        [HttpGet]
        public List<GIANGVIEN> DSGV()
        {
            return _bus.DSGV();
        }
        [Route("ThemMoiLopMonHoc")]
        [HttpPost]
        public List<RowAffected> ThemMoiLopMonHoc([FromBody]LOPMONHOC l)
        {
            return _bus.ThemMoiLopMonHoc(l);
        }
        [Route("MoLop")]
        [HttpPut]
        public ServiceResult MoLop(string[] arr)
        {
            return _bus.MoLop(arr);
        }
        [Route("LayTTLop/{ml}")]
        [HttpGet]
        public List<LOP> LayTTLop(string ml)
        {
            return _bus.LayTTLop(ml);
        }
        [Route("LayDSLHPSV/{masv}")]
        [HttpGet]
        public List<LOPMONHOC> LayDSLHP_SV(string masv)
        {
            return _bus.LayDSLHP_SV(masv);
        }
        [Route("TrangThaiAcc")]
        [HttpGet]
        public List<TRANGTHAIACC> TrangThaiAcc()
        {
            return _bus.TrangThaiAcc();
        }
        [Route("DongMoTruyCap")]
        [HttpGet]
        public List<TRANGTHAIACC> DongMoTruyCap(string lenh)
        {
            return _bus.DongMoTruyCap(lenh);
        }
    }
}
