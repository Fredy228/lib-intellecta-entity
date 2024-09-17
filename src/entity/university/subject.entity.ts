import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { University } from "./university.entity";
import { SchedulePart } from "../schedule/schedule-part.entity";
import { ScheduleHour } from "../schedule/schedule_hour.entity";

@Entity({ name: "subject" })
export class Subject {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ name: "name", type: "varchar", length: 300, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ name: "short_name", type: "varchar", length: 300, nullable: true })
  short_name: string;

  @ApiProperty()
  @Column({ name: "icon_name", type: "varchar", length: 250, nullable: true })
  icon_name: string;

  @ManyToOne(() => University, (university) => university.subjects, {
    onDelete: "CASCADE",
    cascade: true,
  })
  university: University;

  @OneToMany(() => SchedulePart, (part) => part.subject)
  schedule_parts: SchedulePart[];

  @OneToMany(() => ScheduleHour, (hour) => hour.subject)
  schedule_hours: ScheduleHour[];
}
