import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "schedule" })
export class Schedule {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
}
