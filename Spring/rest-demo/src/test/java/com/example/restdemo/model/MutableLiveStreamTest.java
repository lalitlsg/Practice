package com.example.restdemo.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.junit.Assert.*;

@SpringBootTest
public class MutableLiveStreamTest {


    @Test
    void create_new_mutable_live_stream() {
        MutableLiveStream stream = new MutableLiveStream();
        stream.setId(UUID.randomUUID().toString());
        stream.setTitle("Spring Boot Rest Api");
        stream.setDescription("Spring Boot Rest Api Description");
        stream.setUrl("https://lalitlsg.netlify.com");
        stream.setStartDate(LocalDateTime.of(2022, 2, 20, 11, 30, 30));
        stream.setEndDate(LocalDateTime.of(2022, 2, 21, 12, 30, 30));

        assertNotNull(stream);
        assertEquals("Spring Boot Rest Api", stream.getTitle());
    }
}