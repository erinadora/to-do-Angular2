import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe ({
  name: "done",
  pure: false
})

export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    console.log('selected task: ', args[1]);
  }
}
