/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EcosystemCenter {
  id: string;
  name: string;
  overline: string;
  tagline: string;
  description: string;
  bullets: string[];
  colorTheme: 'red' | 'blue' | 'yellow' | 'violet';
  icon: string;
}

export interface Specialist {
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
}

export interface Program {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface BookingFormInput {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  sex: string;
  preferredDateTime: string;
}
