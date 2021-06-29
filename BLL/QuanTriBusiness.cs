using System;
using System.Collections.Generic;
using System.Text;
using Models;
using BLL.Interface;
using DAL.Interface;

namespace BLL
{
    public class QuanTriBusiness : IQuanTriBusiness
    {
        private IQuanTriRepository _res;
        public QuanTriBusiness(IQuanTriRepository cos)
        {
            _res = cos;
        }
        public List<GIANGVIEN> DangNhapGiangVien(int role, string un, string pas)
        {
            return _res.DangNhapGiangVien(role, un, pas);
        }
        public List<SINHVIEN> LayDSSVTheoMaLopChuyenNganh(int ki, string malop)
        {
            return _res.LayDSSVTheoMaLopChuyenNganh(ki, malop);
        }
        public List<SINHVIEN> XemDSTheoMaLopMonHoc(string malopmonhoc)
        {
            return _res.XemDSTheoMaLopMonHoc(malopmonhoc);
        }
        public List<LOPMONHOC> LayDSLopMonHocTheoKi(int ki)
        {
            return _res.LayDSLopMonHocTheoKi(ki);
        }
        public List<RowAffected> SuaLopMonHoc(LOPMONHOC l)
        {
            return _res.SuaLopMonHoc(l);
        }
        public List<RowAffected> XoaLopMonHoc(string malopmonhoc)
        {
            return _res.XoaLopMonHoc(malopmonhoc);
        }
        public List<LOPMONHOC> TraGVLopMonHoc(string mgv, int ki)
        {
            return _res.TraGVLopMonHoc(mgv, ki);
        }
        public List<LOPMONHOC> TraSVLopMonHoc(int ki, string msv)
        {
            return _res.TraSVLopMonHoc(ki, msv);
        }
        public List<CHUONGTRINHDAOTAO> LayDanhSachCTDT()
        {
            return _res.LayDanhSachCTDT();
        }
        public List<RowAffected> ThemCTDT(CHUONGTRINHDAOTAO c)
        {
         
            return _res.ThemCTDT(c);
        }
        public List<RowAffected> SuaCTDT(CHUONGTRINHDAOTAO c)
        {
            return _res.SuaCTDT(c);
        }
        public List<RowAffected> XoaCTDT(string ma)
        {
            return _res.XoaCTDT(ma);
        }
        public List<CHUONGTRINHDAOTAO> TimCTDTTheoTen(string ten)
        {
            return _res.TimCTDTTheoTen(ten);
        }
        public List<LOPMONHOC> XemDSLopMonHocTheoKi(int ki)
        {
            return _res.XemDSLopMonHocTheoKi(ki);
        }
        public List<SINHVIEN> DiemMonLopChuyenNganh(string mamon, string mlcn)
        {
            return _res.DiemMonLopChuyenNganh(mamon, mlcn);
        }
        public List<MONHOC> LayDSMHTienQuyet(string mamon)
        {
            return _res.LayDSMHTienQuyet(mamon);
        }
        public List<LOPMONHOC> DSLopMonHocDaDong()
        {
            return _res.DSLopMonHocDaDong();
        }
        public List<LOPMONHOC> DSLopMonHocDaHuy()
        {
            return _res.DSLopMonHocDaHuy();
        }
        public ServiceResult HuyLop(string[] arr_ma)
        {
            var rs = new ServiceResult();
            rs.Data = _res.HuyLop(arr_ma);
            return rs;
        }
        public ServiceResult DongLop(string[] arr)
        {
            var rs = new ServiceResult();
            rs.Data = _res.DongLop(arr);
            return rs;
            //return _res.DongLop(ma);
        }
        public ServiceResult MoLop(string[] arr)
        {
            var rs = new ServiceResult();
            rs.Data = _res.MoLop(arr);
            return rs;
            //return _res.DongLop(ma);
        }
        public List<RowAffected> DongAll()
        {
            return _res.DongAll();
        }
        public List<RowAffected> MoAll()
        {
            return _res.MoAll();
        }
        public List<LOPMONHOC> PhanTrangLopDaDong(int currPage, int recodperpage, int pagesize)
        {
            return _res.PhanTrangLopDaDong(currPage, recodperpage, pagesize);
        }
        public List<GIANGVIEN> DSGV()
        {
            return _res.DSGV();
        }
        public List<RowAffected> ThemMoiLopMonHoc(LOPMONHOC l)
        {
            return _res.ThemMoiLopMonHoc(l);
        }
        public List<LOP> LayTTLop(string ml)
        {
            return _res.LayTTLop(ml);
        }
        public List<LOPMONHOC> LayDSLHP_SV(string masv)
        {
            return _res.LayDSLHP_SV(masv);
        }
        public List<TRANGTHAIACC> TrangThaiAcc()
        {
            return _res.TrangThaiAcc();
        }
        public List<TRANGTHAIACC> DongMoTruyCap(string lenh)
        {
            return _res.DongMoTruyCap(lenh);
        }

    }
}
