using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace API.Models
{
    public partial class UTEHYRegistrationSubjectContext : DbContext
    {
        public UTEHYRegistrationSubjectContext()
        {
        }

        public UTEHYRegistrationSubjectContext(DbContextOptions<UTEHYRegistrationSubjectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Chuongtrinhdaotao> Chuongtrinhdaotaos { get; set; }
        public virtual DbSet<Ctdtmonhoc> Ctdtmonhocs { get; set; }
        public virtual DbSet<Dangki> Dangkis { get; set; }
        public virtual DbSet<Giangvien> Giangviens { get; set; }
        public virtual DbSet<Khoa> Khoas { get; set; }
        public virtual DbSet<Lop> Lops { get; set; }
        public virtual DbSet<Lopmonhoc> Lopmonhocs { get; set; }
        public virtual DbSet<Monhoc> Monhocs { get; set; }
        public virtual DbSet<Monhoctienquyet> Monhoctienquyets { get; set; }
        public virtual DbSet<Nganhdaotao> Nganhdaotaos { get; set; }
        public virtual DbSet<Sinhvien> Sinhviens { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=ADMIN\\SQLEXPRESS;Initial Catalog=UTEHY.RegistrationSubject;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Account>(entity =>
            {
                entity.ToTable("Account");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("role");

                entity.Property(e => e.Token)
                    .HasColumnType("ntext")
                    .HasColumnName("token");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<Chuongtrinhdaotao>(entity =>
            {
                entity.HasKey(e => e.MaChuongTrinhDaoTao)
                    .HasName("PK_CHUONGTRINHDAOTAO_1");

                entity.ToTable("CHUONGTRINHDAOTAO");

                entity.Property(e => e.MaChuongTrinhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.HeDaoTao).HasMaxLength(200);

                entity.Property(e => e.MaNganhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MoTa).HasColumnType("ntext");

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.NguoiBanHanh).HasMaxLength(500);

                entity.Property(e => e.TenChuongTrinhDaoTao).HasMaxLength(200);

                entity.HasOne(d => d.MaNganhDaoTaoNavigation)
                    .WithMany(p => p.Chuongtrinhdaotaos)
                    .HasForeignKey(d => d.MaNganhDaoTao)
                    .HasConstraintName("FK_CHUONGTRINHDAOTAO_NGANHDAOTAO");
            });

            modelBuilder.Entity<Ctdtmonhoc>(entity =>
            {
                entity.HasKey(e => e.IdCtdtmonHoc);

                entity.ToTable("CTDTMONHOC");

                entity.Property(e => e.IdCtdtmonHoc).HasColumnName("IdCTDTMonHoc");

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.HocKi)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LoaiTuChon)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MaChuongTrinhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.NhomNganh)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SoTctcmax).HasColumnName("SoTCTCMax");

                entity.HasOne(d => d.MaChuongTrinhDaoTaoNavigation)
                    .WithMany(p => p.Ctdtmonhocs)
                    .HasForeignKey(d => d.MaChuongTrinhDaoTao)
                    .HasConstraintName("FK_CTDTMONHOC_CHUONGTRINHDAOTAO");

                entity.HasOne(d => d.MaMonHocNavigation)
                    .WithMany(p => p.Ctdtmonhocs)
                    .HasForeignKey(d => d.MaMonHoc)
                    .HasConstraintName("FK_CTDTMONHOC_MonHoc");
            });

            modelBuilder.Entity<Dangki>(entity =>
            {
                entity.HasKey(e => e.MaDangKi);

                entity.ToTable("DANGKI");

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.MaLopMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaSinhVien)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.HasOne(d => d.MaLopMonHocNavigation)
                    .WithMany(p => p.Dangkis)
                    .HasForeignKey(d => d.MaLopMonHoc)
                    .HasConstraintName("FK_DANGKI_LOPMONHOC");

                entity.HasOne(d => d.MaSinhVienNavigation)
                    .WithMany(p => p.Dangkis)
                    .HasForeignKey(d => d.MaSinhVien)
                    .HasConstraintName("FK_DANGKI_SINHVIEN");
            });

            modelBuilder.Entity<Giangvien>(entity =>
            {
                entity.HasKey(e => e.MaGiangVien)
                    .HasName("PK_GiangVien");

                entity.ToTable("GIANGVIEN");

                entity.Property(e => e.MaGiangVien)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ChucVu).HasMaxLength(200);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.HocVi).HasMaxLength(200);

                entity.Property(e => e.MaKhoa)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaNganhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.NgachVienChuc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.QueQuan).HasMaxLength(200);

                entity.Property(e => e.SinhNhat).HasColumnType("date");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TenGiangVien).HasMaxLength(200);
            });

            modelBuilder.Entity<Khoa>(entity =>
            {
                entity.HasKey(e => e.MaKhoa);

                entity.ToTable("KHOA");

                entity.Property(e => e.MaKhoa)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.MoTa).HasMaxLength(200);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.TenKhoa).HasMaxLength(200);
            });

            modelBuilder.Entity<Lop>(entity =>
            {
                entity.HasKey(e => e.MaLop)
                    .HasName("PK_LOPCHUYENNGANH");

                entity.ToTable("LOP");

                entity.Property(e => e.MaLop)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.MaGiaoVienChuNhiem)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaNganhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.TenLop).HasMaxLength(200);

                entity.HasOne(d => d.MaGiaoVienChuNhiemNavigation)
                    .WithMany(p => p.Lops)
                    .HasForeignKey(d => d.MaGiaoVienChuNhiem)
                    .HasConstraintName("FK_LOPCHUYENNGANH_GiangVien");

                entity.HasOne(d => d.MaNganhDaoTaoNavigation)
                    .WithMany(p => p.Lops)
                    .HasForeignKey(d => d.MaNganhDaoTao)
                    .HasConstraintName("FK_LOP_NGANHDAOTAO");
            });

            modelBuilder.Entity<Lopmonhoc>(entity =>
            {
                entity.HasKey(e => e.MaLopMonHoc);

                entity.ToTable("LOPMONHOC");

                entity.Property(e => e.MaLopMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CretaedDate).HasColumnType("date");

                entity.Property(e => e.IdLopMonHoc)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idLopMonHoc");

                entity.Property(e => e.MaGiangVien)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaxSv).HasColumnName("MaxSV");

                entity.Property(e => e.MinSv).HasColumnName("MinSV");

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.PhongHoc).HasMaxLength(100);

                entity.Property(e => e.ThoiGian).HasMaxLength(200);

                entity.Property(e => e.TuanHoc)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Monhoc>(entity =>
            {
                entity.HasKey(e => e.MaMonHoc)
                    .HasName("PK_MonHoc");

                entity.ToTable("MONHOC");

                entity.Property(e => e.MaMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.KhaiQuatChung).HasColumnType("ntext");

                entity.Property(e => e.Link).HasColumnType("ntext");

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.NhomTuChon)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TenMonHoc).HasMaxLength(200);
            });

            modelBuilder.Entity<Monhoctienquyet>(entity =>
            {
                entity.HasKey(e => e.IdMonHocTienQuyet)
                    .HasName("PK_MonHocTienQuyet");

                entity.ToTable("MONHOCTIENQUYET");

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.MaMonHoc)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MaMonHocTienQuyet)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");
            });

            modelBuilder.Entity<Nganhdaotao>(entity =>
            {
                entity.HasKey(e => e.MaNganhDaoTao);

                entity.ToTable("NGANHDAOTAO");

                entity.Property(e => e.MaNganhDaoTao)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.MaKhoa)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MoTa).HasMaxLength(200);

                entity.Property(e => e.ModifiedBy).HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.TenNganhDaoTao).HasMaxLength(200);

                entity.HasOne(d => d.MaKhoaNavigation)
                    .WithMany(p => p.Nganhdaotaos)
                    .HasForeignKey(d => d.MaKhoa)
                    .HasConstraintName("FK_NGANHDAOTAO_KHOA");
            });

            modelBuilder.Entity<Sinhvien>(entity =>
            {
                entity.HasKey(e => e.MaSinhVien);

                entity.ToTable("SINHVIEN");

                entity.Property(e => e.MaSinhVien)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AnhDaiDien).HasMaxLength(500);

                entity.Property(e => e.CreatedBy).HasMaxLength(200);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.MaLop)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("date");

                entity.Property(e => e.ModififedBy).HasMaxLength(200);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.QueQuan).HasMaxLength(500);

                entity.Property(e => e.SinhNhat).HasColumnType("date");

                entity.Property(e => e.SoDienThoai)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.TenSinhVien).HasMaxLength(200);

                entity.HasOne(d => d.MaLopNavigation)
                    .WithMany(p => p.Sinhviens)
                    .HasForeignKey(d => d.MaLop)
                    .HasConstraintName("FK_SINHVIEN_LOP");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
