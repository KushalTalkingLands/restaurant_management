export class CreateRestaurantDto {
    readonly name: string;
    readonly description: string;
    readonly address: string;
    readonly contact: {
      phone: string;
      email: string;
    };
    readonly openingHours: string;
}