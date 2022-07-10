package com.example.restdemo.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.junit.Assert.*;

@SpringBootTest
public class ImmutableLiveStreamTest {

    @Test
    void create_new_immutable_live_stream() {
        ImmutableLiveStream stream = new ImmutableLiveStream(
                UUID.randomUUID().toString(),
                "Spring Boot Api",
                "Spring Boot Api Description",
                "https://lalitlsg.netlify.com",
                LocalDateTime.of(2022, 2, 20, 11, 30, 10),
                LocalDateTime.of(2022, 2, 21, 11, 20, 10)
        );

        assertNotNull(stream);
        assertEquals("Spring Boot Api", stream.getTitle());
    }
}