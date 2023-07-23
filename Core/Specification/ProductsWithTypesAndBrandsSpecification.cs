using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Products>
    {
        public ProductsWithTypesAndBrandsSpecification()
        {
            AddInclude(x => x.productType);
            AddInclude(x => x.productBrand);
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x=> x.Id == id)
        {
            AddInclude(x => x.productType);
            AddInclude(x => x.productBrand);
        }
    }
}
