package org.market.jms;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.market.dto.OrderMessage;
import org.market.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class ActivemqReceivingMessageService {
    @Autowired
    private OrderService orderService;

    @JmsListener(destination = "${spring.jms.template.default-destination}" ,containerFactory = "testListenerFactory")
    public void receiveMessage(String order) throws JsonProcessingException {
        System.out.println("Received " + order);
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
        OrderMessage orderMessage = mapper.readValue(order, OrderMessage.class);
        orderService.saveOrder(orderMessage);
    }
}
