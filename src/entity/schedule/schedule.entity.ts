import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { SettingsScheduleType } from "../../type/schedule.type";
import { SchedulePart } from "./schedule-part.entity";
import { University } from "../university/university.entity";

@Entity({ name: "schedule" })
export class Schedule {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "varchar", length: 250, nullable: false })
  name: string;

  @ApiProperty({
    type: "object",
    example: {
      shift_two: "boolean",
    },
  })
  @Column({
    type: "jsonb",
    default: {
      shift_two: false,
    },
  })
  setting: SettingsScheduleType;

  @ApiProperty()
  @Column({ type: "date", nullable: false })
  start_date: Date;

  @ApiProperty()
  @Column({ type: "date", nullable: false })
  end_date: Date;

  @OneToMany(() => SchedulePart, (part) => part.schedule)
  schedule_parts: SchedulePart[];

  @OneToMany(() => SchedulePart, (hour) => hour.schedule)
  schedule_hours: SchedulePart[];

  @ManyToOne(() => University, (university) => university.schedules, {
    onDelete: "CASCADE",
    cascade: true,
  })
  university: University;
}
