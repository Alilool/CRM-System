export type UserRole = "Admin" | "Manager" | "Sales";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};
