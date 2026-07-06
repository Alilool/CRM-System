import type {
  Company,
  Customer,
  CustomerStatus,
  EmployeeRange,
} from "@/types/customer";

const featuredCustomers: Customer[] = [
  {
    id: "cus-001",
    name: "Sarah Johnson",
    company: "Acme Inc.",
    email: "sarah@acme.com",
    phone: "+1 555 120 4488",
    status: "Active",
    jobTitle: "Operations Manager",
    location: "New York, USA",
    joinedDate: "2025-09-14",
  },
  {
    id: "cus-002",
    name: "Daniel Kim",
    company: "Globex",
    email: "daniel@globex.com",
    phone: "+1 555 884 1902",
    status: "Lead",
    jobTitle: "Head of Sales",
    location: "Austin, USA",
    joinedDate: "2026-01-08",
  },
  {
    id: "cus-003",
    name: "Maya Patel",
    company: "Northstar Labs",
    email: "maya@northstarlabs.com",
    phone: "+1 555 334 6721",
    status: "Active",
    jobTitle: "Product Director",
    location: "Seattle, USA",
    joinedDate: "2025-11-22",
  },
  {
    id: "cus-004",
    name: "Omar Hassan",
    company: "BrightPath",
    email: "omar@brightpath.com",
    phone: "+1 555 776 3014",
    status: "Inactive",
    jobTitle: "Founder",
    location: "Chicago, USA",
    joinedDate: "2025-06-03",
  },
  {
    id: "cus-005",
    name: "Emily Carter",
    company: "CloudNova",
    email: "emily@cloudnova.com",
    phone: "+1 555 492 1188",
    status: "Active",
    jobTitle: "Finance Lead",
    location: "Denver, USA",
    joinedDate: "2026-02-19",
  },
  {
    id: "cus-006",
    name: "Lucas Brown",
    company: "UrbanGrid",
    email: "lucas@urbangrid.com",
    phone: "+1 555 208 6509",
    status: "Lead",
    jobTitle: "Business Developer",
    location: "Boston, USA",
    joinedDate: "2026-03-11",
  },
];

const featuredCompanies: Company[] = [
  {
    customerId: "cus-001",
    name: "Acme Inc.",
    industry: "Manufacturing",
    website: "https://acme.example",
    employees: "201-500",
  },
  {
    customerId: "cus-002",
    name: "Globex",
    industry: "Software",
    website: "https://globex.example",
    employees: "51-200",
  },
  {
    customerId: "cus-003",
    name: "Northstar Labs",
    industry: "Research",
    website: "https://northstar.example",
    employees: "51-200",
  },
  {
    customerId: "cus-004",
    name: "BrightPath",
    industry: "Consulting",
    website: "https://brightpath.example",
    employees: "11-50",
  },
  {
    customerId: "cus-005",
    name: "CloudNova",
    industry: "Cloud Services",
    website: "https://cloudnova.example",
    employees: "201-500",
  },
  {
    customerId: "cus-006",
    name: "UrbanGrid",
    industry: "Real Estate",
    website: "https://urbangrid.example",
    employees: "51-200",
  },
];

const firstNames = [
  "Ava",
  "Ethan",
  "Lina",
  "Noah",
  "Sofia",
  "Adam",
  "Zara",
  "Liam",
  "Nadia",
  "Ryan",
];

const lastNames = [
  "Reed",
  "Bennett",
  "Stone",
  "Miller",
  "Wilson",
  "Parker",
  "Brooks",
  "Foster",
  "Hayes",
  "Cooper",
];

const generatedCompanies = [
  "BluePeak",
  "Silverline",
  "TechHive",
  "MarketEdge",
  "GreenWorks",
  "NobleStack",
  "PrimeWave",
  "ClearPoint",
];

const jobTitles = [
  "Sales Manager",
  "Marketing Lead",
  "Account Executive",
  "Customer Success Manager",
  "Project Coordinator",
  "Product Manager",
];

const locations = [
  "New York, USA",
  "Austin, USA",
  "Seattle, USA",
  "Chicago, USA",
  "Denver, USA",
  "Boston, USA",
];

const industries = [
  "Software",
  "Consulting",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
];

const statuses: CustomerStatus[] = ["Active", "Lead", "Inactive"];
const employeeRanges: EmployeeRange[] = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

function pickItem<T>(items: T[], index: number) {
  return items[index % items.length];
}

function createGeneratedCustomers(count: number) {
  return Array.from({ length: count }, (_, index): Customer => {
    const customerNumber = index + featuredCustomers.length + 1;
    const firstName = pickItem(firstNames, index);
    const lastName = pickItem(lastNames, index + 3);
    const company = pickItem(generatedCompanies, index);

    return {
      id: `cus-${String(customerNumber).padStart(3, "0")}`,
      name: `${firstName} ${lastName}`,
      company,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase()}.example`,
      phone: `+1 555 ${String(200 + index).padStart(3, "0")} ${String(1000 + index * 37).slice(0, 4)}`,
      status: pickItem(statuses, index),
      jobTitle: pickItem(jobTitles, index),
      location: pickItem(locations, index),
      joinedDate: `2026-${String((index % 6) + 1).padStart(2, "0")}-${String((index % 25) + 1).padStart(2, "0")}`,
    };
  });
}

function createGeneratedCompanies(customersList: Customer[]) {
  return customersList.map(
    (customer, index): Company => ({
      customerId: customer.id,
      name: customer.company,
      industry: pickItem(industries, index),
      website: `https://${customer.company.toLowerCase()}.example`,
      employees: pickItem(employeeRanges, index),
    }),
  );
}

const generatedCustomers = createGeneratedCustomers(54);
const generatedCompanyProfiles = createGeneratedCompanies(generatedCustomers);

export const customers: Customer[] = [
  ...featuredCustomers,
  ...generatedCustomers,
];

export const companies: Company[] = [
  ...featuredCompanies,
  ...generatedCompanyProfiles,
];
