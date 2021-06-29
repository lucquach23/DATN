using System;
using System.Collections.Generic;

#nullable disable

namespace API.Models
{
    public partial class Monhoctienquyet
    {
        public int IdMonHocTienQuyet { get; set; }
        public string MaMonHoc { get; set; }
        public string MaMonHocTienQuyet { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
