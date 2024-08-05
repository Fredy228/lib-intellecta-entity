import {ApiProperty} from "@nestjs/swagger";
import {CountryCode} from "libphonenumber-js/types";

export class PhoneNumberDto {
    @ApiProperty()
    country: CountryCode;

    @ApiProperty()
    number: string;
}
