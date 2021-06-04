package org.market.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.market.dto.UserCart;
import org.market.entity.ShoppingCart;
import org.market.entity.User;
import org.market.repo.UserRepository;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Optional;

@SpringBootTest
@ActiveProfiles("test")
class CartServiceTest {
    @Autowired
    private CartService cartService;
    @MockBean
    private UserRepository userRepository;

    @Test
    void getCartListTest() {
        User user = new User();
        user.setId(11L);
        user.setFirstName("TEST");
        user.setLogin("TEST");
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUser(user);
        user.setShoppingCart(shoppingCart);

        Mockito.doReturn(Optional.of(user))
                .when(userRepository)
                .findByLogin("TEST");

        List<UserCart> cartList = cartService.getCartList("TEST");
        Assertions.assertEquals(0, cartList.size());
    }
}
