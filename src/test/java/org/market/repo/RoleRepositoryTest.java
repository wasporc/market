package org.market.repo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.market.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@DataJpaTest
@ActiveProfiles("test")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RoleRepositoryTest {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void findByNameTest() {
        Role userRole = roleRepository.findByName("ROLE_USER");
        Assertions.assertEquals(2, userRole.getId());
    }

    @Test
    void roleRepositoryTest(){
        Role role = new Role();
        role.setName("TEST");
        entityManager.persist(role);
        entityManager.flush();

        List<Role> roles = roleRepository.findAll();

        Assertions.assertEquals(4, roles.size());
    }
}
