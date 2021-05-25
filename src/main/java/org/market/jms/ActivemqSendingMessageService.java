package org.market.jms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;


@Component
public class ActivemqSendingMessageService {
    private JmsTemplate jmsTemplate;
    private String queueName;

    public ActivemqSendingMessageService(
            @Autowired JmsTemplate jmsTemplate,
            @Value("${spring.jms.template.default-destination}") String queueName
    ) {
        this.jmsTemplate = jmsTemplate;
        this.queueName = queueName;
    }

    public void sendMessage(String messageString) {
        jmsTemplate.convertAndSend(queueName, messageString);
    }
}
