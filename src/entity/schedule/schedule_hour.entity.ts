import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Group } from "../group/group.entity";
import { Subject } from "../university/subject.entity";
import { Schedule } from "./schedule.entity";

@Entity({ name: "schedule_hour" })
export class ScheduleHour {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: false })
  hours: number;

  @ManyToOne(() => Group, (group) => group.schedule_hours, {
    onDelete: "CASCADE",
    cascade: true,
  })
  group: Group;

  @ManyToOne(() => Subject, (subject) => subject.schedule_hours, {
    onDelete: "CASCADE",
    cascade: true,
  })
  subject: Subject;

  @ManyToOne(() => Schedule, (schedule) => schedule.schedule_hours, {
    onDelete: "CASCADE",
    cascade: true,
  })
  schedule: Schedule;
}
