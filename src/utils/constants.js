import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: '12 MONTH COVER WARRANTY ',
    text:
      'Our story started with a problem (the best ideas usually do). Some ten years ago, our founder was furnishing his flat. Frustrated at the lack of well-designed, good quality and affordable sofas, he set about redefining the process. The concept was clear: collaborate with independent designers and makers to create pieces you’ll love, minus the mark-up. And so FR was born. The destination for creating your dream home.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'ASSEMBLY',
    text:
      'The way we see it, sustainability begins with responsible sourcing. From making sure our key materials create less environmental impact, through to selecting suppliers aligned with our core values. It’s not simply our business strategy, but our moral obligation. ',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'LIFETIME GUARANTEE',
    text:
      'We collaborate with the best independent designers and makers. Working with highly skilled experts, we create quality pieces you’ll love that’ll last for years to come. We know our choice of materials matters both from a social and environmental standpoint. That’s why we’re deeply committed to ingraining sustainability into our product development process, from concept to completion.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
