package org.market.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderMessage implements Serializable {
    private Long id;
    private String user;
    private List<UserCart> cart;
}
