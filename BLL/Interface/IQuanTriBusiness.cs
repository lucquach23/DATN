using System;
using System.Collections.Generic;
using System.Text;
using Models;

namespace BLL.Interface
{
    public interface IQuanTriBusiness
    {
        public List<GIANGVIEN> DangNhapGiangVien(int role, string un, string pas);
        public List<SINHVIEN> LayDSSVTheoMaLopChuyenNganh(int ki, string malop);
        public List<SINHVIEN> XemDSTheoMaLopMonHoc(string malopmonhoc);
        public List<LOPMONHOC> LayDSLopMonHocTheoKi(int ki);
        public List<RowAffected> SuaLopMonHoc(LOPMONHOC l);
        public List<RowAffected> XoaLopMonHoc(string malopmonhoc);
        public List<LOPMONHOC> TraGVLopMonHoc(string mgv, int ki);
        public List<LOPMONHOC> TraSVLopMonHoc(int ki, string msv);
        public List<CHUONGTRINHDAOTAO> LayDanhSachCTDT();
        public List<RowAffected> ThemCTDT(CHUONGTRINHDAOTAO c);
        public List<RowAffected> SuaCTDT(CHUONGTRINHDAOTAO c);
        public List<RowAffected> XoaCTDT(string ma);
        public List<CHUONGTRINHDAOTAO> TimCTDTTheoTen(string ten);
        public List<LOPMONHOC> XemDSLopMonHocTheoKi(int ki);
        public List<SINHVIEN> DiemMonLopChuyenNganh(string mamon, string mlcn);
        public List<MONHOC> LayDSMHTienQuyet(string mamon);
        public List<LOPMONHOC> DSLopMonHocDaDong();
        public List<LOPMONHOC> DSLopMonHocDaHuy();
        public ServiceResult HuyLop(string[] arr_ma);
        public ServiceResult DongLop(string[] arr);
        public List<RowAffected> DongAll();
        public List<RowAffected> MoAll();
        public List<LOPMONHOC> PhanTrangLopDaDong(int currPage, int recodperpage, int pagesize);
        public List<GIANGVIEN> DSGV();
        public List<RowAffected> ThemMoiLopMonHoc(LOPMONHOC l);
        public ServiceResult MoLop(string[] arr);
        public List<LOP> LayTTLop(string ml);
        public List<LOPMONHOC> LayDSLHP_SV(string masv);
        public List<TRANGTHAIACC> TrangThaiAcc();
        public List<TRANGTHAIACC> DongMoTruyCap(string lenh);
    }
}
