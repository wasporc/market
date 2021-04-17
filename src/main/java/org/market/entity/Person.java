package org.market.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "persons")
public class Person {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;
    private String login;
    private String password;
    @Column(insertable = false, updatable = false)
    private Long role_id;
    @ManyToOne
    private Role role;
}
