using BLL.Interface;
using DAL.Interface;
using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public class NguoiDungBusiness:INguoiDungBusiness
    {
        private INguoiDungRepository _res;
        public NguoiDungBusiness(INguoiDungRepository cos)
        {
            _res = cos;
        }
        //1
        public List<SINHVIEN> DangNhapSinhVien(int role, string un, string pas)
        {
            return _res.DangNhapSinhVien(role, un, pas);
        }
        //2
        public List<RowAffected> CapLaiMatKhau(string masv, string pass)
        {
            return _res.CapLaiMatKhau(masv, pass);
        }
        public List<RowAffected> SuaThongTinCaNhan(SINHVIEN sv)
        {
            return _res.SuaThongTinCaNhan(sv);
        }
        public List<CHUONGTRINHDAOTAO> XemCTDT(string masv)
        {
            return _res.XemCTDT(masv);
        }
        public List<KHUNGCHUONGTRINH> XemKhungChuongTrinh(string masv)
        {
            return _res.XemKhungChuongTrinh(masv);
        }
        public List<TIENDOHOANTHANH> XemTienDoHoanThanhCT(string masv)
        {
            return _res.XemTienDoHoanThanhCT(masv);
        }
        public List<MONHOC> TimThongTinHocPhan(string ten)
        {
            return _res.TimThongTinHocPhan(ten);
        }
        public List<MESSAGE> DangKiLopMonHoc(string masv, string mh, string mlmh)
        {
            return _res.DangKiLopMonHoc(masv, mh, mlmh);
        }
        public List<LOPMONHOC> DSLopMonHocCua1SV(int ki, string masv)
        {
            return _res.DSLopMonHocCua1SV(ki, masv);
        }
        public List<RowAffected> XoaLopMonHocDaDangKi(string mlmh, string masv)
        {
            return _res.XoaLopMonHocDaDangKi(mlmh, masv);
        }
        public List<MONHOC> TraCacMonTrongNhomTuChon(string ma)
        {
            return _res.TraCacMonTrongNhomTuChon(ma);
        }
        public List<TONGTINCHIDATICHLUY> TongSoTinChiDaTichLuy(string masv)
        {
            return _res.TongSoTinChiDaTichLuy(masv);
        }
        public List<MONHOC> DSTuChonCua1HocKi(int ki)
        {
            return _res.DSTuChonCua1HocKi(ki);
        }
        public List<SINHVIEN> LayTTSV(string masv)
        {
            return _res.LayTTSV(masv);
        }
        public List<MONHOC> DiemMonHoc(string masv, string mamh)
        {
            return _res.DiemMonHoc(masv, mamh);
        }
        public List<SOTCDADANGKI> SoTCDaDangKi(string masv, int ki, string nhomtc)
        {
            return _res.SoTCDaDangKi(masv, ki, nhomtc);
        }
        public List<MONHOC> ChiTietHPById(string id)
        {
            return _res.ChiTietHPById(id);
        }
        public List<MONHOC> DSHP()
        {
            return _res.DSHP();
        }
        public List<TIENQUYET> DSTQ()
        {
            return _res.DSTQ();
        }
        public List<RowAffected> DoiMatKhau(SINHVIEN sv)
        {
            return _res.DoiMatKhau(sv);
        }
    }
}
