export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  order?: number;
  imageUrl?: string;
};

export type EventItem = {
  _id: string;
  title: string;
  status: "upcoming" | "past" | "ongoing";
  startDate?: string;
  endDate?: string;
  summary: string;
  format?: string;
  registrationUrl?: string;
  highlight?: boolean;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug?: string;
  publishedAt?: string;
  excerpt?: string;
};

export type ResourceCategory = {
  title: string;
  links: Array<{ label: string; href: string; note?: string }>;
};
