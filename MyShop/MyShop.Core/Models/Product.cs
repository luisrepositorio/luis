using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyShop.Core.Models
{
  public  class Product: BaseEntity
    {
        //public string Id { get; set; }


        [StringLength(30)]
        [DisplayName("Nombre Producto")]
        public string Name { get; set; }
        public string Descripcion { get; set; }

        [Range(0,100000)]
        public decimal Precio { get; set; }


        public string Categoria { get; set; }
        public string Image { get; set; }
        //public Product()
        //{
        //    Id = Guid.NewGuid().ToString();
        //}
    }
}
