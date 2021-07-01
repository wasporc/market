package org.market.service.category.factory;

import org.market.dto.ProductDto;

public class Food implements CategoryService {
    @Override
    public ProductDto addProductProperty(ProductDto product) {
        product.setDescription("Кушайте здоровую пищу!");
        return product;
    }
}
