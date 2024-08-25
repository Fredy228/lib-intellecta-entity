//Entity
import { User, UserDevices } from "./user/user.entity";
import { Profile } from "./user/proflle.entity";
import { Moderator } from "./user/admin.entity";
import { Owner } from "./user/owner.entity";
import { Teacher } from "./user/teacher.entity";
import { Student } from "./user/student.entity";
import { University } from "./university/university.entity";
import { Subject } from "./university/subject.entity";
import { Faculty } from "./university/faculty.entity";
import { Group } from "./group/group.entity";
import { Icon } from "./icon.entity";
import { SupportMessage } from "./support-message.entity";

export { User, UserDevices } from "./user/user.entity";
export { Profile } from "./user/proflle.entity";
export { Moderator } from "./user/admin.entity";
export { Owner } from "./user/owner.entity";
export { Teacher } from "./user/teacher.entity";
export { Student } from "./user/student.entity";
export { University } from "./university/university.entity";
export { Subject } from "./university/subject.entity";
export { Faculty } from "./university/faculty.entity";
export { Group } from "./group/group.entity";
export { Icon } from "./icon.entity";
export { SupportMessage } from "./support-message.entity";

export const ALL_ENTITIES = [
  User,
  UserDevices,
  Profile,
  Moderator,
  Owner,
  Teacher,
  Student,
  University,
  Subject,
  Faculty,
  Group,
  Icon,
  SupportMessage,
];

//Enum
export * from "./enum/icon.enum";
export * from "./enum/role-enum";
export * from "./enum/support-messages.enum";

//Type
export * from "./type/user.type";
