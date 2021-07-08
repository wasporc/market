package org.market.service.orders.decorator;

import java.util.Calendar;

public class WeekendSaleDecorator extends OrderPriceDecorator {
    public WeekendSaleDecorator(OrderData order) {
        super(order);
    }

    @Override
    public double getOrderPrice() {
        return getWeekendDiscount(super.getOrderPrice());
    }

    @Override
    public double getDiscountPrice() {
        return getWeekendDiscount(super.getDiscountPrice());
    }

    private double getWeekendDiscount(double price){
        Calendar c = Calendar.getInstance();
        if (c.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY)
            return price - (price*0.05);
        else
            return price;
    }
}
