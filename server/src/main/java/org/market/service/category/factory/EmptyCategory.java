package org.market.service.category.factory;

import org.market.dto.ProductDto;

public class EmptyCategory implements CategoryService{
    @Override
    public ProductDto addProductProperty(ProductDto product) {
        product.setType(CategoryType.EMPTY);
        product.setDescription("Даже не знаю что это");
        return product;
    }
}
