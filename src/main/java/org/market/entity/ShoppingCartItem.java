package org.market.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "shopping_cart_item")
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "shopping_cart_id")
    private ShoppingCart shoppingCart;

    private Integer quantity;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

}
