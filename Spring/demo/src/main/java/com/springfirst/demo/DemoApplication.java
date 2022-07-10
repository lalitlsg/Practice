package com.springfirst.demo;

import com.springfirst.demo.cdi.CdiBusiness;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class DemoApplication {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext =
				new AnnotationConfigApplicationContext(DemoApplication.class);
		CdiBusiness cdiBusiness = applicationContext.getBean(CdiBusiness.class);
		applicationContext.close();
	}

}
