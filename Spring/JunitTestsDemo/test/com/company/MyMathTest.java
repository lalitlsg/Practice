package com.company;

import org.junit.*;

import static org.junit.Assert.*;

public class MyMathTest {
    MyMath myMath = new MyMath();

    @Before
    public void before() {
        System.out.println("Before");
    }

    @After
    public void after() {
        System.out.println("After");
    }

    @BeforeClass
    public static void beforeClass() {
        System.out.println("before Class");
    }

    @AfterClass
    public static void afterClass() {
        System.out.println("after Class");
    }

    @Test
    public void sum() {
        assertEquals(6, myMath.sum(new int[]{1, 2, 3}));
        System.out.println("sum");
    }

    @Test
    public void sum1() {
        assertEquals(6, myMath.sum(new int[]{1, 2, 3}));
        System.out.println("sum1");
    }
}