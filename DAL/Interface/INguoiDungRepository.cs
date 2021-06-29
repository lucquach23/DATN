using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interface
{
    public interface INguoiDungRepository
    {
        public List<SINHVIEN> DangNhapSinhVien(int role, string un, string pas);
        public List<RowAffected> CapLaiMatKhau(string masv, string pass);
        public List<RowAffected> SuaThongTinCaNhan(SINHVIEN sv);
        public List<CHUONGTRINHDAOTAO> XemCTDT(string masv);
        public List<KHUNGCHUONGTRINH> XemKhungChuongTrinh(string masv);
        public List<TIENDOHOANTHANH> XemTienDoHoanThanhCT(string masv);
        public List<MONHOC> TimThongTinHocPhan(string ten);
        public List<MESSAGE> DangKiLopMonHoc(string masv, string mh, string mlmh);
        public List<LOPMONHOC> DSLopMonHocCua1SV(int ki, string masv);
        public List<RowAffected> XoaLopMonHocDaDangKi(string mlmh, string masv);
        public List<MONHOC> TraCacMonTrongNhomTuChon(string ma);
        public List<TONGTINCHIDATICHLUY> TongSoTinChiDaTichLuy(string masv);
        public List<MONHOC> DSTuChonCua1HocKi(int ki);
        public List<SINHVIEN> LayTTSV(string masv);
        public List<MONHOC> DiemMonHoc(string masv, string mamh);
        public List<SOTCDADANGKI> SoTCDaDangKi(string masv, int ki, string nhomtc);
        public List<MONHOC> ChiTietHPById(string id);
        public List<MONHOC> DSHP();
        public List<TIENQUYET> DSTQ();
        public List<RowAffected> DoiMatKhau(SINHVIEN sv);
    }
}
