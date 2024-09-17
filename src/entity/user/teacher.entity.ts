import { ChildEntity, Column, ManyToOne, OneToMany } from "typeorm";
import { Profile } from "./proflle.entity";
import { ApiProperty } from "@nestjs/swagger";
import { University } from "../university/university.entity";
import { SchedulePart } from "../schedule/schedule-part.entity";

@ChildEntity()
export class Teacher extends Profile {
  @ApiProperty()
  @Column({ type: "varchar", length: 250, nullable: false })
  job_title: string;

  @ManyToOne(() => University, (university) => university.teachers, {
    onDelete: "CASCADE",
    cascade: true,
  })
  university_teacher: University;

  @OneToMany(() => SchedulePart, (part) => part.teacher)
  schedule_parts: SchedulePart[];
}
