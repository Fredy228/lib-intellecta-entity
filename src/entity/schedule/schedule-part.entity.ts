import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Group } from "../group/group.entity";
import { Teacher } from "../user/teacher.entity";
import { Subject } from "../university/subject.entity";
import { Schedule } from "./schedule.entity";
import { ScheduleTypeEnum } from "../../enum/schedule.enum";

@Entity({ name: "schedule_part" })
export class SchedulePart {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "integer", nullable: false })
  number: number;

  @ApiProperty({
    type: "enum",
    example: Object.values(ScheduleTypeEnum).join(" | "),
  })
  @Column({
    type: "enum",
    enum: ScheduleTypeEnum,
    nullable: false,
  })
  type: ScheduleTypeEnum;

  @ApiProperty()
  @Column({ type: "boolean", default: false, nullable: false })
  is_change: boolean;

  @ApiProperty()
  @Column({ type: "date", nullable: false })
  date_change: Date;

  @ApiProperty()
  @Column({ type: "varchar", length: 250, nullable: false })
  room: string;

  @ManyToOne(() => Group, (group) => group.schedule_parts, {
    onDelete: "CASCADE",
    cascade: true,
  })
  group: Group;

  @ManyToOne(() => Teacher, (teacher) => teacher.schedule_parts, {
    onDelete: "SET NULL",
    cascade: true,
  })
  teacher: Teacher;

  @ManyToOne(() => Subject, (subject) => subject.schedule_parts, {
    onDelete: "SET NULL",
    cascade: true,
  })
  subject: Subject;

  @ManyToOne(() => Schedule, (schedule) => schedule.schedule_parts, {
    onDelete: "CASCADE",
    cascade: true,
  })
  schedule: Schedule;
}
