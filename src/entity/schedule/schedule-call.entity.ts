import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ScheduleCallType } from "../../type/schedule.type";
import { ScheduleCallEnum, ScheduleTypeEnum } from "../../enum/schedule.enum";
import { University } from "../university/university.entity";
import { ScheduleCallChange } from "./schedule-call-change.entity";

@Entity({ name: "schedule_call" })
export class ScheduleCall {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: "object",
    example: [
      {
        number: 1,
        start_time: "time",
        end_time: "time",
      },
    ],
  })
  @Column({
    type: "jsonb",
    default: [],
  })
  calls: ScheduleCallType[];

  @ApiProperty({
    type: "enum",
    example: Object.values(ScheduleCallEnum).join(" | "),
  })
  @Column({
    type: "enum",
    enum: ScheduleCallEnum,
    nullable: false,
  })
  type: ScheduleCallEnum;

  @ApiProperty({
    type: "enum",
    example: Object.values(ScheduleTypeEnum).join(" | "),
  })
  @Column({
    type: "enum",
    enum: ScheduleTypeEnum,
    nullable: false,
  })
  shift: ScheduleTypeEnum;

  @OneToMany(() => ScheduleCallChange, (call_changes) => call_changes.call)
  call_changes: ScheduleCallChange[];

  @ManyToOne(() => University, (university) => university.schedule_calls, {
    onDelete: "CASCADE",
    cascade: true,
  })
  university: University;
}
