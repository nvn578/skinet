using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Products>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParam)
            : base(x => (string.IsNullOrEmpty(productParam.Search) || x.Name.ToLower().Contains(productParam.Search)) &&
            (!productParam.BrandId.HasValue || x.ProductBrandId == productParam.BrandId) &&
                       (!productParam.TypeId.HasValue || x.ProductTypeId == productParam.TypeId)
                 )
        {

        }
        
            
            
        
    }
}
