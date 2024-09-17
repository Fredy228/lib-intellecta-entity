export type SettingsScheduleType = {
  shift_two: boolean;
  class_stream: boolean; // Разрешить нескольким группам общий урок
  use_hours: boolean;
};

export type ScheduleCallType = {
  number: number;
  start_time: Date;
  end_time: Date;
};
