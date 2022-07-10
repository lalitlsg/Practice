package com.example.mockito.demomockito;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class BusinessImplTest {

    @Mock
    DataService dataServiceMock;

    @InjectMocks
    BusinessImpl business;

    @Test
    public void findGreatest() {
//        DataService dataServiceMock =  mock(DataService.class);
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {1, 2, 3});

//        BusinessImpl business = new BusinessImpl(dataServiceMock);
        assertEquals(3, business.findGreatest());
    }
}
