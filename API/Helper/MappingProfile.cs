using API.DTOs;
using AutoMapper;
using Core.Entities;

namespace API.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Products, ProductToReturnDto>()
                .ForMember(d => d.productBrand, o => o.MapFrom(s => s.productBrand.Name))
                .ForMember(d => d.productType, o => o.MapFrom(s => s.productType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());

        }
    }
}
