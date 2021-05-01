package org.market.service;

import org.market.dto.UserCart;
import org.market.entity.ShoppingCart;
import org.market.entity.ShoppingCartItem;
import org.market.entity.User;
import org.market.repo.ProductRepository;
import org.market.repo.ShoppingCartItemRepository;
import org.market.repo.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Service
public class CartService {
    private static Logger logger = LoggerFactory.getLogger(CartService.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ShoppingCartItemRepository itemRepository;

    public boolean addProduct(Long productId, String userLogin){
        logger.info("add product {} id in user {} login cart", productId, userLogin);
        Optional<User> userByLogin = userRepository.findByLogin(userLogin);
        if (userByLogin.isPresent()){
            User user = userByLogin.get();
            cartAddToUser(user);
            ShoppingCart shoppingCart = user.getShoppingCart();
            AtomicBoolean flAdd = new AtomicBoolean(false);
            if(shoppingCart.getItems() != null){
                shoppingCart.getItems().forEach(
                        shoppingCartItem -> {
                            if (shoppingCartItem.getProduct().getId().equals(productId)){
                                shoppingCartItem.setQuantity(
                                        shoppingCartItem.getQuantity() + 1);
                                itemRepository.save(shoppingCartItem);
                                flAdd.set(true);
                            }
                        });
            }
            if (!flAdd.get()){
                logger.info("add new item");
                ShoppingCartItem shoppingCartItem = new ShoppingCartItem();
                shoppingCartItem.setShoppingCart(shoppingCart);
                shoppingCartItem.setQuantity(1);
                shoppingCartItem.setProduct(productRepository.getOne(productId));
                itemRepository.save(shoppingCartItem);
                logger.info("new item id {}", shoppingCartItem.getId());
                flAdd.set(true);
            }
            return flAdd.get();
        }
        return false;
    }


    public void removeFromCart(Long productId, String userLogin){
        Optional<User> userByLogin = userRepository.findByLogin(userLogin);
        if (userByLogin.isPresent()){
            User user = userByLogin.get();
            cartAddToUser(user);
            AtomicLong delItem = new AtomicLong(-1L);
            user.getShoppingCart().getItems().forEach(shoppingCartItem -> {
                if (shoppingCartItem.getProduct().getId().equals(productId)){
                    int quantity = shoppingCartItem.getQuantity();
                    if (quantity <= 1) {
                        delItem.set(shoppingCartItem.getId());
                    }
                    else {
                        shoppingCartItem.setQuantity(quantity - 1);
                        itemRepository.save(shoppingCartItem);
                    }
                }
            });

            if (delItem.get() != -1L) {
                logger.info("delete product");
                itemRepository.deleteById(delItem.get());
            }
        }
    }

    public List<UserCart> getCartList(String userLogin){
        Optional<User> userByLogin = userRepository.findByLogin(userLogin);
        if (userByLogin.isPresent()){
            User user = userByLogin.get();
            cartAddToUser(user);
            if (user.getShoppingCart().getItems() != null){
                return user.getShoppingCart().getItems()
                        .stream()
                        .map(shoppingCartItem -> UserCart.builder()
                                .id(shoppingCartItem.getProduct().getId())
                                .name(shoppingCartItem.getProduct().getName())
                                .quantity(shoppingCartItem.getQuantity())
                                .price(shoppingCartItem.getProduct().getPrice())
                                .build())
                        .collect(Collectors.toList());
            }
        }
        return new ArrayList<>();
    }

    private void cartAddToUser(User user){
        if (user.getShoppingCart() == null){
            ShoppingCart cart = new ShoppingCart();
            cart.setUser(user);
            userRepository.save(user);
        }
    }

}
