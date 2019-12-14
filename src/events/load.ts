import {AllusionEvent} from './event';
import {IEvent} from '../interfaces/event';
import {IShouldQueue} from '../interfaces/should-queue';

export class LoadEvent extends AllusionEvent implements IEvent, IShouldQueue {
  EVENT_TYPE:string = 'load';
}
