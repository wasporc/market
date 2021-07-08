package org.market.dto;

import lombok.Data;
import org.market.service.category.factory.CategoryService;

import java.util.Date;

@Data
public class DiscountDto {
    //название скидки
    private String name;
    //% скидки
    private Double discount;
    //начало действия
    private Date startDiscount;
    //окончание действия
    private Date endDiscount;
    //тип товаров
    private CategoryService.CategoryType type;
}
