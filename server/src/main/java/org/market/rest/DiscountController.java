package org.market.rest;

import org.market.dto.DiscountDto;
import org.market.service.discount.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/discount")
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @PostMapping
    public void add(DiscountDto dis){
        discountService.add(dis);
    }

    @DeleteMapping
    public void remove(DiscountDto dis){
        discountService.remove(dis);
    }
}
