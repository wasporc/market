package org.market.dto;

import lombok.Builder;
import lombok.Data;
import org.market.service.category.factory.CategoryService;

@Data
@Builder
public class ProductDto {
    private Long id;
    private String name;
    private Double price;
    private CategoryService.CategoryType type;
    private String description;
}
