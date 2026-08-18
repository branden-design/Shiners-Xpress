// TODO(owner): Replace with your real locations before launch.
// Add/remove entries here — the Locations page renders directly from this list.
export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
};

export const locations: Location[] = [
  {
    id: "location-1",
    name: "Shiner's Express — Main Location",
    address: "Add your street address",
    city: "Add city, state, ZIP",
    hours: "Mon–Sun: 7:00 AM – 8:00 PM",
    phone: "(555) 123-4567",
  },
  {
    id: "location-2",
    name: "Shiner's Express — Second Location",
    address: "Add your street address",
    city: "Add city, state, ZIP",
    hours: "Mon–Sun: 7:00 AM – 8:00 PM",
    phone: "(555) 123-4567",
  },
];
