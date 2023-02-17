Debouncing:

typing slow = 200ms
typing fast = 30 ms

Performance:
 - iphone pro max = 14 letters * 1000 people = 14000 API calls
 - with debouncing - 3 API CALLS * 1000 = 3000 API calls

 Show search results for better UI experience

 Debouncing with 200 ms
   - if difference between 2 key strokes is <200ms - Decline API Call
   - Else if >200ms make an API call



Cache: 
time complexity to search in array = 0(n)

array.indexOf(n) or array.includes(n) ---> 0(n)

Search Complexity to search in a Map/Object = 0(1)
{
    i:
    ip:
    iph:
    iphone:
}

new Map(); //Optimized 0(1)


//LRU Cache
Restrict cache by keeping only recent 100 items

