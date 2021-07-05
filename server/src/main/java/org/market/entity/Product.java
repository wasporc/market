package org.market.entity;

import lombok.Data;
import org.market.service.category.factory.CategoryService;

import javax.persistence.*;

@Data
@Entity
@Table(name = "product")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    @Enumerated(EnumType.STRING)
    private CategoryService.CategoryType type;
}
