export interface Project {
  id: string;
  title: string;
  type: string;
  value: number;
  status: 'Completed' | 'Under Construction' | 'Planning';
  description: string;
  address: string;
  image: string; // URL to property image
  model3D?: string; // URL or embed code for 3D model (iframe src, Sketchfab embed, etc.)
  process?: string[]; // Array of process steps/phases (optional)
  beforeImages?: string[]; // Array of before images
  inProgressImages?: string[]; // Array of in progress images
  afterImages?: string[]; // Array of after images
  beginDate: string; // Start date (format: "YYYY-MM-DD" or "Month YYYY")
  endDate?: string; // End date (optional if still in progress, format: "YYYY-MM-DD" or "Month YYYY")
  location?: string; // City/State for display
}

// Scalable portfolio - add new projects here
export const portfolio: Project[] = [
  {
    id: '9002-corliss-ave',
    title: '9002 Corliss Ave N',
    type: 'Residential',
    value: 0,
    status: 'Under Construction',
    description: 'Situated in the beautiful Greenlake neighborhood, this handcrafted home was originally built in the 1930s. The property has undergone a complete gut renovation, including comprehensive upgrades from the roof to the electrical systems, and from the floors to the walls. The renovated home will feature 4 bedrooms and 2 bathrooms, with approximately 2,100 square feet of living space. This extensive renovation ensures modern functionality while preserving the character and craftsmanship of the original 1930s construction.',
    address: '9002 Corliss Ave N, Seattle, WA 98103',
    image: '/images/properties/9002 corliss ave A/Before /9002 corliss old #1.png',
    beforeImages: [
      '/images/properties/9002 corliss ave A/Before /9002 corliss old #1.png',
      '/images/properties/9002 corliss ave A/Before /9002 corliss old #2.png',
      '/images/properties/9002 corliss ave A/Before /9002 corliss old #3.png',
      '/images/properties/9002 corliss ave A/Before /9002 corliss old #4.png',
      '/images/properties/9002 corliss ave A/Before /9002 corliss old #5.png'
    ],
    inProgressImages: [
      '/images/properties/9002 corliss ave A/In progress/9002 progress corliss A #1.jpeg',
      '/images/properties/9002 corliss ave A/In progress/9002 progress corliss A #2.jpeg',
      '/images/properties/9002 corliss ave A/In progress/9002 progress corliss A #3.jpeg',
      '/images/properties/9002 corliss ave A/In progress/9002 progress corliss A #4.jpeg',
      '/images/properties/9002 corliss ave A/In progress/9002 progress corliss A #5.jpeg'
    ],
    afterImages: [
      'coming-soon',
      'coming-soon',
      'coming-soon'
    ],
    beginDate: 'November 1, 2025',
    endDate: 'TBD',
    location: 'Seattle, WA'
  },
  {
    id: '9002b-corliss-ave',
    title: '9002(B) Corliss Ave N',
    type: 'Residential',
    value: 0,
    status: 'Under Construction',
    description: 'A beautiful DADU (Detached Accessory Dwelling Unit) featuring 2 bedrooms and 1.5 bathrooms, with approximately 1,000 square feet of living space. Designed to align with the City of Seattle\'s comprehensive housing development initiatives, this thoughtfully designed unit provides comfortable living space suitable for families, contributing to Seattle\'s goal of increasing housing density and availability. The project represents a modern approach to accessory dwelling unit construction, combining efficient use of space with quality design and construction standards.',
    address: '9002(B) Corliss Ave N, Seattle, WA 98103',
    image: '/images/properties/9002 corliss ave B/9002 corliss B Schooner.png',
    beforeImages: [
      '/images/properties/9002 corliss ave B/Before/9002 B Before #1.png'
    ],
    inProgressImages: [
      '/images/properties/9002 corliss ave B/In progress/9002 B #1.png',
      'https://via.placeholder.com/800x600/cccccc/666666?text=In+Progress+2',
      'https://via.placeholder.com/800x600/cccccc/666666?text=In+Progress+3',
      'https://via.placeholder.com/800x600/cccccc/666666?text=In+Progress+4',
      'https://via.placeholder.com/800x600/cccccc/666666?text=In+Progress+5'
    ],
    afterImages: [
      'coming-soon',
      'coming-soon',
      'coming-soon'
    ],
    beginDate: 'TBD',
    endDate: 'TBD',
    location: 'Seattle, WA'
  }
];

export const totalPortfolioValue = portfolio.reduce((sum, project) => sum + project.value, 0);

