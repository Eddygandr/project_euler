/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below .
*/

import { filterMap, makeBy, reduce } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { option } from 'fp-ts'

function solution(limit: number): number {
    const numbers = makeBy(limit, (i) => i);
    const filterPredicate = (i: number) => (i % 3 == 0 || i % 5 == 0 ? option.some(i) : option.none);
    const reducer = reduce(0, (acc: number, cur: number) => acc + cur);
    const answer = reducer(pipe(numbers, filterMap(filterPredicate)));
    return answer;
}

console.log(solution(1000))
