package org.market.service.discount.observer;

import org.market.dto.DiscountDto;
import org.market.service.discount.subscribers.Subscriber;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DiscountManager {
    private Map<String, List<Subscriber>> subscribers = new HashMap<>();

    public DiscountManager(String... operations) {
        for (String operation : operations) {
            this.subscribers.put(operation, new ArrayList<>());
        }
    }

    public void subscribe(String event, Subscriber subscriber){
        if (this.subscribers.containsKey(event))
            this.subscribers.get(event).add(subscriber);
    }

    public void unsubscribe(String event, Subscriber subscriber){
        if (this.subscribers.containsKey(event))
            this.subscribers.get(event).remove(subscriber);
    }

    public void notify(String eventType, DiscountDto dis){
        if (this.subscribers.containsKey(eventType)){
            List<Subscriber> list = this.subscribers.get(eventType);
            for (Subscriber subscriber : list) {
                subscriber.send(eventType, dis);
            }
        }
    }
}
