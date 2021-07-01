package org.market.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.market.dto.OrderMessage;
import org.market.entity.ShoppingCart;
import org.market.entity.User;
import org.market.repo.UserRepository;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;

@SpringBootTest
@ActiveProfiles("test")
class OrderServiceTest {
    @Autowired
    private OrderService orderService;

    @MockBean
    private UserRepository userRepository;

    @Test
    void getOrderTest() {
        User user = new User();
        user.setId(11L);
        user.setFirstName("TEST");
        user.setLogin("TEST");
        user.setShoppingCart(new ShoppingCart());

        Mockito.doReturn(Optional.of(user))
                .when(userRepository)
                .findByLogin("TEST");

        OrderMessage orderTest = orderService.getOrder("TEST");
        Assertions.assertEquals("TEST", orderTest.getUser());
    }
}
