package com.example.mockito.demomockito;

public class BusinessImpl {
    private DataService dataService;

    public BusinessImpl(DataService dataService) {
        this.dataService = dataService;
    }

    int findGreatest() {
        int[] data = dataService.retrieveAllData();
        int max = Integer.MIN_VALUE;
        for (int val: data) {
            if (val > max) {
                max = val;
            }
        }
        return max;
    }
}

