import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  challenge?: string;
  solution?: string;
}

export interface TrustPoint {
  text: string;
}

export interface ProductDetail {
  name: string;
  tagline: string;
  points: string[];
}

export interface NavLink {
  label: string;
  href: string;
}