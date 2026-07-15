import { company } from '../data/siteContent';

export function getWhatsAppUrl(message) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
