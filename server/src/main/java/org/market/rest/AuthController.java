package org.market.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.market.dto.JwtRequest;
import org.market.dto.JwtResponse;
import org.market.dto.RegistrationRequest;
import org.market.entity.Role;
import org.market.entity.User;
import org.market.service.JwtTokenUtil;
import org.market.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;

@Api(value = "Api регистрации пользователя", description = "Api регистрации пользователя")
@RestController
@AllArgsConstructor
public class AuthController {
    private UserService userService;
    private JwtTokenUtil jwtTokenUtil;
    private AuthenticationManager authenticationManager;


    @PostMapping("/auth")
    public ResponseEntity<?> createToken(@RequestBody JwtRequest jwtRequest) {
//        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(),
                    jwtRequest.getPassword()));
//        } catch (BadCredentialsException e) {
//            return new ResponseEntity<>()
//        }
        User user = userService.findByUsername(jwtRequest.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        UserDetails userDetails = userService.loadUserByUsername(jwtRequest.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token,
                user.getFirstName(),
                user.getLogin(),
                user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList())));
    }

    @ApiOperation(
            value = "Регистрация нового пользователя",
            response = RegistrationRequest.class)
    @PostMapping("/register")
    public String registerUser(@RequestBody RegistrationRequest registrationRequest) {
        User u = new User();
        u.setPassword(registrationRequest.getPassword());
        u.setLogin(registrationRequest.getLogin());
        userService.saveUser(u);
        return "OK";
    }

    @GetMapping(value = "/register/{login}", produces = MediaType.TEXT_PLAIN_VALUE)
    public String loginCheck(@PathVariable(name = "login") String login){
        Optional<User> user = userService.findByUsername(login);
        if (user.isPresent()){
            return user.get().getLogin();
        }else{
            return "Login not found";
        }
    }
}
