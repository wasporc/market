package org.market.market.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
@Api(description = "Тестовый контроллер")
public class HelloController {

    @GetMapping
    @ApiOperation("Тестовый метод")
    public String test(){
        return "test rest hello";
    }
}
