export type CustomerStatus = "Active" | "Inactive" | "Lead";

export type EmployeeRange =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1000+";

export type Customer = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  agent: string;
  status: CustomerStatus;
  jobTitle: string;
  location: string;
  joinedDate: string;
};

export type Company = {
  customerId: string;
  name: string;
  industry: string;
  website: string;
  employees: EmployeeRange;
};
