package org.market.service.category.factory;

import org.market.dto.ProductDto;

public class Electronic implements CategoryService {
    @Override
    public ProductDto addProductProperty(ProductDto product) {
        product.setDescription("Хей, это нельзя есть!");
        return product;
    }
}
