package org.market.rest;

import org.market.dto.UserCart;
import org.market.service.AuthenticationFacade;
import org.market.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {


    @Autowired
    private CartService cartService;
    @Autowired
    private AuthenticationFacade facade;

    @GetMapping("/add/{id}")
    public String addProduct(@PathVariable Long id){
        boolean addProductFl = cartService.addProduct(id, facade.getAuthentication().getName());
        return addProductFl ? "OK" : "ERROR";
    }

    @GetMapping("/remove/{id}")
    public String removeProduct(@PathVariable Long id){
        cartService.removeFromCart(id, facade.getAuthentication().getName());
        return "OK";
    }

    @GetMapping
    public ResponseEntity<?> getUserCart(){
        List<UserCart> cartList = cartService.getCartList(facade.getAuthentication().getName());
        if (!cartList.isEmpty())
            return ResponseEntity.ok(cartList);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
