using DAL.Helper;
using DAL.Interface;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public partial class DALNguoiDungRepository: INguoiDungRepository
    {
        private IDatabaseHelper _dbHelper;
        public DALNguoiDungRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        //1 dang nhap
        public List<SINHVIEN> DangNhapSinhVien(int role, string un, string pas)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DangNhap",
                     "@role", role,
                     "@un", un,
                     "@pass", pas);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<SINHVIEN>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //2
        public List<RowAffected> CapLaiMatKhau( string masv, string pass)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "CapLaiMatKhau",
                     "@masv", masv,
                     "@pass", pass
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
        //3
        public List<RowAffected> SuaThongTinCaNhan(SINHVIEN sv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "SuaThongTinCaNhan",
                            "@masv", sv.MaSinhVien,
                            "@TenSinhVien",sv.TenSinhVien ,
                            "@SinhNhat", sv.SinhNhat,
                            "@QueQuan", sv.QueQuan,
                            "@GioiTinh",sv.GioiTinh ,
                            "@Email" ,sv.Email,
                            "@SoDienThoai",sv.SoDienThoai ,
                            "@Password",sv.Password ,
                            "@AnhDaiDien",sv.AnhDaiDien
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
        //4
        public List<CHUONGTRINHDAOTAO> XemCTDT(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XemCTDT",
                     "@masv", masv
                  
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

        //5
        public List<KHUNGCHUONGTRINH> XemKhungChuongTrinh(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XemKhungChuongTrinh",
                     "@masv", masv

                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<KHUNGCHUONGTRINH>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //6
        public List<TIENDOHOANTHANH> XemTienDoHoanThanhCT(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XemTienDoHoanThanhCT",
                     "@masv", masv

                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TIENDOHOANTHANH>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //7
        public List<MONHOC> TimThongTinHocPhan(string ten)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "TimThongTinHocPhan",
                     "@ten", ten

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
        //8
        //9
        public List<MESSAGE> DangKiLopMonHoc(string masv,string mh,string mlmh)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DangKiLopMonHoc",
                     "@masv", masv,
                     "@mh",mh,
                     "@mlmh",mlmh

                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<MESSAGE>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //10
        public List<LOPMONHOC> DSLopMonHocCua1SV(int ki,string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DSLopMonHocCua1SV",
                     "@ki", ki,
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
        //11
        public List<RowAffected> XoaLopMonHocDaDangKi(string mlmh, string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "XoaLopMonHocDaDangKi",
                     "@mlmh", mlmh,
                     "@masv", masv


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
        //12
        public List<MONHOC> TraCacMonTrongNhomTuChon(string ma)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, 
                    "TraCacMonTrongNhomTuChon",
                     "@ma", ma
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

        //13
        public List<TONGTINCHIDATICHLUY> TongSoTinChiDaTichLuy(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "TongSoTinChiDaTichLuy",
                     "@masv", masv
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TONGTINCHIDATICHLUY>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //14 lấy danh sách môn học tiên quyết của 1 môn (mamon)
        // là cái 14 của bên quản trị


        //15
        public List<MONHOC> DSTuChonCua1HocKi(int ki)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "DSTuChonCua1HocKi",
                     "@ki", ki
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

        //16 
        public List<SINHVIEN> LayTTSV(string masv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "LayTTSV",
                     "@masv", masv
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

        //17
        public List<MONHOC> DiemMonHoc(string masv,string mamh)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "DiemMonHoc",
                     "@masv", masv, "@mamh",mamh
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

        //9.1
        public List<SOTCDADANGKI> SoTCDaDangKi(string masv, int ki,string nhomtc)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "SoTCDaDangKi",
                     "@masv", masv,
                     "@ki", ki,
                     "@nhomtc",nhomtc
                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<SOTCDADANGKI>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //18
        public List<MONHOC> ChiTietHPById(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "ChiTietHPById",
                    "@id",id
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
        public List<MONHOC> DSHP()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "DSHP"
                   
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
        public List<TIENQUYET> DSTQ()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError,
                    "DSTQ"

                     );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TIENQUYET>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<RowAffected> DoiMatKhau(SINHVIEN sv)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "DoiMatKhau",
                     "@masv", sv.MaSinhVien,
                     "@pas", sv.Password
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
    }
}
