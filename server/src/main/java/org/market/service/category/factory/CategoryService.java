package org.market.service.category.factory;

import org.market.dto.ProductDto;

import java.util.EnumMap;

public interface CategoryService {
    enum CategoryType {
        ELECTRONIC,
        ORGANIC,
        EMPTY;

        private static EnumMap<CategoryType, CategoryService> MAP =
                new EnumMap<CategoryType, CategoryService>(CategoryType.class);

        static {
            MAP.put(ELECTRONIC, new Electronic());
            MAP.put(ORGANIC, new Food());
            MAP.put(EMPTY, new EmptyCategory());
        }
    }

    ProductDto addProductProperty(ProductDto product);

    static CategoryService getService(CategoryType type){
        if (type == null) return CategoryType.MAP.get(CategoryType.EMPTY);//на всякий если категория не проставлена
        return CategoryType.MAP.get(type);
    }
}
