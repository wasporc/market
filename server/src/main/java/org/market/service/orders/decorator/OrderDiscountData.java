package org.market.service.orders.decorator;

import org.market.dto.OrderMessage;

public class OrderDiscountData implements OrderData {
    private OrderMessage order;

    public OrderDiscountData(OrderMessage order) {
        this.order = order;
    }

    @Override
    public double getOrderPrice() {
        return order.getCart().stream().reduce(0.0,
                (x,y)-> x + y.getPrice(),
                Double::sum);
    }

    @Override
    public double getDiscountPrice() {
        return order.getCart().stream().reduce(0.0,
                (x,y)-> {
                    if (y.getQuantity() > 10)
                        return x + (y.getPrice() - (y.getPrice()*0.05));
                    else
                        return x + y.getPrice();
                },
                Double::sum);
    }
}
