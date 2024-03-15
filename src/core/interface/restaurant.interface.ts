export interface Restaurant {
    name: string;
    description: string;
    address: string;
    contact: {
      phone: string;
      email: string;
    };
    openingHours: string;
}