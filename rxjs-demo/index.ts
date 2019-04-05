import { of, fromEvent, pipe } from 'rxjs'; 
import { map, filter } from 'rxjs/operators';


let btn = document.getElementById('btn');
let input = document.getElementById('score');

let observable = fromEvent(input, 'input');

let observer = function(run) {
  console.log('found:', run);
}

observable
.pipe(
  map(e => e.target.value.split(',').pop()),
  filter(run => run !== ''),
  filter(run => run >=1 && run <=6)
)
.subscribe(observer);