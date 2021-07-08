package org.market.service.discount;

import org.market.dto.DiscountDto;
import org.market.service.discount.observer.DiscountManager;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiscountService {
    private List<DiscountDto> discounts = new ArrayList<>();

    private DiscountManager event;

    public DiscountService() {
        this.event = new DiscountManager("add", "remove");
    }

    public void add(DiscountDto dis){
        this.discounts.add(dis);
        this.event.notify("add", dis);
    }

    public void remove(DiscountDto dis){
        this.discounts.remove(dis);
        this.event.notify("remove", dis);
    }

}
