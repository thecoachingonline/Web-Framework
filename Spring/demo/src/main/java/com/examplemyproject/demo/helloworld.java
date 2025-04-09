package com.examplemyproject.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class helloworld {

    @GetMapping("/")
    public String sayHello() {
        return "👋 Hello, World! 🙏 สวัสดีครับ";
    }
}
