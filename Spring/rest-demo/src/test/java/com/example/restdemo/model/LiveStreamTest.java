package com.example.restdemo.model;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.junit.Assert.*;

@SpringBootTest
public class LiveStreamTest {

    @Test
     public void create_new_record_live_stream() {
        LiveStream stream = new LiveStream(
                UUID.randomUUID().toString(),
                "Spring Boot Api",
                "Spring Boot Api Description",
                "https://lalitlsg.netlify.com",
                LocalDateTime.of(2022, 2, 20, 11, 30, 10),
                LocalDateTime.of(2022, 2, 21, 11, 20, 10)
        );

        assertNotNull(stream);
        assertEquals("Spring Boot Api", stream.title());
        assertTrue(stream.getClass().isRecord());
        assertEquals(6, stream.getClass().getRecordComponents().length);
    }

}