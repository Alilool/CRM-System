import { customers } from "@/data/customers";
import type { Deal, DealStage } from "@/types/deal";

const featuredDeals: Deal[] = [
  {
    id: "deal-001",
    customerId: "cus-001",
    customerName: "Sarah Johnson",
    company: "Acme Inc.",
    title: "Annual support package",
    value: 18500,
    stage: "Negotiation",
    closingDate: "2026-07-18",
  },
  {
    id: "deal-002",
    customerId: "cus-002",
    customerName: "Daniel Kim",
    company: "Globex",
    title: "Team onboarding plan",
    value: 32000,
    stage: "Proposal",
    closingDate: "2026-08-02",
  },
  {
    id: "deal-003",
    customerId: "cus-003",
    customerName: "Maya Patel",
    company: "Northstar Labs",
    title: "Analytics workspace",
    value: 24800,
    stage: "Contacted",
    closingDate: "2026-07-29",
  },
  {
    id: "deal-004",
    customerId: "cus-005",
    customerName: "Emily Carter",
    company: "CloudNova",
    title: "Enterprise renewal",
    value: 54000,
    stage: "Won",
    closingDate: "2026-06-28",
  },
  {
    id: "deal-005",
    customerId: "cus-006",
    customerName: "Lucas Brown",
    company: "UrbanGrid",
    title: "Pilot CRM rollout",
    value: 12600,
    stage: "Lead",
    closingDate: "2026-08-14",
  },
  {
    id: "deal-006",
    customerId: "cus-004",
    customerName: "Omar Hassan",
    company: "BrightPath",
    title: "Consulting portal setup",
    value: 9800,
    stage: "Lost",
    closingDate: "2026-05-20",
  },
];

const dealTitles = [
  "CRM rollout",
  "Support package",
  "Analytics upgrade",
  "Team training plan",
  "Workflow automation",
  "Reporting workspace",
  "Customer portal setup",
  "Data migration package",
];

const dealStages: DealStage[] = [
  "Lead",
  "Contacted",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost",
];

function pickItem<T>(items: T[], index: number) {
  return items[index % items.length];
}

function createGeneratedDeals(count: number) {
  return Array.from({ length: count }, (_, index): Deal => {
    const dealNumber = index + featuredDeals.length + 1;
    const customer = pickItem(customers, index + 6);
    const value = 8000 + ((index * 3750) % 52000);

    return {
      id: `deal-${String(dealNumber).padStart(3, "0")}`,
      customerId: customer.id,
      customerName: customer.name,
      company: customer.company,
      title: pickItem(dealTitles, index),
      value,
      stage: pickItem(dealStages, index),
      closingDate: `2026-${String((index % 6) + 7).padStart(2, "0")}-${String((index % 24) + 1).padStart(2, "0")}`,
    };
  });
}

const generatedDeals = createGeneratedDeals(90);

export const deals: Deal[] = [...featuredDeals, ...generatedDeals];
