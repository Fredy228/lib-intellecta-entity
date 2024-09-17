import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ScheduleCallEnum } from "../../enum/schedule.enum";
import { ScheduleCall } from "./schedule-call.entity";

@Entity({ name: "schedule_call_change" })
export class ScheduleCallChange {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

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

  @ApiProperty()
  @Column({ type: "date", nullable: false })
  date: Date;

  @ManyToOne(
    () => ScheduleCall,
    (schedule_call) => schedule_call.call_changes,
    {
      onDelete: "CASCADE",
      cascade: true,
    },
  )
  call: ScheduleCall;
}
