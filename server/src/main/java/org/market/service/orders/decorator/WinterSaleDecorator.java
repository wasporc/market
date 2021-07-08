package org.market.service.orders.decorator;

import java.util.Calendar;

public class WinterSaleDecorator extends OrderPriceDecorator {
    public WinterSaleDecorator(OrderData order) {
        super(order);
    }

    @Override
    public double getOrderPrice() {
        return getWinterDiscount(super.getOrderPrice());
    }

    @Override
    public double getDiscountPrice() {
        return getWinterDiscount(super.getDiscountPrice());
    }

    private double getWinterDiscount(double price){
        Calendar c = Calendar.getInstance();
        if (c.get(Calendar.MONTH) == Calendar.DECEMBER)
            return price - (price*0.05);
        else
            return price;
    }
}
