
var MyCalendar = function() {
    this.events = [[ 4, 17 ], [ 37, 50 ] ];  
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    const n = this.events.length;
    
    if (n === 0 || end <= this.events[0][0]) {
        this.events.unshift([start, end]);
        return true;
    }
    
    if (start >= this.events[n-1][1]) {
        this.events.push([start, end]);
        return true;
    }
    
    let low = 0, high = 0, mid = 0;
        
    while (low <= high) {
        mid = Math.floor((low+high)/2);
        console.log(mid, this.events,"-", [start, end]);
        if (end <= this.events[mid][0]) {
            high = mid - 1;  
        } else if (start >= this.events[mid][1]) {
            low = mid + 1;
        } else {
            return false;
        }
    }
    
    this.events.splice(low, 0, [start, end]);
    return true;
};

//  * Your MyCalendar object will be instantiated and called as such:
 var obj = new MyCalendar()
 var param_1 = obj.book(35,48);

 console.log(obj.events);
 console.log("called");
