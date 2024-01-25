package com.example.demo.holamundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundo {
	@GetMapping("/saludo/{name}")
	public String holaMundo(@PathVariable String name) {
		return "Hola Mundo!"+name;
	}
}
