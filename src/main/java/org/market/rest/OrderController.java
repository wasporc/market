package org.market.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.market.dto.OrderMessage;
import org.market.jms.ActivemqSendingMessageService;
import org.market.service.AuthenticationFacade;
import org.market.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private AuthenticationFacade facade;
    @Autowired
    private ActivemqSendingMessageService messageService;

    @GetMapping("/message")
    public String getOrder(){
        OrderMessage order = orderService.getOrder(facade.getAuthentication().getName());
        try{
            ObjectMapper mapper = new ObjectMapper();
            String orderAsJson = mapper.writeValueAsString(order);
            messageService.sendMessage(orderAsJson);
        }catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
        return "OK";
    }
}
