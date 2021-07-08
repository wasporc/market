package org.market.service;

import org.market.dto.OrderMessage;
import org.market.entity.Order;
import org.market.entity.User;
import org.market.repo.OrderRepository;
import org.market.service.orders.decorator.OrderDiscountData;
import org.market.service.orders.decorator.OrderPriceDecorator;
import org.market.service.orders.decorator.WeekendSaleDecorator;
import org.market.service.orders.decorator.WinterSaleDecorator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class OrderService {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderRepository orderRepository;

    public OrderMessage getOrder(String userName){
        OrderMessage order = new OrderMessage();
        order.setUser(userName);
        order.setCart(cartService.getCartList(userName));
        OrderPriceDecorator priceDecorator =
                new WeekendSaleDecorator(
                    new WinterSaleDecorator(
                        new OrderDiscountData(order)));
        order.setPrice(priceDecorator.getOrderPrice());
        order.setDiscount(priceDecorator.getDiscountPrice());
        return order;
    }

    public void saveOrder(OrderMessage message){
        Optional<User> optionalUser = userService.findByUsername(message.getUser());
        if (optionalUser.isPresent()){
            User user = optionalUser.get();
            System.out.println("!!!!!USER " + user.getId());
            Order order = new Order();
            order.setUser(user);
            orderRepository.save(order);
        }

    }
}
