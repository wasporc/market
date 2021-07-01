package org.market.service;

import lombok.RequiredArgsConstructor;
import org.market.dto.ProductDto;
import org.market.entity.Product;
import org.market.repo.ProductRepository;
import org.market.service.category.factory.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public static final Function<Product, ProductDto> functionEntityToSoap = pe -> ProductDto.builder()
            .id(pe.getId())
            .name(pe.getName())
            .price(pe.getPrice())
            .type(pe.getType())
            .build();

    public List<ProductDto> getAllProduct(){
        return productRepository.findAll()
                .stream()
                .map(functionEntityToSoap)
                .map(productDto ->
                        CategoryService.getService(productDto.getType()).addProductProperty(productDto))
                .collect(Collectors.toList());
    }
}
