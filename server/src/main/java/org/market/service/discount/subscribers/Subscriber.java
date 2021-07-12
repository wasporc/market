package org.market.service.discount.subscribers;

import org.market.dto.DiscountDto;

public interface Subscriber {
    void send(String event, DiscountDto dis);
}
