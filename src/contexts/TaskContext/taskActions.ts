import { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNTDOWN = 'COUNTDOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TasksActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNTDOWN;
      payload: { secondsRemaining: number };
    };

export type TasksActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TasksActionWithPayload
  | TasksActionWithoutPayload;
