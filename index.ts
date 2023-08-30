import { from } from 'rxjs';
import { map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
// Example 1: Add 10 to each number

//emit (1,2,3,4,5)
const srcArr$ = from([1, 2, 3, 4, 5]);
//add 10 to each value
const example = srcArr$.pipe(map((val) => val + 10));
const subscribe = example.subscribe((val) => console.log(val));
//output: 11,12,13,14,15
