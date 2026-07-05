export type DealStage =
  | "Lead"
  | "Contacted"
  | "Proposal"
  | "Negotiation"
  | "Won"
  | "Lost";

export type Deal = {
  id: string;
  customerId: string;
  customerName: string;
  company: string;
  title: string;
  value: number;
  stage: DealStage;
  closingDate: string;
};
