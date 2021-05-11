package org.market.service;

import lombok.RequiredArgsConstructor;
import org.market.entity.Product;
import org.market.repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public static final Function<Product, org.market.soap.products.Product> functionEntityToSoap = pe -> {
        org.market.soap.products.Product product = new org.market.soap.products.Product();
        product.setId(pe.getId());
        product.setName(pe.getName());
        product.setPrice(pe.getPrice());
        return product;
    };

    public List<org.market.soap.products.Product> getAllProduct(){
        return productRepository.findAll().stream().map(functionEntityToSoap).collect(Collectors.toList());
    }
}
