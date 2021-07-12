package org.market.service.discount.subscribers;

import org.market.dto.DiscountDto;

public class EmailNotification implements Subscriber{
    private String email;

    public EmailNotification(String email) {
        this.email = email;
    }

    @Override
    public void send(String event, DiscountDto dis) {
        System.out.println("Email to " + email + ": event " + event + " discount " + dis.getName());
    }
}
