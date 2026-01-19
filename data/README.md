# Adding Properties to Portfolio

To add a new property to the Featured Work page, edit `portfolio.ts` and add a new project object to the `portfolio` array.

## Required Fields

- `id`: Unique identifier (e.g., 'property-1')
- `title`: Property name
- `type`: 'Residential' or 'Industrial'
- `value`: Property value in USD (number)
- `status`: 'Completed' | 'Under Construction' | 'Planning'
- `description`: Brief description of the property
- `address`: Full address (e.g., '123 Main St, Seattle, WA 98101')
- `image`: Path to property image (e.g., '/images/properties/property-1.jpg')
- `process`: Array of process steps (e.g., ['Step 1', 'Step 2', 'Step 3'])
- `beginDate`: Start date (e.g., 'January 2023' or '2023-01-15')
- `endDate`: End date (optional, omit if still in progress)
- `location`: City/State for display (optional)
- `model3D`: URL or embed code for 3D model (optional)

## Example

```typescript
{
  id: 'property-1',
  title: 'Modern Residential Home',
  type: 'Residential',
  value: 1200000,
  status: 'Completed',
  description: 'Complete renovation of a 3-bedroom home with modern finishes.',
  address: '123 Main St, Seattle, WA 98101',
  image: '/images/properties/property-1.jpg',
  model3D: 'https://sketchfab.com/models/abc123/embed',
  process: [
    'Initial Assessment & Planning',
    'Structural Upgrades',
    'Electrical & Systems Installation',
    'Interior Finishing',
    'Final Inspection & Completion'
  ],
  beginDate: 'January 2023',
  endDate: 'June 2024',
  location: 'Seattle, WA'
}
```

## Image Setup

1. Add property images to `/public/images/properties/` directory
2. Name them descriptively (e.g., `property-1.jpg`, `property-2.jpg`)
3. Recommended image size: 1200x800px or similar aspect ratio
4. Use the path `/images/properties/filename.jpg` in the `image` field

## 3D Model Setup

For 3D models, you can use:
- **Sketchfab**: Use the embed URL (e.g., `https://sketchfab.com/models/abc123/embed`)
- **Other platforms**: Use iframe-compatible embed URLs
- The system will automatically handle iframe embedding

