using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context)
        {
            if (context.ProductBrands.Count() == 0)
            {
                var brandsData = File.ReadAllText("../Infrastructure/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                context.ProductBrands.AddRange(brands);
            }


            if (context.ProductTypes.Count() == 0)
            {
                var typesType = File.ReadAllText("../Infrastructure/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<ProductBrand>>(typesType);
                context.ProductBrands.AddRange(types);
            }

            if (context.Products.Count() == 0)
            {
                var productsData = File.ReadAllText("../Infrastructure/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<ProductBrand>>(productsData);
                context.ProductBrands.AddRange(products);
            }

            if (context.ChangeTracker.HasChanges())
            {
                await context.SaveChangesAsync();
            }


        }
    }
}
