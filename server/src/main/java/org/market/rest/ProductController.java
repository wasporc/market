package org.market.rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.market.dto.ProductDto;
import org.market.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final Gson gson = new GsonBuilder().create();

    @Autowired
    private ProductService productService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAll(){
        return ResponseEntity.ok(gson.toJson(productService.getAllProduct().stream()
                .map(product -> ProductDto.builder()
                        .id(product.getId())
                        .name(product.getName())
                        .price(product.getPrice()).build())
                        .collect(Collectors.toList())));
    }
}
