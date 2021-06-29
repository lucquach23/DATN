using DAL.Helper;
using System;
using System.Collections.Generic;
using System.Text;
//using API.Models;
using DAL.Interface;
using Models;
using System.Linq;

namespace DAL
{
    public partial class DALQuanTriRepository: IQuanTriRepository
    {
        private IDatabaseHelper _dbHelper;
        public DALQuanTriRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        //1 Đăng nhập
        public List<GIANGVIEN> DangNhapGiangVien(int role, string un,string pas)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DangNhap",
                     "@role", role, 
                     "@un", un, 
                     "@pass",pas);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
               // return (GIANGVIEN)dt;
               return dt.ConvertTo<GIANGVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //2
        public List<SINHVIEN> LayDSSVTheoMaLopChuyenNganh(int ki, string malop)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayDSSVTheoMaLopChuyenNganh",
                     "@ki", ki,
                     "@malop", malop
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
               
                return dt.ConvertTo<SINHVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //3
        public List<SINHVIEN> XemDSTheoMaLopMonHoc(string malopmonhoc)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XemDSTheoMaLopMonHoc",
                     "@malopmonhoc", malopmonhoc);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<SINHVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //4
        //5
        public List<LOPMONHOC> LayDSLopMonHocTheoKi(int ki)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayDSLopMonHocTheoKi",
                     "@ki", ki);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        //6
        public List<RowAffected> SuaLopMonHoc(LOPMONHOC l)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "SuaLopMonHoc",
                     "@MaLopMonHoc", l.MaLopMonHoc,
                     "@PhongHoc",l.PhongHoc,
                     "@ThoiGian", l.ThoiGian,
                     "@TuanHoc", l.TuanHoc
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //7
        public List<RowAffected> XoaLopMonHoc(string malopmonhoc)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XoaLopMonHoc",
                     "@ma", malopmonhoc);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        //8
        public List<LOPMONHOC> TraGVLopMonHoc(string mgv,int ki)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "TraGVLopMonHoc",
                     "@magv", mgv,
                     "@ki",ki
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //9
        public List<LOPMONHOC> TraSVLopMonHoc( int ki,string msv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "TraSVLopMonHoc",
                     "@masv", msv,
                     "@ki", ki
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //10 
        //11
        //11.1 Lay danh sach chuong trinh dao tao
        public List<CHUONGTRINHDAOTAO> LayDanhSachCTDT()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayDanhSachCTDT");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CHUONGTRINHDAOTAO>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //11.2 them ctdt
        public List<RowAffected> ThemCTDT(CHUONGTRINHDAOTAO c)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "ThemCTDT",
                    "@ma",c.MaChuongTrinhDaoTao,
                    "@ten",c.TenChuongTrinhDaoTao ,
                    "@ttc",c.TongSoTinChi ,
                    "@he" ,c.HeDaoTao ,
                    "@mota",c.MoTa ,
                    "@nganhdt",c.MaNganhDaoTao
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //11.3 sua ctdt
        public List<RowAffected> SuaCTDT(CHUONGTRINHDAOTAO c)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "SuaCTDT",
                    "@ma", c.MaChuongTrinhDaoTao,
                    "@ten", c.TenChuongTrinhDaoTao,
                    "@ttc", c.TongSoTinChi,
                    "@he", c.HeDaoTao,
                    "@mota", c.MoTa,
                    "@nganhdt", c.MaNganhDaoTao
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //11.4 xoa ctdt
        public List<RowAffected> XoaCTDT(string ma)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XoaCTDT",
                    "@ma", ma
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //11.5 Tim kiem ctdt
        public List<CHUONGTRINHDAOTAO> TimCTDTTheoTen(string ten)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "TimCTDTTheoTen",
                    "@ten", ten
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<CHUONGTRINHDAOTAO>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //12
        //lấy danh sách lớp mở có số lượng sinh viên đăng kí theo kì
        public List<LOPMONHOC> XemDSLopMonHocTheoKi(int ki)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XemDSLopMonHocTheoKi",
                    "@ki", ki
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //13
        public List<SINHVIEN> DiemMonLopChuyenNganh(string mamon,string mlcn)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DiemMonLopChuyenNganh",
                    "@mamon", mamon,
                    "@malopchuyennganh", mlcn
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<SINHVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //14
        public List<MONHOC> LayDSMHTienQuyet(string mamon)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayDSMHTienQuyet",
                    "@mamon", mamon
                  
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<MONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LOPMONHOC> DSLopMonHocDaDong()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DSLopMonHocDaDongTheoKi"
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LOPMONHOC> DSLopMonHocDaHuy()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DSLopMonHocDaHuyTheoKi"
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int HuyLop(string[] arr_ma)
        {
            string msgError = "";
            int sl = 0;
            try
            {

                foreach (var i in arr_ma)
                {
                    var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "HuyLop", "@malmh", i);
                    if (!string.IsNullOrEmpty(msgError)) sl += 0;
                    sl += dt.Rows.Count;

                }
                //var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongLop", "@ma", ma);


                return sl;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DongLop(string[] arr)
        {
            string msgError = "";
            int sl = 0;
            try
            {
               
                foreach(var i in arr)
                {
                    var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongLop", "@ma", i);
                    if (!string.IsNullOrEmpty(msgError)) sl += 0;
                    sl += 1;

                }
                //var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongLop", "@ma", ma);
                
                   
                return sl;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int MoLop(string[] arr)
        {
            string msgError = "";
            int sl = 0;
            try
            {

                foreach (var i in arr)
                {
                    var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "MoLop", "@mlmh", i);
                    if (!string.IsNullOrEmpty(msgError)) sl += 0;
                    sl += 1;

                }
                //var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongLop", "@ma", ma);


                return sl;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<RowAffected> DongAll()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongAll"
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<RowAffected> MoAll()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "MoAll"
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LOPMONHOC> PhanTrangLopDaDong(int currPage, int recodperpage,int pagesize)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "PhanTrangLopDaDong", 
                    "@currPage", currPage,
                    "@recodperpage", recodperpage,
                    "@Pagesize", pagesize
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<GIANGVIEN> DSGV()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DSGV"
                   
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<GIANGVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<RowAffected> ThemMoiLopMonHoc(LOPMONHOC l)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "ThemMoiLopMonHoc",
                    "@mlmh", l.MaLopMonHoc,
                    "@mm", l.MaMonHoc,
                    "@mgv", l.MaGiangVien,
                    "@phong", l.PhongHoc,
                    "@time", l.ThoiGian,
                    "@tuan", l.TuanHoc,
                    "@ki", l.HocKi,
                    "@minsv", l.MinSV,
                    "@maxsv", l.MaxSV


                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<RowAffected>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LOP> LayTTLop(string ml)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayTTLop",
                    "@malop",ml
                    


                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOP>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<LOPMONHOC> LayDSLHP_SV(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "LayDSLHP_SV",
                    "@masv", masv



                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<LOPMONHOC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       
        public List<TRANGTHAIACC> DongMoTruyCap(string lenh)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DongMoTruyCap",
                    "@lenh", lenh



                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TRANGTHAIACC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<TRANGTHAIACC> TrangThaiAcc()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "TrangThaiAcc"
                   



                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TRANGTHAIACC>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
