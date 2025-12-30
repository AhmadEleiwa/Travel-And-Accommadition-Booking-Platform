import type { Meta, StoryObj } from '@storybook/react'; // Change this
import { BrowserRouter } from 'react-router-dom';
import HotelCard from '.';
import { MOCK_HOTELS } from '../../constants';
import type { Hotel } from '../../features/hotels';


const meta = {
  title: 'Hotel/HotelCard',
  component: HotelCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // It's better to put the Router decorator here so it applies to ALL stories
  decorators: [
    (Story) => (
      <BrowserRouter>
       <div className='flex w-full'>
         <Story />
       </div>
      </BrowserRouter>
    ),
  ],
  args: { 
    hotel: MOCK_HOTELS[0] 
  },
  argTypes: {
    hotel:{table:{disable:true}},
    name: { control: 'text', table: { category: 'Hotel Info' } },
    basePrice: { control: { type: 'number', min: 0 }, table: { category: 'Pricing' } },
    discountedPrice:{control: { type: 'number', min: 0 }, table: { category: 'Pricing' }},
    starRating: { control: { type: 'range', min: 1, max: 5, step: 0.5 }, table: { category: 'Hotel Info' } },
    variant: { control: 'select', options: [ 'featured', 'compact','list'] },
    
    showSaleBadge: { control: 'boolean' }
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
export const Featured:Story = {
args: { variant: 'featured', showSaleBadge: true }
}
export const MissingImage:Story = {
  args:{hotel:{...MOCK_HOTELS[0], thumbnail:''}}
}
export const List:Story = {
  args:{variant:'list'}
}

export const Interactive: Story = {
  args: {
    ...MOCK_HOTELS[0], 
    variant: "featured",
    showSaleBadge: true,
  },
  render: (args) => {
    const { variant, showSaleBadge, ...hotelFields } = args;
    const reconstructedHotel: Hotel = {
      ...MOCK_HOTELS[0],
      ...hotelFields,    
    };

    return (
      <HotelCard 
        hotel={reconstructedHotel} 
        variant={variant} 
        showSaleBadge={showSaleBadge} 
      />
    );
  }
};