package org.market.service.orders.decorator;

public class OrderPriceDecorator implements OrderData{
    private OrderData order;

    public OrderPriceDecorator(OrderData order) {
        this.order = order;
    }

    @Override
    public double getOrderPrice() {
        return order.getOrderPrice();
    }

    @Override
    public double getDiscountPrice() {
        return order.getDiscountPrice();
    }
}
