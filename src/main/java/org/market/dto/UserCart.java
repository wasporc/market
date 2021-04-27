package org.market.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCart {
    private Long id;
    private String name;
    private Integer quantity;
    private Double price;
}
