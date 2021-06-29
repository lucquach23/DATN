using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Lopmonhoc
    {
        public Lopmonhoc()
        {
            Dangkis = new HashSet<Dangki>();
        }

        public int IdLopMonHoc { get; set; }
        public string MaLopMonHoc { get; set; }
        public string MaMonHoc { get; set; }
        public string MaGiangVien { get; set; }
        public int? MinSv { get; set; }
        public int? MaxSv { get; set; }
        public string PhongHoc { get; set; }
        public string ThoiGian { get; set; }
        public string TuanHoc { get; set; }
        public int? HocKi { get; set; }
        public int? TrangThaiLop { get; set; }
        public DateTime? CretaedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }

        public virtual ICollection<Dangki> Dangkis { get; set; }
    }
}
